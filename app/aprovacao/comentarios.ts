// Comment format on the GitHub issues (issue #50). Pure functions, no Next imports, so they can be tested with node --test.

export type Comentario = { body: string; created_at: string };
export type Aprovacao = { variacao: string; data: string };
export type Fala = { autor: "cliente" | "equipe"; texto: string; data: string };

const APROV = /^<!-- teia:aprovacao ([\w-]+)=([\w-]+) -->/;
const MSG = "<!-- teia:mensagem -->";
const CERCA = /````text\n([\s\S]*)\n````\s*$/;
export const LIMITE_MENSAGEM = 2000;

export function corpoAprovacao(mudanca: string, titulo: string, variacao: string, nome: string, data: Date) {
  const dia = data.toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" });
  return `<!-- teia:aprovacao ${mudanca}=${variacao} -->\n**Aprovação do cliente:** ${titulo}: variação ${variacao.toUpperCase()} (${nome}), em ${dia}.`;
}

/** Client text goes inside a fence, so markdown, links and @mentions stay inert on GitHub. */
export function corpoMensagem(pagina: string, texto: string) {
  const limpo = texto.slice(0, LIMITE_MENSAGEM).replace(/`{4,}/g, "```");
  return `${MSG}\n**Mensagem do cliente** · ${pagina}\n\n\`\`\`\`text\n${limpo}\n\`\`\`\``;
}

/** Last approval per change wins, so the client can change their mind. */
export function lerAprovacoes(cs: Comentario[]): Record<string, Aprovacao> {
  const out: Record<string, Aprovacao> = {};
  for (const c of cs) {
    const m = c.body.match(APROV);
    if (m) out[m[1]] = { variacao: m[2], data: c.created_at };
  }
  return out;
}

/**
 * Conversation: client messages, plus team comments posted after the client's first message
 * (planning comments made before the client arrived stay out).
 */
export function lerConversa(cs: Comentario[]): Fala[] {
  const out: Fala[] = [];
  let comecou = false;
  for (const c of cs) {
    if (c.body.startsWith(MSG)) {
      comecou = true;
      out.push({ autor: "cliente", texto: c.body.match(CERCA)?.[1] ?? "", data: c.created_at });
    } else if (comecou && !APROV.test(c.body)) {
      out.push({ autor: "equipe", texto: c.body.trim(), data: c.created_at });
    }
  }
  return out;
}
