// Editorial source of truth for the home. Copy comes verbatim from the
// approved brief and design; items marked "a validar" are drafts.

export const SITE_URL = "https://www.teiadesaberes.com.br";
export const WHATSAPP = "https://wa.me/5513992081120";
export const INSTAGRAM = "https://www.instagram.com/teia.de.saberes/";
// Caminhos da Inclusão checkout (Ticto), the same link as the course landing page.
export const CAMINHOS_OFERTA = "https://payment.ticto.app/O15C67760";
// Tear, the municipal education plan system (opens off-site).
export const TEAR_URL = "https://tear.teiadesaberes.com.br/";

// Official contact channels: the contact page and the footer both read this list.
// Phone and site are pending client confirmation; no e-mail has been chosen yet.
export const channels = [
  { label: "WhatsApp", value: "(13) 99208-1120", href: WHATSAPP },
  { label: "Instagram", value: "@teia.de.saberes", href: INSTAGRAM },
  { label: "Site", value: "teiadesaberes.com.br", href: SITE_URL },
];

export const nav = [
  { label: "Início", href: "/" },
  { label: "Quem somos", href: "/quem-somos" },
  { label: "Soluções", href: "/solucoes-educacionais" },
  { label: "Em movimento", href: "/em-movimento" },
  { label: "Equipe", href: "/nossa-equipe" },
  { label: "Projetos e resultados", href: "/projetos" },
  { label: "Contato", href: "/contato" },
];

export const diffs = [
  { icon: "user-check", title: "Atendimento Personalizado", text: "Cada desafio recebe atenção exclusiva." },
  { icon: "calendar-clock", title: "Mentorias Estratégicas", text: "Reuniões quinzenais para soluções direcionadas." },
  { icon: "messages-square", title: "Atendimento Multicanal", text: "WhatsApp, e-mail, telefone, videoconferência e visitas presenciais." },
] as const;

const B = "/brasoes/";
export const municipios = [
  { src: B + "d3ntf3hy.jpg", name: "Aguanil", uf: "MG" },
  { src: B + "Brasao_de_Belo_vale.jpg", name: "Belo Vale", uf: "MG" },
  { src: B + "Cachoeira_de_Minasmgbrasao.jpg", name: "Cachoeira de Minas", uf: "MG" },
  { src: B + "campobelo.png", name: "Campo Belo", uf: "MG" },
  { src: B + "wbc20220812102143.png", name: "Canaã", uf: "MG" },
  { src: B + "images-1.jpg", name: "Coqueiral", uf: "MG" },
  { src: B + "Cordislandiamgbrasao.jpg", name: "Cordislândia", uf: "MG" },
  { src: B + "Brasao_Divinesia_MG.jpg", name: "Divinésia", uf: "MG" },
  { src: B + "fama.png", name: "Fama", uf: "MG" },
  { src: B + "Captura-de-tela-2026-09-28-115655.png", name: "Icaraí de Minas", uf: "MG" },
  { src: B + "brasao_ipanema.png", name: "Ipanema", uf: "MG" },
  { src: B + "Brasao_da_Bandeira_da_Cidade_de_Itacarambi.svg-scaled.webp", name: "Itacarambi", uf: "MG" },
  { src: B + "Brasao_Miradouro.png", name: "Miradouro", uf: "MG" },
  { src: B + "BRASAO_PATY-oficial-CMYK-removebg-preview.png", name: "Paty do Alferes", uf: "RJ" },
  { src: B + "Brasao_perdoes.jpg", name: "Perdões", uf: "MG" },
  { src: B + "Brasao_de_Pirapetinga.png", name: "Pirapetinga", uf: "MG" },
  { src: B + "images-2.jpg", name: "Piraúba", uf: "MG" },
  { src: B + "sao-joao-do-manteninha.jpg", name: "São João do Manteninha", uf: "MG" },
  { src: B + "sao-miguel.webp", name: "São Miguel do Anta", uf: "MG" },
];

export const audience = [
  { icon: "landmark", title: "Secretarias Municipais de Educação e seus secretários", text: "" },
  { icon: "school", title: "Gestores escolares e equipes técnicas", text: "" },
  { icon: "users", title: "Escolas e redes de ensino", text: "" },
  { icon: "handshake", title: "Empresas e institutos parceiros (ESG)", text: "" },
] as const;

export type FioKey = "rede" | "escola" | "pessoas" | "trama";

// The four threads of the web: one shared source for the home and the solutions hub.
export const fios: { key: FioKey; nome: string; pergunta: string; filtro: string; resumo: string; ponte: string }[] = [
  {
    key: "rede",
    nome: "Tecer a rede",
    pergunta: "Como planejar a educação do meu município?",
    filtro: "Quero planejar a rede",
    resumo: "Planejamento público feito com a comunidade.",
    ponte: "Educação é esforço público e bem comum.",
  },
  {
    key: "escola",
    nome: "Tecer a escola",
    pergunta: "Como transformar minha escola?",
    filtro: "Quero transformar uma escola",
    resumo: "Projetos, cooperação e participação dos estudantes.",
    ponte: "A escola é um lugar de encontro que vale proteger e reinventar.",
  },
  {
    key: "pessoas",
    nome: "Tecer pessoas",
    pergunta: "Como formar minha equipe?",
    filtro: "Quero formar pessoas",
    resumo: "Formação para quem educa e para quem lidera.",
    ponte: "Professores produzem conhecimento.",
  },
  {
    key: "trama",
    nome: "Sustentar a trama",
    pergunta: "Como manter a rede em dia, com recursos e regularidade?",
    filtro: "Quero apoio técnico",
    resumo: "Recursos, prestação de contas e regularidade.",
    ponte: "Sem financiamento público bem cuidado, o bem comum não se sustenta.",
  },
];

export type Solution = {
  slug: string;
  title: string;
  phrase: string;
  text: string;
  ponte: string;
  fio: FioKey;
  tambem?: FioKey[]; // extra fios this solution answers
  ligaA: string[];
  img: string;
  accent: string;
  href: string;
  fit?: "contain";
};

// Card number comes from array position: 01 must be Transformação Escolar, 02 Gestão Pública.
export const solutions: Solution[] = [
  {
    slug: "escolar",
    title: "Mentoria para Transformação Escolar",
    phrase: "Uma escola que ensina e pratica a cooperação.",
    text: "Apoio às equipes escolares na reflexão sobre suas práticas, no desenvolvimento pedagógico e na construção de estratégias para uma aprendizagem significativa.",
    ponte: "Pedagogias de cooperação e solidariedade; escola redesenhada",
    fio: "escola",
    ligaA: ["olimpiada", "palestras"],
    img: "/images/sol1.jpg",
    accent: "#2679AD",
    href: "/mentoria-transformacao-escolar",
  },
  {
    slug: "gestao",
    title: "Mentoria para Gestão Pública Educacional",
    phrase: "Gestão democrática para redes que aprendem juntas.",
    text: "Acompanhamento especializado para gestores e equipes técnicas, com foco em planejamento, organização, desenvolvimento institucional e fortalecimento das políticas educacionais.",
    ponte: "Capacidade pública de planejar e financiar",
    fio: "rede",
    tambem: ["trama"],
    ligaA: ["tear", "pos"],
    img: "/images/sol0.jpg",
    accent: "#ED8C32",
    href: "/mentoria-gestao-publica",
  },
  {
    slug: "tear",
    title: "Tear: Plano Municipal de Educação",
    phrase: "O plano da cidade, tecido com quem a vive.",
    text: "Conduz o município na construção e no monitoramento do Plano Municipal de Educação frente à Lei nº 15.388/2026.",
    ponte: "Educação como esforço público e bem comum",
    fio: "rede",
    ligaA: ["gestao"],
    img: "/tear/tear-marca.png",
    accent: "#4A2582",
    href: "/tear",
    fit: "contain",
  },
  {
    slug: "olimpiada",
    title: "Olimpíada Pocket ODS",
    phrase: "Estudantes que tecem a própria comunidade.",
    text: "Competição educacional em três fases que leva os 17 Objetivos de Desenvolvimento Sustentável às escolas e transforma problemas locais em projetos dos estudantes.",
    ponte: "Participação estudantil; relação com o planeta",
    fio: "escola",
    ligaA: ["escolar"],
    img: "/images/sol5.jpg",
    accent: "#FFB000",
    href: "/olimpiada-pocket-ods",
  },
  {
    slug: "pos",
    title: "Pós-graduação",
    phrase: "Quem educa também pesquisa e produz conhecimento.",
    text: "Oportunidades de aprofundamento acadêmico e profissional para educadores interessados em ampliar conhecimentos e qualificar suas práticas.",
    ponte: "Professores como produtores de conhecimento",
    fio: "pessoas",
    ligaA: ["gestao"],
    img: "/images/sol3.jpg",
    accent: "#90D518",
    href: "/pos-graduacao",
  },
  {
    slug: "inclusao",
    title: "Caminhos da Inclusão",
    phrase: "Ninguém fora da trama.",
    text: "Formação de 180 horas para mediadores que atuam na inclusão escolar, com Ana Paula Jorge: 5 módulos, aulas online, encontros ao vivo e certificado.",
    ponte: "Direito à educação ao longo da vida, para todas as pessoas",
    fio: "pessoas",
    ligaA: ["escolar"],
    img: "/images/caminhos-inclusao.png",
    accent: "#F02A89",
    href: "/caminhos-da-inclusao",
  },
  {
    slug: "palestras",
    title: "Palestras e Rodas de Conversa",
    phrase: "Conversas que começam pelos problemas reais da escola.",
    text: "Palestras e rodas de conversa para escolas, redes e comunidades, presenciais ou online, sobre os desafios reais da educação pública.",
    ponte: "O relatório como documento vivo, construído no diálogo",
    fio: "pessoas",
    // Entry door: links to every other solution.
    ligaA: ["escolar", "gestao", "tear", "olimpiada", "pos", "inclusao"],
    img: "/images/sol2.jpg",
    accent: "#01A6F8",
    href: "/palestras-rodas-de-conversa",
  },
];

export type Article = {
  slug: string;
  cat: string;
  title: string;
  excerpt: string;
  img: string;
  author?: string;
  date?: string; // ISO yyyy-mm-dd
  body?: string[]; // paragraphs
  refs?: string[]; // full references (e.g. the UNESCO report), shown at the end
};

// Titles from the reformulation doc. No text yet: an article is published only
// once it has body, author and date (see publishedArticles).
export const articles: Article[] = [
  {
    slug: "planejar-juntos-novo-contrato-social-redes-municipais",
    cat: "GESTÃO EDUCACIONAL",
    title: "Planejar juntos: o que o Novo Contrato Social ensina às redes municipais.",
    excerpt: "Planejar juntos: o que o Novo Contrato Social ensina às redes municipais.",
    img: "/images/art0.jpg",
  },
  {
    slug: "professores-como-produtores-de-conhecimento-formacao-continuada-unesco",
    cat: "FORMAÇÃO CONTINUADA",
    title: "Professores como produtores de conhecimento: formação continuada à luz da UNESCO.",
    excerpt: "Professores como produtores de conhecimento: formação continuada à luz da UNESCO.",
    img: "/images/art1.jpg",
  },
  {
    slug: "educar-em-um-mundo-fragil-e-incerto-desafios-da-escola-publica",
    cat: "EDUCAÇÃO PÚBLICA",
    title: "Educar em um mundo frágil e incerto: desafios da escola pública.",
    excerpt: "Educar em um mundo frágil e incerto: desafios da escola pública.",
    img: "/images/art2.jpg",
  },
];

export const publishedArticles = articles.filter((a) => a.body?.length && a.author && a.date);

// New topics awaiting text (not rendered).
export const pautas: string[] = [
  "Cinco perguntas de diagnóstico para a sua escola.",
  "Por que a escola continua insubstituível.",
  "Inteligência artificial na escola: apoiar sem substituir.",
  "Da CF/88 ao Novo Contrato Social: os arts. 205 e 206 em perspectiva.",
  "Relato da Roda Pedagógica do Instituto Isabel Castro (com autorização).",
];

/** "2026-03-14" -> "14 de março de 2026" (UTC, so the ISO day never shifts). */
export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export type TeamMember = {
  name: string;
  degree?: string;
  role: string;
  bio?: string;
  accent: string;
  lattes?: string;
  photo?: string;
};

// Only people the client confirmed; Tiago, Vagner and "Saito" are pending (issue #16).
export const team: TeamMember[] = [
  {
    name: "Pacelli H. S. Lopes",
    role: "Idealizador",
    bio: "Historiador, mestre em História (Universidade Salgado de Oliveira), especialista em História do Brasil (PUC Minas) e licenciado pela Faculdade Santa Marcelina. Idealizador da Teia de Saberes, atua na formação de gestores, no acompanhamento de políticas públicas e em projetos educacionais ligados ao território. Professor efetivo da rede pública de Minas Gerais, foi gestor da Escola Estadual Fazenda Paraíso de 2019 a 2023.",
    accent: "#ED8C32",
    lattes: "http://lattes.cnpq.br/5755985965293910",
  },
  {
    name: "Cezar Trindade Ituassu",
    role: "Coordenação de projetos",
    bio: "Graduado em Ciências Sociais pela UFMG, com experiência como professor e gestor escolar e em gestão de processos. Cuida da coordenação de projetos e da relação institucional com as redes parceiras.",
    accent: "#F02A89",
  },
  {
    name: "Ricardo Marinho",
    role: "Coordenação da Pós-graduação",
    bio: "Pós-doutor em Políticas Públicas e Formação Humana (UERJ), com atuação em formulação, monitoramento e avaliação de políticas educacionais. Especialista em financiamento da educação, planejamento estratégico e regulação institucional.",
    accent: "#2679AD",
  },
  {
    name: "Ana Paula Jorge",
    degree: "Mestre e doutoranda · Professora da Rede Municipal",
    role: "Formadora · Caminhos da Inclusão",
    bio: "Mestre e Doutoranda, professora da Rede Municipal e atuante na Coordenação Municipal de Educação Especial. Pesquisadora, palestrante e autora de obras na área, une a pesquisa acadêmica à vivência diária da inclusão nas escolas.",
    accent: "#90D518",
  },
  {
    name: "José Márcio Figueira Júnior",
    degree: "Mestre em Ciências Sociais e doutorando em Ciências Sociais · UFRRJ",
    role: "Consultor",
    accent: "#01A6F8",
  },
];
export const footerCols = [
  {
    title: "NAVEGAÇÃO",
    items: [
      { label: "Quem somos", href: "/quem-somos" },
      { label: "Equipe", href: "/nossa-equipe" },
      { label: "Projetos e resultados", href: "/projetos" },
      { label: "Em movimento", href: "/em-movimento" },
      { label: "Conteúdos", href: "/blog" },
      { label: "Contato", href: "/contato" },
    ],
  },
  {
    title: "SOLUÇÕES",
    items: solutions.map((s) => ({ label: s.title, href: s.href })),
  },
  {
    title: "CONTATO",
    items: channels.map((c) => ({ label: c.value, href: c.href })),
  },
];
