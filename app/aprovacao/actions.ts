"use server";

import { cookies } from "next/headers";
import { corpoAprovacao, corpoMensagem, lerAprovacoes, lerConversa, LIMITE_MENSAGEM, type Aprovacao, type Comentario, type Fala } from "./comentarios";
import { mudancaPorId, paginaDe } from "./mudancas";
import { COOKIE_SESSAO, sessaoValida } from "./sessao";

// Approvals and the client conversation live as comments on the page's GitHub issue (issue #50).
// GITHUB_TOKEN: fine-grained, this repository only, Issues read and write. Never reaches the browser.

const REPO = process.env.GITHUB_REPO || "Nucleo-Tangerina/teia-de-saberes";

// flat shapes: the project compiles with strict off, which does not narrow discriminated unions
export type Envio = { ok: boolean; erro?: string };
export type Estado = Envio & { aprovacoes?: Record<string, Aprovacao>; conversa?: Fala[] };

const FALHA = "Não foi possível falar com o servidor agora. Tente de novo em alguns minutos.";

async function autorizado() {
  const token = process.env.APROVACAO_TOKEN;
  return Boolean(process.env.GITHUB_TOKEN) && sessaoValida((await cookies()).get(COOKIE_SESSAO)?.value, token);
}

async function github(issue: number, init?: RequestInit) {
  // shortcut: reads only the first 100 comments of an issue; paginate if a page's conversation grows past that
  return fetch(`https://api.github.com/repos/${REPO}/issues/${issue}/comments?per_page=100`, {
    ...init,
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "site-aprovacao",
      ...(init?.body ? { "Content-Type": "application/json" } : {}),
    },
  }).catch(() => null);
}

// shortcut: per-instance memory, so the limit resets on cold starts; move to a shared store if abused
const envios: number[] = [];
function excedeuLimite() {
  const agora = Date.now();
  while (envios.length && agora - envios[0] > 60_000) envios.shift();
  if (envios.length >= 10) return true;
  envios.push(agora);
  return false;
}

async function comentar(issue: number, body: string): Promise<Envio> {
  if (excedeuLimite()) return { ok: false, erro: "Muitos envios em sequência. Aguarde um minuto e tente de novo." };
  const res = await github(issue, { method: "POST", body: JSON.stringify({ body }) });
  if (!res?.ok) {
    console.error("aprovacao: GitHub respondeu", res?.status);
    return { ok: false, erro: FALHA };
  }
  return { ok: true };
}

export async function carregar(pagina: string): Promise<Estado> {
  const p = paginaDe(pagina);
  if (!p || !(await autorizado())) return { ok: false, erro: "Acesso de aprovação inválido ou expirado." };
  const res = await github(p.issue);
  if (!res?.ok) return { ok: false, erro: FALHA };
  const cs = (await res.json()) as Comentario[];
  return { ok: true, aprovacoes: lerAprovacoes(cs), conversa: lerConversa(cs) };
}

export async function aprovar(mudancaId: string, variacaoId: string): Promise<Envio> {
  const m = mudancaPorId(mudancaId);
  const v = m?.variacoes.find((x) => x.id === variacaoId);
  const p = m && paginaDe(m.pagina);
  if (!m || !v || !p || !(await autorizado())) return { ok: false, erro: "Acesso de aprovação inválido ou expirado." };
  return comentar(p.issue, corpoAprovacao(m.id, m.titulo, v.id, v.nome, new Date()));
}

export async function enviarMensagem(pagina: string, texto: string): Promise<Envio> {
  const p = paginaDe(pagina);
  const limpo = String(texto ?? "").trim();
  if (!p || !(await autorizado())) return { ok: false, erro: "Acesso de aprovação inválido ou expirado." };
  if (!limpo) return { ok: false, erro: "Escreva a mensagem antes de enviar." };
  if (limpo.length > LIMITE_MENSAGEM) return { ok: false, erro: `A mensagem passa de ${LIMITE_MENSAGEM} caracteres.` };
  return comentar(p.issue, corpoMensagem(p.nome, limpo));
}
