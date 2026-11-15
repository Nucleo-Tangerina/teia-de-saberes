"use client";

import { useEffect, useRef, type RefObject } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import type { FioKey, Solution } from "../content";
import { SolutionCard } from "../ui";
import { filterByFio, parseFio } from "./fio";

type Props = {
  solutions: Solution[];
  fios: readonly { key: FioKey; nome: string; filtro: string }[];
};

function View({
  solutions,
  fios,
  active,
  onPick,
  gridRef,
}: Props & { active: FioKey | null; onPick?: (k: FioKey | null) => void; gridRef?: RefObject<HTMLDivElement | null> }) {
  const shown = filterByFio(solutions, active);
  const nome = fios.find((f) => f.key === active)?.nome;
  const options: { key: FioKey | null; label: string }[] = [
    { key: null, label: "Todas as soluções" },
    ...fios.map((f) => ({ key: f.key, label: f.filtro })),
  ];
  return (
    <>
      <div className="chips hub-filter" role="group" aria-label="Filtrar por pergunta">
        {options.map((o) => (
          <button key={o.label} type="button" className="chip" aria-pressed={active === o.key} onClick={() => onPick?.(o.key)}>
            {o.label}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {shown.length} {shown.length === 1 ? "solução" : "soluções"}
        {nome ? ` em ${nome}` : ""}
      </p>
      <div className="sol-grid" ref={gridRef}>
        {shown.map((s) => (
          // number = position in the full list, so a card keeps its 01-08 under any filter
          <SolutionCard key={s.slug} s={s} i={solutions.indexOf(s)} />
        ))}
      </div>
    </>
  );
}

/** Server-rendered stand-in while the URL is read: same markup, no filter applied. */
export function SolutionsFilterFallback(props: Props) {
  return <View {...props} active={null} />;
}

export function SolutionsFilter(props: Props) {
  const params = useSearchParams();
  const pathname = usePathname();
  const active = parseFio(params.get("fio"));
  const grid = useRef<HTMLDivElement>(null);

  // Motion arms reveals once per route; cards mounted later by the filter must show themselves.
  useEffect(() => {
    grid.current?.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("in"));
  }, [active]);

  // Native replaceState syncs useSearchParams without a server round trip or scroll jump.
  const pick = (k: FioKey | null) => window.history.replaceState(null, "", k ? `${pathname}?fio=${k}` : pathname);

  return <View {...props} active={active} onPick={pick} gridRef={grid} />;
}
