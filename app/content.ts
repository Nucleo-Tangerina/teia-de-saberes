// Editorial source of truth for the home. Copy comes verbatim from the
// approved brief and design; items marked "a validar" are drafts.

export const SITE_URL = "https://www.teiadesaberes.com.br";
export const WHATSAPP = "https://wa.me/5513992081120";
export const INSTAGRAM = "https://www.instagram.com/teia.de.saberes/";

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
  { icon: "messages-square", title: "Atendimento Multicanal", text: "WhatsApp, e-mail, telefone, videoconferências e visitas presenciais." },
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
  { icon: "landmark", title: "Secretarias Municipais de Educação", text: "Apoio à gestão, ao planejamento e às ações educacionais." },
  { icon: "briefcase", title: "Secretários de Educação", text: "Acompanhamento e suporte para decisões de gestão." },
  { icon: "school", title: "Gestores Escolares", text: "Formação e desenvolvimento das lideranças escolares." },
  { icon: "users", title: "Equipes Técnicas", text: "Qualificação e fortalecimento das práticas de trabalho." },
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
    ligaA: ["gestao", "assessoria"],
    img: "/images/tear.png",
    accent: "#4A2582",
    href: "/tear",
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
    ligaA: ["escolar", "gestao", "tear", "olimpiada", "pos", "inclusao", "assessoria"],
    img: "/images/sol2.jpg",
    accent: "#01A6F8",
    href: "/palestras-rodas-de-conversa",
  },
  {
    slug: "assessoria",
    title: "Assessoria técnica e Caixa Escolar",
    phrase: "Recursos bem cuidados sustentam o bem comum.",
    text: "Apoio à Secretaria nos programas do FNDE (PAR, PDDE, PNAE e Educacenso), na prestação de contas (SIOPE) e na regularização das caixas escolares (UEX).",
    ponte: "Financiamento público como condição da educação como bem comum",
    fio: "trama",
    ligaA: ["tear", "gestao"],
    img: "/images/sol4.jpg",
    accent: "#8F2DE2",
    href: "/mentoria-gestao-publica#assessoria-tecnica",
  },
];

export const steps = [
  { accent: "#ED8C32", title: "Escuta e compreensão", text: "Conhecer contexto, necessidades e objetivos." },
  { accent: "#2679AD", title: "Planejamento colaborativo", text: "Estruturar ações adequadas à realidade local." },
  { accent: "#F02A89", title: "Desenvolvimento das ações", text: "Realizar mentorias, formações e atividades técnicas." },
  { accent: "#90D518", title: "Acompanhamento", text: "Refletir sobre avanços, desafios e oportunidades." },
];

export type Article = { slug: string; cat: string; title: string; excerpt: string; img: string };

// Suggested initial themes from the brief; bodies are still in production.
export const articles: Article[] = [
  {
    slug: "planejamento-e-colaboracao-nas-redes-municipais",
    cat: "GESTÃO EDUCACIONAL",
    title: "Planejamento e colaboração nas redes municipais.",
    excerpt: "Gestão educacional: planejamento e colaboração nas redes municipais.",
    img: "/images/art0.jpg",
  },
  {
    slug: "formacao-continuada-e-praticas-pedagogicas",
    cat: "FORMAÇÃO CONTINUADA",
    title: "Formação continuada e fortalecimento das práticas pedagógicas.",
    excerpt: "Formação continuada e fortalecimento das práticas pedagógicas.",
    img: "/images/art1.jpg",
  },
  {
    slug: "desafios-contemporaneos-da-educacao-publica-municipal",
    cat: "EDUCAÇÃO PÚBLICA",
    title: "Desafios contemporâneos da educação pública municipal.",
    excerpt: "Desafios contemporâneos da educação pública municipal.",
    img: "/images/art2.jpg",
  },
];

// From the organization's own 2025 proposals; confirm before publishing.
export const founders = [
  {
    name: "Pacelli Henrique Silva Lopes",
    role: "Idealizador",
    degree: "Mestre em História · UNIVERSO",
    bio: "Idealizador da Teia de Saberes e do programa de transformação da Escola Fazenda Paraíso, que tem por base uma educação republicana como objetivo da comunidade de aprendizagem.",
    accent: "#ED8C32",
  },
  {
    name: "Cézar",
    role: "Cofundador",
    degree: "Sociólogo",
    bio: "Sociólogo, com longa trajetória na prospecção de processos que transformam o fazer escolar e educacional.",
    accent: "#F02A89",
  },
];

export const consultants = [
  {
    name: "Ricardo José de Azevedo Marinho",
    degree: "Pós-doutor em Políticas Públicas e Formação Humana · UERJ",
    role: "Coordenação da Pós-graduação",
    accent: "#2679AD",
  },
  { name: "Tiago Martins Simões", degree: "Doutor em História · FGV", role: "Consultor", accent: "#8F2DE2" },
  { name: "Vagner Gomes de Souza", degree: "Mestre em Ciências Sociais · UFRRJ", role: "Consultor", accent: "#90D518" },
  {
    name: "José Márcio Figueira Júnior",
    degree: "Mestre em Ciências Sociais e doutorando em Ciências Sociais · UFRRJ",
    role: "Consultor",
    accent: "#01A6F8",
  },
  { name: "Ana Paula Jorge", degree: "Titulação a confirmar", role: "Formadora · Caminhos da Inclusão", accent: "#F02A89" },
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
    items: [
      { label: "(13) 99208-1120", href: WHATSAPP },
      { label: "@teia.de.saberes", href: INSTAGRAM },
      { label: "teiadesaberes.com.br", href: SITE_URL },
    ],
  },
];
