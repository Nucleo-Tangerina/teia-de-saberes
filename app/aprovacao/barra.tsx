"use client";

import { useEffect, useState } from "react";

// Pages stay static: the bar decides on the client from the hint cookie. Server actions re-check the httpOnly one.
export function useModoAprovacao() {
  const [ativo, setAtivo] = useState(false);
  useEffect(() => setAtivo(/(?:^|;\s*)aprovacao=1/.test(document.cookie)), []);
  return ativo;
}

export function BarraAprovacao() {
  if (!useModoAprovacao()) return null;
  return (
    <aside className="aprov-barra" aria-label="Modo de aprovação">
      <strong>Modo de aprovação</strong>
      <a href="/aprovar?sair">Sair</a>
    </aside>
  );
}
