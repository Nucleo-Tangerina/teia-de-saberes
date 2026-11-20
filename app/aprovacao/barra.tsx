"use client";

import { useCallback, useEffect, useState, useTransition } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import { aprovar, carregar, enviarMensagem, type Estado } from "./actions";
import type { Aprovacao } from "./comentarios";
import { escolher, useEscolhas, useModoAprovacao } from "./estado";
import { mudancasDa, paginaDe, paginas, type Mudanca } from "./mudancas";

const dia = (iso: string) => new Date(iso).toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" });

function mostrar(id: string) {
  // the wrapper is display: contents, so scroll to what it renders
  const el = document.querySelector(`[data-mudanca="${id}"]`);
  (el?.firstElementChild ?? el?.parentElement)?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function ItemMudanca({ m, escolha, aprovada, recarregar }: { m: Mudanca; escolha: string; aprovada?: Aprovacao; recarregar: () => void }) {
  const [enviando, iniciar] = useTransition();
  const [erro, setErro] = useState("");
  const jaAprovada = aprovada?.variacao === escolha;
  const nomeAprovada = m.variacoes.find((v) => v.id === aprovada?.variacao)?.nome;

  const confirmar = () =>
    iniciar(async () => {
      setErro("");
      const r = await aprovar(m.id, escolha);
      if (r.ok) recarregar();
      else setErro(r.erro);
    });

  return (
    <li className="aprov-item">
      <fieldset>
        <legend>
          <button type="button" className="aprov-ir" onClick={() => mostrar(m.id)}>
            {m.titulo}
          </button>
        </legend>
        <p className={`aprov-status${aprovada ? " is-ok" : ""}`}>
          {aprovada ? `Aprovada: ${nomeAprovada}, em ${dia(aprovada.data)}` : "Aguardando sua escolha"}
        </p>
        <p className="aprov-expl">{m.explicacao}</p>
        {m.variacoes.map((v) => (
          <label key={v.id} className="aprov-opcao">
            <input
              type="radio"
              name={m.id}
              value={v.id}
              checked={escolha === v.id}
              onChange={() => {
                escolher(m.id, v.id);
                mostrar(m.id);
              }}
            />
            <span>
              <strong>{v.nome}</strong>
              <span>{v.descricao}</span>
            </span>
          </label>
        ))}
        <button type="button" className="btn btn-orange btn-sm aprov-aprovar" disabled={enviando || jaAprovada} onClick={confirmar}>
          {jaAprovada ? "Esta variação está aprovada" : enviando ? "Enviando…" : "Aprovar esta variação"}
        </button>
        {erro && (
          <p className="aprov-erro" role="alert">
            {erro}
          </p>
        )}
      </fieldset>
    </li>
  );
}

function Conversa({ pagina, estado, recarregar }: { pagina: string; estado: Estado | null; recarregar: () => void }) {
  const [texto, setTexto] = useState("");
  const [erro, setErro] = useState("");
  const [enviando, iniciar] = useTransition();

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    iniciar(async () => {
      setErro("");
      const r = await enviarMensagem(pagina, texto);
      // text is cleared only after the server confirms, so a failure never loses it
      if (r.ok) {
        setTexto("");
        recarregar();
      } else setErro(r.erro);
    });
  };

  return (
    <section className="aprov-conversa" aria-labelledby="aprov-conversa-titulo">
      <h2 id="aprov-conversa-titulo">Observações sobre esta página</h2>
      {estado?.ok && estado.conversa.length > 0 && (
        <ol className="aprov-falas" aria-live="polite">
          {estado.conversa.map((f, i) => (
            <li key={i} className={`aprov-fala is-${f.autor}`}>
              <span className="aprov-autor">
                {f.autor === "cliente" ? "Você" : "Equipe"} · {dia(f.data)}
              </span>
              <p>{f.texto}</p>
            </li>
          ))}
        </ol>
      )}
      <form onSubmit={enviar}>
        <label htmlFor="aprov-texto" className="sr-only">
          Sua mensagem
        </label>
        <textarea
          id="aprov-texto"
          rows={3}
          maxLength={2000}
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escreva uma observação ou outra mudança que você quer nesta página."
        />
        <button type="submit" className="btn btn-orange btn-sm" disabled={enviando || !texto.trim()}>
          {enviando ? "Enviando…" : "Enviar"}
        </button>
        {erro && (
          <p className="aprov-erro" role="alert">
            {erro}
          </p>
        )}
      </form>
    </section>
  );
}

export function BarraAprovacao() {
  const ativo = useModoAprovacao();
  const escolhas = useEscolhas();
  const pagina = usePathname();
  const [aberta, setAberta] = useState(true);
  const [estado, setEstado] = useState<Estado | null>(null);

  // on a phone the open panel would hide the page being judged
  useEffect(() => {
    if (matchMedia("(max-width: 720px)").matches) setAberta(false);
  }, []);

  const temPagina = Boolean(paginaDe(pagina));
  const recarregar = useCallback(() => {
    carregar(pagina).then(setEstado, () => setEstado({ ok: false, erro: "Não foi possível carregar as aprovações." }));
  }, [pagina]);

  useEffect(() => {
    setEstado(null);
    if (ativo && temPagina) recarregar();
  }, [ativo, temPagina, recarregar]);

  // with no choice in the link, show what the client already approved
  useEffect(() => {
    if (!estado?.ok) return;
    for (const [id, a] of Object.entries(estado.aprovacoes)) if (!(id in escolhas)) escolher(id, a.variacao);
    // runs only when fresh approvals arrive, not on every choice
  }, [estado]);

  if (!ativo) return null;

  const daPagina = mudancasDa(pagina);
  const aprovacoes = estado?.ok ? estado.aprovacoes : {};
  const feitas = daPagina.filter((m) => aprovacoes[m.id]).length;

  return (
    <aside className={`aprov-barra${aberta ? " is-aberta" : ""}`} aria-label="Modo de aprovação">
      <div className="aprov-topo">
        <strong>Modo de aprovação</strong>
        <span className="aprov-conta">
          {daPagina.length ? `${feitas} de ${daPagina.length} aprovada${daPagina.length > 1 ? "s" : ""}` : "Nada a aprovar nesta página"}
        </span>
        <button
          type="button"
          className="aprov-icone"
          aria-expanded={aberta}
          aria-controls="aprov-corpo"
          aria-label={aberta ? "Recolher painel" : "Abrir painel"}
          onClick={() => setAberta(!aberta)}
        >
          {aberta ? <ChevronDown size={18} aria-hidden /> : <ChevronUp size={18} aria-hidden />}
        </button>
      </div>
      {aberta && (
        <div id="aprov-corpo" className="aprov-corpo">
          {estado && !estado.ok && (
            <p className="aprov-erro" role="alert">
              {estado.erro}
            </p>
          )}
          {daPagina.length > 0 && (
            <ol className="aprov-lista">
              {daPagina.map((m) => (
                <ItemMudanca key={m.id} m={m} escolha={escolhas[m.id] ?? m.padrao} aprovada={aprovacoes[m.id]} recarregar={recarregar} />
              ))}
            </ol>
          )}
          {temPagina && <Conversa pagina={pagina} estado={estado} recarregar={recarregar} />}
          <nav className="aprov-paginas" aria-label="Páginas em aprovação">
            <span>Páginas em aprovação:</span>
            {Object.entries(paginas).map(([p, { nome }]) => (
              <Link key={p} href={p} aria-current={p === pagina ? "page" : undefined}>
                {nome}
              </Link>
            ))}
          </nav>
          <a className="aprov-sair" href="/aprovar?sair">
            Sair do modo de aprovação
          </a>
        </div>
      )}
    </aside>
  );
}
