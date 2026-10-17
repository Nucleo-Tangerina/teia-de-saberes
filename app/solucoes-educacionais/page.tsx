import type { Metadata } from "next";
import Link from "next/link";
import { diffs, solutions, steps } from "../content";
import { Badge, CheckList, CtaBlock, PageHero, SectionHead, SolutionCard, StepsThread, icons } from "../ui";

export const metadata: Metadata = {
  title: "Soluções Educacionais",
  description:
    "Mentorias, formações, pós-graduação e assessoria técnica para Secretarias Municipais de Educação. Conheça as soluções da Teia de Saberes.",
  alternates: { canonical: "/solucoes-educacionais" },
};

// Areas and service lines listed in the organization's SME structure (2025).
const areas = [
  "Mentoria em política pública educacional",
  "Capacitação pedagógica",
  "Gestão e produção de conteúdo",
  "Contabilidade e gestão financeira",
  "Prestação de contas",
  "Jurídico",
  "Engenharia e obras",
  "Gestão de Caixa Escolar (UEX)",
  "Inovação e tecnologia",
];

const services = [
  "Pesquisa, análise, aconselhamento, proposição, mobilização e articulação, promovendo a ponte entre o conhecimento científico e as políticas públicas educacionais.",
  "Formação continuada para professores e equipes educacionais.",
  "Desenvolvimento de materiais pedagógicos alinhados às necessidades municipais.",
  "Suporte em PAR, SIGARP, PDDE e outros programas educacionais.",
  "Monitoramento de CACS, CAE e gestão de programas educacionais.",
  "Regularização e acompanhamento de programas como PNAE, PDDE e Educacenso.",
  "Planejamento orçamentário e prestação de contas (SIOPE).",
  "Monitoramento e capacitação para conformidade com normas do FNDE.",
  "Consultoria sobre caixas escolares e questões legais.",
  "Gestão de sistemas como SIMEC e suporte a programas do FNDE.",
  "Suporte sobre convênios, transporte escolar e programas federais.",
  "Automação e desenvolvimento de ferramentas para otimizar processos.",
];

export default function Solucoes() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Soluções Educacionais" }]}
        eyebrow="SOLUÇÕES EDUCACIONAIS"
        title="Soluções estratégicas para os desafios da educação municipal."
        lead="Assessorias, mentorias, formações e projetos educacionais construídos em conjunto com as equipes municipais, respeitando as características de cada rede."
        img="/images/sol0.jpg"
        imgAlt="Equipe reunida em torno de uma mesa de trabalho"
      >
        <a href="#catalogo" className="btn btn-orange">
          Ver todas as soluções
        </a>
        <Link href="/contato" className="btn btn-outline">
          Fale com nossa equipe
        </Link>
      </PageHero>

      <div className="container">
        <ul className="diffs" data-reveal>
          {diffs.map((d) => {
            const Icon = icons[d.icon];
            return (
              <li key={d.title}>
                <span className="icon-dot">
                  <Icon size={22} aria-hidden />
                </span>
                <div>
                  <h2 className="diff-title">{d.title}</h2>
                  <p>{d.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <section id="catalogo" className="section container" aria-labelledby="catalogo-title">
        <SectionHead
          id="catalogo-title"
          eyebrow="CATÁLOGO"
          title="Escolha por onde começar."
          text="As soluções principais organizam o trabalho com a rede; as complementares apoiam rotinas técnicas e administrativas da Secretaria."
        />
        <div className="sol-grid">
          {solutions.map((s, i) => (
            <SolutionCard key={s.title} s={s} i={i} />
          ))}
        </div>
        <Badge>OFERTA ATUAL A CONFIRMAR ANTES DA PUBLICAÇÃO</Badge>
      </section>

      <section className="band-soft" aria-labelledby="suporte">
        <div className="section container split audience-block align-top">
          <div className="stack" data-reveal>
            <p className="eyebrow">SUPORTE TÉCNICO ÀS SECRETARIAS</p>
            <h2 id="suporte">Áreas que sustentam a gestão educacional do município.</h2>
            <ul className="tags" aria-label="Áreas de atuação">
              {areas.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          <CheckList items={services} />
        </div>
      </section>

      <section className="section container" aria-labelledby="como">
        <SectionHead id="como" eyebrow="METODOLOGIA" title="Cada transformação começa com a escuta." center />
        <StepsThread steps={steps} />
      </section>

      <CtaBlock title="Vamos conversar sobre os desafios do seu município?" label="Fale com nossa equipe" />
    </>
  );
}
