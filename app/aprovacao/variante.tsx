"use client";

import type { ReactNode } from "react";
import { useEscolhas, useModoAprovacao } from "./estado";
import { mudancaPorId } from "./mudancas";

/**
 * Renders one variation of a registered change. Visitors (and the static HTML) always get the default;
 * in approval mode the client's current choice shows instead.
 */
export function Variante({ id, opcoes }: { id: string; opcoes: Record<string, ReactNode> }) {
  const ativo = useModoAprovacao();
  const escolha = useEscolhas()[id];
  const padrao = mudancaPorId(id)?.padrao ?? Object.keys(opcoes)[0];
  const v = ativo && escolha && escolha in opcoes ? escolha : padrao;
  return (
    <div data-mudanca={id} className="aprov-variante">
      {opcoes[v]}
    </div>
  );
}
