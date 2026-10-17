import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { steps } from "../content";
import { Badge, CheckList, CtaBlock, IconGrid, PageHero, SectionHead, StepsThread } from "../ui";

export const metadata: Metadata = {
  title: "Mentoria para Transformação Escolar",
  description:
    "Apoio às equipes escolares na reflexão sobre suas práticas, no desenvolvimento pedagógico e na construção de estratégias para uma aprendizagem significativa.",
  alternates: { canonical: "/mentoria-transformacao-escolar" },
};

const audience = [
  { icon: "school", title: "Diretores", text: "Fortalecimento da gestão democrática e da liderança escolar." },
  { icon: "briefcase", title: "Especialistas e coordenação", text: "Apoio às estratégias pedagógicas e ao acompanhamento das práticas." },
  { icon: "users", title: "Professores", text: "Práticas inovadoras em sala de aula e incentivo ao protagonismo dos estudantes." },
  { icon: "handshake", title: "Comunidade escolar", text: "Estudantes, famílias e comunidade local como parte da construção da escola." },
];

const methods = [
  { icon: "lightbulb", title: "Metodologia de Trabalho de Projetos", text: "Projetos que partem de questões reais e estimulam a autonomia dos estudantes." },
  { icon: "messages-square", title: "Metodologia da Problematização", text: "Reflexão sobre a realidade da escola para construir respostas coletivas." },
];

const activities = [
  "Encontros de reflexão das equipes escolares sobre suas próprias práticas.",
  "Desenvolvimento pedagógico com diretores, especialistas e professores.",
  "Construção de projetos escolares com participação dos estudantes e da comunidade.",
  "Estratégias para uma aprendizagem significativa, adaptadas à realidade de cada escola.",
];

const aims = [
  { icon: "landmark", title: "Gestão democrática", text: "Lideranças escolares preparadas para conduzir decisões coletivas." },
  { icon: "sprout", title: "Protagonismo estudantil", text: "Estudantes como autores dos projetos, em parceria com a comunidade." },
  { icon: "lightbulb", title: "Práticas inovadoras", text: "Novas formas de ensinar, construídas a partir da escuta da escola." },
];

export default function MentoriaEscolar() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Soluções", href: "/solucoes-educacionais" }, { label: "Mentoria para Transformação Escolar" }]}
        eyebrow="MENTORIA"
        title="Mentoria para Transformação Escolar"
        lead="Apoio às equipes escolares na reflexão sobre suas práticas, no desenvolvimento pedagógico e na construção de estratégias para uma aprendizagem significativa."
        img="/images/sol1.jpg"
        imgAlt="Professora em sala de aula com estudantes"
      >
        <Link href="/contato?interesse=escolar" className="btn btn-orange">
          Solicite uma proposta
        </Link>
        <a href="#como-atuamos" className="btn btn-outline">
          Como atuamos
        </a>
      </PageHero>

      <section id="como-atuamos" className="section container split audience-block" aria-labelledby="atuacao">
        <div className="stack" data-reveal>
          <p className="eyebrow">ATUAÇÃO</p>
          <h2 id="atuacao">Ao lado das equipes que fazem a escola acontecer.</h2>
          <p className="body">
            Atuamos junto às equipes escolares para construir uma educação participativa, que vai além dos muros da
            escola e estimula o protagonismo dos estudantes em parceria com a comunidade local.
          </p>
        </div>
        <IconGrid items={audience} />
      </section>

      <section className="band-soft" aria-labelledby="metodo">
        <div className="section container">
          <SectionHead id="metodo" eyebrow="METODOLOGIA" title="Cada transformação começa com a escuta." center />
          <StepsThread steps={steps} />
          <div className="method-pair">
            <IconGrid items={methods} cols={2} />
          </div>
        </div>
      </section>

      <section className="section container split about" aria-labelledby="atividades">
        <div className="about-photo" data-reveal="wipe">
          <Image src="/images/proj1.jpg" alt="Professora conversando com estudantes em roda" fill sizes="(max-width: 960px) 100vw, 536px" />
        </div>
        <div className="stack" data-reveal>
          <p className="eyebrow">ATIVIDADES</p>
          <h2 id="atividades">O que acontece durante a mentoria.</h2>
          <CheckList items={activities} />
        </div>
      </section>

      <section className="band-navy" aria-labelledby="resultados">
        <div className="section container">
          <div className="section-head" data-reveal>
            <p className="eyebrow on-navy">RESULTADOS ESPERADOS</p>
            <h2 id="resultados" className="on-navy">
              O que buscamos construir com cada escola.
            </h2>
            <p className="body">
              Os resultados dependem do contexto de cada escola e são acompanhados ao longo do processo. Não trabalhamos
              com promessas de indicadores específicos.
            </p>
          </div>
          <IconGrid items={aims} cols={3} />
        </div>
        <div className="pattern-band" aria-hidden />
      </section>

      <section className="section container narrow-col" aria-labelledby="referencia">
        <div className="stack" data-reveal>
          <p className="eyebrow">EXPERIÊNCIA DE REFERÊNCIA</p>
          <h2 id="referencia">Escola Fazenda Paraíso.</h2>
          <p className="body">
            O idealizador da Teia de Saberes, Pacelli Henrique Silva Lopes, idealizou o programa de transformação da
            Escola Fazenda Paraíso, que tem por base uma educação republicana como objetivo da comunidade de aprendizagem.
          </p>
          <Badge>FORMATO, DURAÇÃO E CARGA HORÁRIA A CONFIRMAR</Badge>
        </div>
      </section>

      <CtaBlock label="Solicite uma proposta" href="/contato?interesse=escolar" />
    </>
  );
}
