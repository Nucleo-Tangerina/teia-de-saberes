// Editorial source of truth for the home. Copy comes verbatim from the
// approved brief and design; items marked "a validar" are drafts.

export const SITE_URL = "https://www.teiadesaberes.com.br";
export const WHATSAPP = "https://wa.me/5513992081120";
export const INSTAGRAM = "https://www.instagram.com/teia.de.saberes/";

export const nav = [
  { label: "Início", href: "/" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Soluções Educacionais", href: "/solucoes-educacionais" },
  { label: "Nossa Equipe", href: "/nossa-equipe" },
  { label: "Projetos e Resultados", href: "/projetos" },
  { label: "Conteúdos", href: "/blog" },
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

export type Solution = {
  accent: string;
  title: string;
  text: string;
  img: string;
  href: string;
  fit?: "contain";
  extra?: boolean;
};

export const solutions: Solution[] = [
  { accent: "#4A2582", title: "Tear: Plano Municipal de Educação", text: "Conduz o município na construção e no monitoramento do Plano Municipal de Educação frente à Lei nº 15.388/2026.", img: "/images/tear.png", href: "https://tear.teiadesaberes.com.br/" },
  { accent: "#F02A89", title: "Caminhos da Inclusão", text: "Formação de 180 horas para mediadores que atuam na inclusão escolar, com Ana Paula Jorge: 5 módulos, aulas online, encontros ao vivo e certificado.", img: "/images/caminhos-inclusao.png", href: "https://caminhoinclusao.teiadesaberes.com.br/" },
  { accent: "#ED8C32", title: "Mentoria para Gestão Pública Educacional", text: "Acompanhamento especializado para gestores e equipes técnicas, com foco em planejamento, organização, desenvolvimento institucional e fortalecimento das políticas educacionais.", img: "/images/sol0.jpg", href: "/mentoria-gestao-publica" },
  { accent: "#2679AD", title: "Mentoria para Transformação Escolar", text: "Apoio às equipes escolares na reflexão sobre suas práticas, no desenvolvimento pedagógico e na construção de estratégias para uma aprendizagem significativa.", img: "/images/sol1.jpg", href: "/mentoria-transformacao-escolar", extra: true },
  { accent: "#01A6F8", title: "Palestras e Formações", text: "Experiências formativas para profissionais da educação, com temas relacionados à gestão, ao currículo, à inclusão e aos desafios contemporâneos das escolas.", img: "/images/sol2.jpg", href: "/palestras-formacoes", extra: true },
  { accent: "#90D518", title: "Pós-graduação", text: "Oportunidades de aprofundamento acadêmico e profissional para educadores interessados em ampliar conhecimentos e qualificar suas práticas.", img: "/images/sol3.jpg", href: "/pos-graduacao", extra: true },
  { accent: "#8F2DE2", title: "Assessoria Técnica para SMEs", text: "Suporte em PAR, SIGARP, PDDE, PNAE, Educacenso e demais programas do FNDE, com monitoramento de CACS e CAE.", img: "/images/sol4.jpg", href: "/solucoes-educacionais", extra: true },
  { accent: "#2679AD", title: "Prestação de Contas e Gestão Financeira", text: "Planejamento orçamentário e prestação de contas (SIOPE), com monitoramento e capacitação para conformidade com as normas do FNDE.", img: "/images/sol5.jpg", href: "/solucoes-educacionais", extra: true },
  { accent: "#FFB000", title: "Gestão de Caixa Escolar (UEX)", text: "Regularização e acompanhamento das caixas escolares, com consultoria sobre questões legais.", img: "/images/sol6.jpg", href: "/solucoes-educacionais", extra: true },
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
      { label: "Quem Somos", href: "/quem-somos" },
      { label: "Nossa Equipe", href: "/nossa-equipe" },
      { label: "Projetos e Resultados", href: "/projetos" },
      { label: "Conteúdos", href: "/blog" },
      { label: "Contato", href: "/contato" },
    ],
  },
  {
    title: "SOLUÇÕES",
    items: [
      { label: "Mentoria para Gestão Pública", href: "/mentoria-gestao-publica" },
      { label: "Mentoria para Transformação Escolar", href: "/mentoria-transformacao-escolar" },
      { label: "Palestras e Formações", href: "/palestras-formacoes" },
      { label: "Pós-graduação", href: "/pos-graduacao" },
    ],
  },
  {
    title: "CONTATO",
    items: [
      { label: "(13) 99208-1120", href: WHATSAPP },
      { label: "@teia.de.saberes", href: INSTAGRAM },
      { label: "teiadesaberes.com.br", href: SITE_URL },
      { label: "E-mail oficial (a confirmar)" },
    ],
  },
];
