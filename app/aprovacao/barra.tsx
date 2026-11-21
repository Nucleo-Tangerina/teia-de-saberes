"use client";

import { useCallback, useEffect, useState, useTransition } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Check, ChevronDown, ChevronUp } from "lucide-react";
import { aprovar, carregar, enviarMensagem, type Estado } from "./actions";
import type { Aprovacao } from "./comentarios";
import { escolher, useEscolhas, useModoAprovacao } from "./estado";
import { mudancasDa, paginaDe, paginas, type Mudanca } from "./mudancas";

const dia = (iso: string) => new Date(iso).toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" });
const letra = (i: number) => String.fromCharCode(65 + i);

function mostrar(id: string) {
  // the wrapper is display: contents, so scroll to what it renders
  const el = document.querySelector(`[data-mudanca="${id}"]`);
  (el?.firstElementChild ?? el?.parentElement)?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function ItemMudanca({ m, n, escolha, aprovada, recarregar }: { m: Mudanca; n: number; escolha: string; aprovada?: Aprovacao; recarregar: () => void }) {
  const [enviando, iniciar] = useTransition();
  const [erro, setErro] = useState("");
  const jaAprovada = aprovada?.variacao === escolha;
  const nomeAprovada = m.variacoes.find((v) => v.id === aprovada?.variacao)?.nome;
  const letraEscolha = letra(Math.max(0, m.variacoes.findIndex((v) => v.id === escolha)));

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
            <span className="aprov-num" aria-hidden>
              {n}
            </span>
            <span>{m.titulo}</span>
          </button>
        </legend>
        <p className="aprov-expl">{m.explicacao}</p>
        <div className="aprov-opcoes">
          {m.variacoes.map((v, i) => (
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
              <span className="aprov-letra" aria-hidden>
                {letra(i)}
              </span>
              <span className="aprov-opcao-texto">
                <strong>{v.nome}</strong>
                <span>{v.descricao}</span>
              </span>
              <span className="aprov-radio" aria-hidden />
            </label>
          ))}
        </div>
        {aprovada && (
          <p className="aprov-ok">
            <Check size={16} aria-hidden />
            <span>
              Aprovada: {nomeAprovada} em {dia(aprovada.data)}
            </span>
          </p>
        )}
        {!jaAprovada && (
          <button type="button" className="btn btn-sm aprov-aprovar" disabled={enviando} onClick={confirmar}>
            {enviando ? "Enviando…" : `${aprovada ? "Trocar para" : "Aprovar"} opção ${letraEscolha}`}
          </button>
        )}
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
      <h2 id="aprov-conversa-titulo" className="aprov-rotulo">
        Observações
      </h2>
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
        <button type="submit" className="btn btn-orange btn-sm aprov-enviar" disabled={enviando || !texto.trim()}>
          {enviando ? "Enviando…" : "Enviar observação"}
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
  const todas = daPagina.length > 0 && feitas === daPagina.length;
  const lista = Object.keys(paginas);
  const atual = lista.indexOf(pagina);
  const proxima = atual >= 0 ? lista[(atual + 1) % lista.length] : null;

  // collapsed: one obvious button instead of a quiet header the client misses
  if (!aberta)
    return (
      <aside className="aprov-barra is-fechada" aria-label="Modo de aprovação">
        <button type="button" className="aprov-abrir" aria-expanded={false} aria-controls="aprov-corpo" onClick={() => setAberta(true)}>
          {daPagina.length ? "Aprovar esta página" : "Revisar esta página"}
          {daPagina.length > 0 && (
            <span className="aprov-abrir-conta">
              {feitas}/{daPagina.length}
            </span>
          )}
          <ChevronUp size={18} aria-hidden />
        </button>
      </aside>
    );

  return (
    <aside className={`aprov-barra${aberta ? " is-aberta" : ""}`} aria-label="Modo de aprovação">
      <div className="aprov-topo">
        <div className="aprov-titulos">
          <span className="aprov-eyebrow">Aprovação do site</span>
          <strong className="aprov-pagina">{paginaDe(pagina)?.nome ?? "Página fora da revisão"}</strong>
        </div>
        {daPagina.length > 0 && (
          <span className={`aprov-progresso${todas ? " is-ok" : ""}`} aria-label={`${feitas} de ${daPagina.length} aprovadas`}>
            {todas && <Check size={14} aria-hidden />}
            {feitas}/{daPagina.length}
          </span>
        )}
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
            <section className="aprov-secao" aria-labelledby="aprov-escolhas-titulo">
              <h2 id="aprov-escolhas-titulo" className="aprov-rotulo">
                Escolhas nesta página
              </h2>
              <ol className="aprov-lista">
                {daPagina.map((m, i) => (
                  <ItemMudanca key={m.id} m={m} n={i + 1} escolha={escolhas[m.id] ?? m.padrao} aprovada={aprovacoes[m.id]} recarregar={recarregar} />
                ))}
              </ol>
            </section>
          )}
          {temPagina && daPagina.length === 0 && (
            <p className="aprov-vazio">Nesta página não há escolhas. Revise o conteúdo e, se quiser mudar algo, escreva abaixo.</p>
          )}
          {temPagina && <Conversa pagina={pagina} estado={estado} recarregar={recarregar} />}
          <details className="aprov-todas">
            <summary className="aprov-rotulo">
              Todas as páginas ({lista.length})
              <ChevronDown size={16} aria-hidden />
            </summary>
            <nav aria-label="Páginas em aprovação">
              <ul className="aprov-paginas">
                {lista.map((p) => {
                  const n = mudancasDa(p).length;
                  return (
                    <li key={p}>
                      <Link href={p} aria-current={p === pagina ? "page" : undefined}>
                        <span>{paginas[p].nome}</span>
                        <span className="aprov-meta">{p === pagina ? "Você está aqui" : n ? `${n} escolha${n > 1 ? "s" : ""}` : "só revisar"}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </details>
          {proxima && (
            <Link href={proxima} className="btn btn-outline btn-sm aprov-proxima">
              Próxima página
              <ArrowRight size={18} aria-hidden />
            </Link>
          )}
          <a className="aprov-sair" href="/aprovar?sair">
            Sair do modo de aprovação
          </a>
        </div>
      )}
    </aside>
  );
}
