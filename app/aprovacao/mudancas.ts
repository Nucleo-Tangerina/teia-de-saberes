// Registry of what the client approves, page by page (issue #49).
// Once a change is approved: keep the chosen variation in the page, delete the others and remove the entry here.

export type Variacao = { id: string; nome: string; descricao: string };

export type Mudanca = {
  id: string;
  pagina: string; // pathname where it shows
  titulo: string;
  explicacao: string; // plain language, for the client
  variacoes: Variacao[];
  padrao: string; // variation the public site shows
};

export const mudancas: Mudanca[] = [
  // Home (issue #30)
  {
    id: "home-topo",
    pagina: "/",
    titulo: "Abertura da página",
    explicacao: "A primeira coisa que o visitante vê ao entrar no site.",
    padrao: "a",
    variacoes: [
      { id: "a", nome: "Foto única", descricao: "Fundo claro, o texto de abertura e uma foto, como no site antes da reformulação." },
      { id: "b", nome: "Carrossel de soluções", descricao: "Fundo claro, com slides que passam sozinhos: Caminhos da Inclusão, Tear, a abertura da Teia e as demais soluções." },
    ],
  },
  {
    id: "home-2050",
    pagina: "/",
    titulo: "Frase de apresentação da Teia",
    explicacao: "O texto logo abaixo do título da abertura.",
    padrao: "a",
    variacoes: [
      { id: "a", nome: "Ajudar a UNESCO", descricao: "Diz que a Teia é voltada a ajudar a UNESCO a construir o Novo Contrato Social da Educação até 2050." },
      { id: "b", nome: "Ajudar as redes públicas", descricao: "Diz que a Teia ajuda as redes públicas a construir, até 2050, o Novo Contrato Social proposto pela UNESCO. Evita dar a entender que a UNESCO apoia ou contrata a Teia." },
    ],
  },
  {
    id: "home-munis",
    pagina: "/",
    titulo: "Municípios parceiros",
    explicacao: "Os brasões das cidades que trabalham com a Teia.",
    padrao: "a",
    variacoes: [
      { id: "a", nome: "Faixa rolando", descricao: "Os brasões passam em uma faixa contínua, como no site antes da reformulação. Para ao passar o mouse." },
      { id: "b", nome: "Grade", descricao: "Todos os brasões parados, lado a lado, cada um aparecendo uma única vez." },
    ],
  },
];

// Pages under approval and the GitHub issue that records each one's approvals and conversation.
export const paginas: Record<string, { nome: string; issue: number }> = {
  "/": { nome: "Início", issue: 30 },
};

export const paginaDe = (path: string) => (Object.hasOwn(paginas, path) ? paginas[path] : undefined);
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
