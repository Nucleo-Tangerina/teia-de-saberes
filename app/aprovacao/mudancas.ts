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
  // Mentoria para Gestão Pública (issue #33)
  {
    id: "gestao-assessoria",
    pagina: "/mentoria-gestao-publica",
    titulo: "Onde fica a assessoria técnica",
    explicacao:
      "A assessoria técnica, a prestação de contas e o apoio à caixa escolar agora fazem parte da mentoria, e não são mais uma solução separada. Escolha onde esse conteúdo aparece na página.",
    padrao: "a",
    variacoes: [
      { id: "a", nome: "Seção própria depois de Como funciona", descricao: "A assessoria ganha um bloco só dela, com o título “Também faz parte da mentoria”, logo depois de Como funciona. Os conteúdos da mentoria vêm em seguida." },
      { id: "b", nome: "Dentro de Conteúdos", descricao: "A assessoria aparece como apoio técnico incluído, dentro do bloco Conteúdos, logo abaixo da lista do que a mentoria trabalha com a rede." },
    ],
  },
  {
    id: "gestao-ponte",
    pagina: "/mentoria-gestao-publica",
    titulo: "Frase da ponte na assessoria",
    explicacao:
      "A página tem duas frases de “Ponte com o Novo Contrato Social”. Esta escolha é sobre a que fica na parte da assessoria técnica.",
    padrao: "a",
    variacoes: [
      { id: "a", nome: "Manter as duas frases", descricao: "A parte da assessoria mantém a frase “Sem financiamento público bem cuidado, o bem comum não se sustenta.”, além da frase principal da página." },
      { id: "b", nome: "Só a frase principal", descricao: "A frase da assessoria sai. Fica apenas a ponte principal, perto do fim da página." },
    ],
  },
  // Soluções, o hub (issue #34)
  {
    id: "hub-caminhos",
    pagina: "/solucoes-educacionais",
    titulo: "Botões do destaque Caminhos da Inclusão",
    explicacao:
      "O quadro em destaque da formação Caminhos da Inclusão tem dois botões. Escolha se o botão principal leva o visitante a conhecer a formação aqui no site ou direto para a inscrição.",
    padrao: "a",
    variacoes: [
      { id: "a", nome: "Conhecer primeiro", descricao: "O botão principal abre a página da formação aqui no site. O segundo abre o site próprio da formação em outra aba." },
      { id: "b", nome: "Inscrição direta", descricao: "O botão principal, “Quero garantir minha vaga”, vai direto para a inscrição. O segundo abre a página da formação aqui no site." },
    ],
  },
  // Pós-graduação (issue #36)
  {
    id: "pos-porque",
    pagina: "/pos-graduacao",
    titulo: "Por que esta pós-graduação",
    explicacao:
      "O site antigo tinha um texto explicando por que o curso existe: a crise na educação, os ODS e a formação de novos líderes. Ele ainda não estava no site novo.",
    padrao: "a",
    variacoes: [
      { id: "a", nome: "Incluir o texto", descricao: "Mostra a seção “Por que esta pós-graduação” depois de “Para quem é”." },
      { id: "b", nome: "Não incluir", descricao: "A página segue sem essa seção." },
    ],
  },
  {
    id: "pos-avaliacao",
    pagina: "/pos-graduacao",
    titulo: "Como é a avaliação",
    explicacao: "O site antigo detalhava como os alunos são avaliados e o prazo para concluir o curso.",
    padrao: "a",
    variacoes: [
      { id: "a", nome: "Incluir o detalhe da avaliação", descricao: "Mostra um parágrafo abaixo dos critérios para a titulação." },
      { id: "b", nome: "Não incluir", descricao: "Ficam só os critérios resumidos." },
    ],
  },
  // Tear (issue #38)
  {
    id: "tear-frase",
    pagina: "/tear",
    titulo: "Frase do Tear",
    explicacao: "O documento pede a frase “O plano da cidade, tecido com quem a vive.” na página do Tear. Ela aparece logo abaixo da abertura.",
    padrao: "a",
    variacoes: [
      { id: "a", nome: "Com a frase", descricao: "A frase aparece em destaque logo depois da abertura." },
      { id: "b", nome: "Sem a frase", descricao: "A página continua como está hoje, sem a frase." },
    ],
  },
  // Equipe (issue #42)
  {
    id: "equipe-fotos",
    pagina: "/nossa-equipe",
    titulo: "Fotos da equipe",
    explicacao:
      "Cezar, Pacelli e Ricardo podem aparecer com as fotos do site antigo, no lugar do círculo com as iniciais. Ana Paula e Márcio ainda não têm foto e continuam com as iniciais.",
    padrao: "a",
    variacoes: [
      { id: "a", nome: "Com fotos", descricao: "Mostra a foto de quem já tem uma; quem não tem segue com as iniciais." },
      { id: "b", nome: "Só as iniciais", descricao: "Todos aparecem com o círculo colorido e as iniciais, como hoje." },
    ],
  },
  // Quem somos (issue #43)
  {
    id: "quem-2050",
    pagina: "/quem-somos",
    titulo: "Frase de apresentação da Teia",
    explicacao: "A frase que apresenta a Teia como hub de soluções, no texto de abertura da página. Usa as mesmas duas versões da página inicial.",
    padrao: "a",
    variacoes: [
      { id: "a", nome: "Ajudar a UNESCO", descricao: "Diz que a Teia é voltada a ajudar a UNESCO a construir o Novo Contrato Social da Educação até 2050." },
      { id: "b", nome: "Ajudar as redes públicas", descricao: "Diz que a Teia ajuda as redes públicas a construir, até 2050, o Novo Contrato Social proposto pela UNESCO. Evita dar a entender que a UNESCO apoia ou contrata a Teia." },
    ],
  },
  // Política de Privacidade (issue #46)
  {
    id: "privacidade-selo",
    pagina: "/politica-de-privacidade",
    titulo: "Selo de rascunho",
    explicacao:
      "No alto da página aparece um aviso dizendo que o texto ainda é um rascunho e precisa ser revisado por um advogado. Recomendamos manter o aviso até essa revisão ser feita.",
    padrao: "a",
    variacoes: [
      { id: "a", nome: "Manter o selo de rascunho", descricao: "O aviso continua visível até a assessoria jurídica aprovar o texto." },
      { id: "b", nome: "Tirar o selo", descricao: "A página aparece sem o aviso, como texto final. Escolha esta opção só se o texto já foi revisado." },
    ],
  },
];

// Pages under approval and the GitHub issue that records each one's approvals and conversation.
export const paginas: Record<string, { nome: string; issue: number }> = {
  "/": { nome: "Início", issue: 30 },
  "/mentoria-gestao-publica": { nome: "Mentoria para Gestão Pública", issue: 33 },
  "/solucoes-educacionais": { nome: "Soluções", issue: 34 },
  "/pos-graduacao": { nome: "Pós-graduação", issue: 36 },
  "/caminhos-da-inclusao": { nome: "Caminhos da Inclusão", issue: 37 },
  "/tear": { nome: "Tear", issue: 38 },
  "/palestras-rodas-de-conversa": { nome: "Palestras e Rodas de Conversa", issue: 39 },
  "/olimpiada-pocket-ods": { nome: "Olimpíada Pocket ODS", issue: 40 },
  "/nossa-equipe": { nome: "Equipe", issue: 42 },
  "/quem-somos": { nome: "Quem somos", issue: 43 },
  "/projetos": { nome: "Projetos e resultados", issue: 44 },
  "/em-movimento": { nome: "Em movimento", issue: 45 },
  "/blog": { nome: "Conteúdos", issue: 45 },
  "/contato": { nome: "Contato", issue: 46 },
  "/politica-de-privacidade": { nome: "Política de Privacidade", issue: 46 },
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
