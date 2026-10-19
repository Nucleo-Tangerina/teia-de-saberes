import type { Metadata } from "next";
import Link from "next/link";
import { Badge, CheckList, CtaBlock, Facts, IconGrid, PageHero, SectionHead } from "../ui";

export const metadata: Metadata = {
  title: "Pós-graduação",
  description:
    "Pós-graduação Lato Sensu da Teia de Saberes para educadores e gestores, inspirada no Novo Contrato Social para a Educação da UNESCO.",
  alternates: { canonical: "/pos-graduacao" },
};

// From the 2025 postgraduate proposal. Every academic figure needs validation.
const facts = [
  { label: "Modalidade", value: "Especialização Lato Sensu" },
  { label: "Certificação", value: "Em parceria com a Faculdade Arnaldo" },
  { label: "Carga horária", value: "360 horas" },
  { label: "Duração", value: "12 meses, híbrido" },
];

const program = [
  { icon: "users", title: "Comunidades de Aprendizagem", text: "Participação ativa de estudantes, professores e comunidade." },
  { icon: "graduation-cap", title: "Valorização profissional", text: "Formação de lideranças educacionais e professores." },
  { icon: "lightbulb", title: "Metodologias ativas", text: "Problematização e trabalho por projetos, conectando teoria e prática." },
  { icon: "sprout", title: "Objetivos de Desenvolvimento Sustentável", text: "Formação alinhada aos ODS e à construção de um legado local." },
];

const receive = [
  "Aulas síncronas e assíncronas em plataforma digital (Microsoft Teams), com horários flexíveis.",
  "Corpo docente com mestres e doutores especializados em políticas públicas e metodologias educacionais.",
  "Tutores e roteiros de estudos que atendem às necessidades locais.",
  "Acesso a bibliografia e a ferramentas de gestão educacional.",
  "Preparação para os instrumentos de planejamento: PPA, LOA, LDO e Plano Municipal de Educação.",
];

const pending = ["Matriz curricular", "Critérios de ingresso", "Condições e investimento", "Inscrições"];

export default function PosGraduacao() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Soluções", href: "/solucoes-educacionais" }, { label: "Pós-graduação" }]}
        eyebrow="PÓS-GRADUAÇÃO"
        title="Formação para a construção de um Novo Contrato Social na Educação."
        lead="Oportunidades de aprofundamento acadêmico e profissional para educadores interessados em ampliar conhecimentos e qualificar suas práticas."
        img="/images/sol3.jpg"
        imgAlt="Educadora estudando com notebook"
      >
        <Link href="/contato?interesse=pos" className="btn btn-orange">
          Quero saber sobre inscrições
        </Link>
        <a href="#programa" className="btn btn-outline">
          Conheça o programa
        </a>
      </PageHero>

      <div className="container facts-wrap">
        <Facts items={facts} />
        <Badge>DADOS ACADÊMICOS A VALIDAR ANTES DA PUBLICAÇÃO</Badge>
      </div>

      <section id="programa" className="section container split audience-block" aria-labelledby="programa-title">
        <div className="stack" data-reveal>
          <p className="eyebrow">O PROGRAMA</p>
          <h2 id="programa-title">Teoria e prática para os desafios da educação.</h2>
          <p className="body">
            Inspirada nos princípios do Novo Contrato Social para a Educação da UNESCO (2021), a especialização prepara
            educadores e gestores para enfrentar os desafios educacionais de maneira inovadora, integrando teoria e
            prática.
          </p>
          <p className="body">Coordenação: Prof. Dr. Ricardo Marinho, especialista em Políticas Públicas e Formação Humana.</p>
        </div>
        <IconGrid items={program} />
      </section>

      <section className="band-soft" aria-labelledby="recebem">
        <div className="section container split audience-block align-top">
          <div className="stack" data-reveal>
            <p className="eyebrow">ESTRUTURA</p>
            <h2 id="recebem">O que você e sua equipe recebem.</h2>
            <p className="body">
              Uma formação pensada para a rotina de quem está na escola e na Secretaria, com acompanhamento e material de
              apoio.
            </p>
          </div>
          <CheckList items={receive} />
        </div>
      </section>

      <section className="section container" aria-labelledby="detalhes">
        <SectionHead
          id="detalhes"
          eyebrow="INFORMAÇÕES ACADÊMICAS"
          title="Matriz, ingresso e inscrições."
          text="Estas informações serão publicadas após validação com a instituição certificadora. Enquanto isso, fale com nossa equipe."
        />
        <ul className="pending-grid">
          {pending.map((p) => (
            <li key={p} data-reveal>
              <h3>{p}</h3>
              <span aria-label="a validar" />
              <span />
            </li>
          ))}
        </ul>
        <Badge>A PUBLICAR APÓS VALIDAÇÃO</Badge>
      </section>

      <CtaBlock
        title="Quer levar a pós-graduação para os educadores do seu município?"
        label="Quero saber sobre inscrições"
        href="/contato?interesse=pos"
      />
    </>
  );
}
