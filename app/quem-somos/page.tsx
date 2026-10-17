import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { founders } from "../content";
import { Badge, CtaBlock, IconGrid, PageHero, SectionHead, StepsThread } from "../ui";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Conheça a história, o propósito e os princípios da Teia de Saberes, organização dedicada a uma educação pública inclusiva, democrática e participativa.",
  alternates: { canonical: "/quem-somos" },
};

const principles = [
  { icon: "handshake", title: "Respeito", text: "Escuta e diálogo com cada rede, com suas pessoas e com a realidade de cada território." },
  { icon: "users", title: "Cooperação", text: "Transformações consistentes são construídas coletivamente, junto às equipes municipais." },
  { icon: "sprout", title: "Transformação", text: "A educação como caminho para o desenvolvimento das pessoas e das comunidades." },
];

const ways = [
  { icon: "target", title: "Excelência", text: "Equipe qualificada, focada em soluções eficientes." },
  { icon: "calendar-clock", title: "Acompanhamento contínuo", text: "Suporte especializado conforme as necessidades do município." },
  { icon: "layers", title: "Eficiência", text: "Integração de tecnologia e conhecimento para uma gestão educacional otimizada." },
];

const methods = [
  {
    icon: "lightbulb",
    title: "Metodologia de Trabalho de Projetos",
    text: "Aprendizagem organizada em projetos que partem de questões reais e estimulam a autonomia dos estudantes.",
  },
  {
    icon: "messages-square",
    title: "Metodologia da Problematização",
    text: "Reflexão sobre a realidade para construir respostas coletivas aos desafios da escola e da comunidade.",
  },
  {
    icon: "school",
    title: "Comunidades de Aprendizagem",
    text: "Uma educação participativa, que vai além dos muros da escola, com estudantes protagonistas em parceria com a comunidade local.",
  },
];

// Timeline slots render as drafts until dated facts are confirmed.
const timeline = ["#ED8C32", "#2679AD", "#F02A89", "#90D518"].map((accent) => ({
  accent,
  title: "Ano · marco",
  text: "Fato a confirmar com a organização.",
}));

export default function QuemSomos() {
  const [idealizador] = founders;
  return (
    <>
      <PageHero
        crumbs={[{ label: "Quem Somos" }]}
        eyebrow="QUEM SOMOS"
        title="Conectamos pessoas, conhecimentos e experiências para fortalecer a educação."
        lead="A Teia de Saberes é uma organização dedicada à construção de caminhos para uma educação pública inclusiva, democrática e comprometida com o desenvolvimento das pessoas e das comunidades."
        img="/images/quem.jpg"
        imgAlt="Equipe da Teia de Saberes em atividade"
      >
        <Link href="/solucoes-educacionais" className="btn btn-orange">
          Conheça nossas soluções
        </Link>
        <Link href="/contato" className="btn btn-outline">
          Fale com nossa equipe
        </Link>
      </PageHero>

      <section className="section container split about" aria-labelledby="historia">
        <div className="stack" data-reveal>
          <p className="eyebrow">NOSSA HISTÓRIA</p>
          <h2 id="historia">Tecendo redes e construindo pontes.</h2>
          <p className="body">
            Nos últimos anos, motivados por um sonho, começamos a semear a construção de uma organização inovadora,
            democrática e solidária, que tivesse como objetivo a transformação social por meio da educação.
          </p>
          <p className="body">
            Em meio a encontros, desencontros e reencontros, estamos construindo uma rede de Comunidade de Aprendizagem.
            Motivados pelo ato de esperançar, inauguramos a organização Teia de Saberes.
          </p>
          <p className="body">
            Nossa história como professores nos fez perceber que nas cidades já existem as sementes capazes de construir
            um futuro próspero. Para germinar, elas precisam de solo fértil, e acreditamos que a terra que temos que
            nutrir é a Educação.
          </p>
        </div>
        <div className="about-photo" data-reveal="wipe">
          <Image src="/images/hero.jpg" alt="Educadores e gestores reunidos em volta de uma mesa" fill sizes="(max-width: 960px) 100vw, 536px" />
        </div>
      </section>

      <section className="band-navy" aria-labelledby="proposito">
        <div className="section container split challenges">
          <h2 id="proposito" data-reveal>
            Conectando saberes. Fortalecendo a gestão. Transformando a educação.
          </h2>
          <div className="stack" data-reveal>
            <p className="body">
              Inspirados nos princípios do Novo Contrato Social para a Educação, proposto pela UNESCO em 2021, mediamos a
              construção de núcleos de projetos em Comunidades de Aprendizagem, com foco no desenvolvimento integral do
              ser humano.
            </p>
            <p className="body">
              Buscamos aproximar o conhecimento acadêmico das necessidades concretas das redes de ensino, apoiando
              Secretarias Municipais de Educação no planejamento, desenvolvimento e fortalecimento de suas redes.
            </p>
          </div>
        </div>
        <div className="pattern-band" aria-hidden />
      </section>

      <section className="section container" aria-labelledby="principios">
        <SectionHead id="principios" eyebrow="PRINCÍPIOS" title="Valores que embasam o nosso trabalho." />
        <IconGrid items={principles} cols={3} />
        <h3 className="sub-head" data-reveal>
          Como trabalhamos com os municípios
        </h3>
        <IconGrid items={ways} cols={3} />
      </section>

      <section className="band-soft" aria-labelledby="metodologias">
        <div className="section container split audience-block">
          <div className="stack" data-reveal>
            <p className="eyebrow">METODOLOGIAS</p>
            <h2 id="metodologias">Uma educação que vai além dos muros da escola.</h2>
            <p className="body">
              Propomos um ensino baseado na construção da autonomia dos estudantes, com estratégias que estimulam a
              representatividade e a participação de professores, famílias, poder público e comunidades.
            </p>
          </div>
          <IconGrid items={methods} cols={2} />
        </div>
      </section>

      <section className="section container split person" aria-labelledby="idealizador">
        <div className="monogram big" style={{ "--accent": idealizador.accent } as React.CSSProperties} aria-hidden data-reveal>
          PL
        </div>
        <div className="stack" data-reveal>
          <p className="eyebrow">IDEALIZADOR</p>
          <h2 id="idealizador">{idealizador.name}</h2>
          <p className="team-role">{idealizador.degree}</p>
          <p className="body">{idealizador.bio}</p>
          <div>
            <Link href="/nossa-equipe" className="btn btn-outline">
              Conheça nossa equipe
            </Link>
          </div>
          <Badge>FOTO E MINIBIOGRAFIA A VALIDAR</Badge>
        </div>
      </section>

      <section className="band-soft" aria-labelledby="trajetoria">
        <div className="section container">
          <SectionHead id="trajetoria" eyebrow="TRAJETÓRIA" title="Nossa linha do tempo." center />
          <StepsThread steps={timeline} />
          <Badge>LINHA DO TEMPO · FATOS E DATAS A CONFIRMAR ANTES DA PUBLICAÇÃO</Badge>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
