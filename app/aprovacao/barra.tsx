"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import { escolher, useEscolhas, useModoAprovacao } from "./estado";
import { mudancas, mudancasDa, paginaNome, type Mudanca } from "./mudancas";

function mostrar(id: string) {
  // the wrapper is display: contents, so scroll to what it renders
  const el = document.querySelector(`[data-mudanca="${id}"]`);
  (el?.firstElementChild ?? el?.parentElement)?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function ItemMudanca({ m, escolha }: { m: Mudanca; escolha: string }) {
  return (
    <li className="aprov-item">
      <fieldset>
        <legend>
          <button type="button" className="aprov-ir" onClick={() => mostrar(m.id)}>
            {m.titulo}
          </button>
        </legend>
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
      </fieldset>
    </li>
  );
}

export function BarraAprovacao() {
  const ativo = useModoAprovacao();
  const escolhas = useEscolhas();
  const pagina = usePathname();
  const [aberta, setAberta] = useState(true);
  if (!ativo) return null;

  const daPagina = mudancasDa(pagina);
  const paginas = [...new Set(mudancas.map((m) => m.pagina))];

  return (
    <aside className={`aprov-barra${aberta ? " is-aberta" : ""}`} aria-label="Modo de aprovação">
      <div className="aprov-topo">
        <strong>Modo de aprovação</strong>
        <span className="aprov-conta">
          {daPagina.length ? `${daPagina.length} mudança${daPagina.length > 1 ? "s" : ""} nesta página` : "Nada a aprovar nesta página"}
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
          {daPagina.length > 0 && (
            <ol className="aprov-lista">
              {daPagina.map((m) => (
                <ItemMudanca key={m.id} m={m} escolha={escolhas[m.id] ?? m.padrao} />
              ))}
            </ol>
          )}
          {paginas.length > 0 && (
            <nav className="aprov-paginas" aria-label="Páginas em aprovação">
              <span>Páginas em aprovação:</span>
              {paginas.map((p) => (
                <Link key={p} href={p} aria-current={p === pagina ? "page" : undefined}>
                  {paginaNome[p] ?? p}
                </Link>
              ))}
            </nav>
          )}
          <a className="aprov-sair" href="/aprovar?sair">
            Sair do modo de aprovação
          </a>
        </div>
      )}
    </aside>
  );
}
