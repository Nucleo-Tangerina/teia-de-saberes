// Registry of what the client approves, page by page (issue #49).
// Once a change is approved: keep the chosen variation in the page, delete the others and remove the entry here.

export type Variacao = { id: string; nome: string; descricao: string };

export type Mudanca = {
  id: string;
  pagina: string; // pathname where it shows
  issue: number; // GitHub issue that records approvals and the conversation
  titulo: string;
  explicacao: string; // plain language, for the client
  variacoes: Variacao[];
  padrao: string; // variation the public site shows
};

export const mudancas: Mudanca[] = [];

export const paginaNome: Record<string, string> = {
  "/": "Início",
};

export const mudancaPorId = (id: string) => mudancas.find((m) => m.id === id);
export const mudancasDa = (pagina: string) => mudancas.filter((m) => m.pagina === pagina);

/** `?v=home-topo:b,home-munis:a` <-> { "home-topo": "b", "home-munis": "a" }; unknown ids and variations are dropped. */
export function lerEscolhas(param: string | null, lista: Mudanca[] = mudancas): Record<string, string> {
  const out: Record<string, string> = {};
  for (const par of (param ?? "").split(",")) {
    const [id, v] = par.split(":");
    const m = lista.find((x) => x.id === id);
    if (m?.variacoes.some((x) => x.id === v)) out[id] = v;
  }
  return out;
}

export const escreverEscolhas = (e: Record<string, string>) =>
  Object.entries(e)
    .map(([id, v]) => `${id}:${v}`)
    .join(",");
