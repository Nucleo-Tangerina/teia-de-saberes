"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useEscolhas, useModoAprovacao } from "./estado";
import { mudancaPorId } from "./mudancas";

/**
 * Renders one variation of a registered change. Visitors (and the static HTML) always get the default;
 * in approval mode the client's current choice shows instead.
 */
export function Variante({ id, opcoes, inline }: { id: string; opcoes: Record<string, ReactNode>; inline?: boolean }) {
  const ativo = useModoAprovacao();
  const escolha = useEscolhas()[id];
  const padrao = mudancaPorId(id)?.padrao ?? Object.keys(opcoes)[0];
  const v = ativo && escolha && escolha in opcoes ? escolha : padrao;
  const ref = useRef<HTMLElement>(null);
  const primeira = useRef(true);

  // Motion observes reveal targets only once per page, so a swapped-in variation would stay hidden
  useEffect(() => {
    if (primeira.current) {
      primeira.current = false;
      return;
    }
    ref.current?.querySelectorAll("[data-reveal]:not(.in)").forEach((el) => el.classList.add("in"));
  }, [v]);

  // inline: inside text (a <p>), where a <div> would be invalid
  const Tag = inline ? "span" : "div";
  return (
    <Tag ref={ref as React.Ref<HTMLDivElement & HTMLSpanElement>} data-mudanca={id} className="aprov-variante">
      {opcoes[v]}
    </Tag>
  );
}
