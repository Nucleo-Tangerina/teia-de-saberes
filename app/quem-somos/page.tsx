import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { CheckList, CtaBlock, IconGrid, PageHero, SectionHead, StepsThread } from "../ui";

export const metadata: Metadata = {
  title: { absolute: "Quem somos – Teia de Saberes" },
  description:
    "Conheça a Teia de Saberes, organização que fortalece redes públicas de ensino com cooperação, escuta ativa e conhecimento.",
  alternates: { canonical: "/quem-somos" },
};

const principles = [
  "Educação como direito humano e bem comum.",
  "Justiça social, equidade e inclusão.",
  "Escuta dos territórios e diálogo com os saberes locais.",
  "Formação ao longo da vida e em todos os espaços.",
  "Gestão democrática e cooperação entre sujeitos.",
  "Transparência, ética pública e compromisso institucional.",
  "Transformação curricular com foco na emancipação humana.",
];

const ways = [
  { icon: "target", title: "Excelência", text: "Equipe qualificada, focada em soluções eficientes." },
  { icon: "calendar-clock", title: "Acompanhamento contínuo", text: "Suporte conforme a necessidade do município." },
  { icon: "layers", title: "Eficiência", text: "Tecnologia e conhecimento integrados." },
];

const timeline = [
  { accent: "#ED8C32", title: "2009", text: "Início do idealizador na educação pública." },
  { accent: "#2679AD", title: "2019 a 2023", text: "Gestão da Escola Estadual Fazenda Paraíso." },
  { accent: "#F02A89", title: "2021", text: "Publicação do relatório da UNESCO Reimaginar nossos futuros juntos." },
];

export default function QuemSomos() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Quem somos" }]}
        eyebrow="QUEM SOMOS"
        title="Nossa trama"
        lead="Compromisso com uma educação justa, sustentável e transformadora"
        img="/images/quem.jpg"
        imgAlt="Equipe da Teia de Saberes em atividade"
      >
        <Link href="/contato" className="btn btn-orange">
          Fale com nossa equipe
        </Link>
      </PageHero>

      <section className="section container split about" aria-label="Quem somos">
        <div className="stack" data-reveal>
          <p className="body">
            A Teia de Saberes é uma organização que fortalece redes públicas de ensino por meio da cooperação, da escuta
            ativa e da produção de conhecimento comprometido com a justiça social.
          </p>
          <p className="body">
            Nascemos de um sonho de educadores: o de que a educação pode transformar as cidades. Acreditamos que o
            conhecimento já existe em cada pessoa e que a educação é o solo fértil onde ele germina. Mas semente sozinha
            não faz floresta: por isso, teia.
          </p>
          <p className="body">
            Hoje somos um hub de soluções educacionais, isto é, um ponto de encontro com mentorias, formações, assessorias
            e projetos que se conectam entre si e se ajustam a cada território. Trabalhamos com a Metodologia de Trabalho
            de Projetos, a Problematização e as Comunidades de Aprendizagem, à luz do Novo Contrato Social para a Educação
            (UNESCO, 2021) e da Agenda 2030, em especial do ODS 4: educação inclusiva, equitativa e de qualidade, ao longo
            da vida e em todos os espaços.
          </p>
          <p className="body">
            Mais do que prestar serviços, tecemos com os municípios políticas educacionais que respeitam a diversidade,
            valorizam a participação democrática e transformam as escolas em espaços de dignidade, pertencimento e
            inovação.
          </p>
        </div>
        <div className="about-photo" data-reveal="wipe">
          <Image src="/images/hero.jpg" alt="Educadores e gestores reunidos em volta de uma mesa" fill sizes="(max-width: 960px) 100vw, 536px" />
        </div>
      </section>

      <div className="container">
        <aside className="explainer" aria-labelledby="ncs-title" data-reveal>
          <h2 id="ncs-title">
            <BookOpen size={24} aria-hidden />O que é o Novo Contrato Social para a Educação
          </h2>
          <p className="body">
            Um contrato social é um acordo implícito entre as pessoas sobre como viver juntas. A UNESCO propõe renová-lo
            para a educação, com dois princípios: garantir o direito à educação de qualidade ao longo da vida e fortalecer
            a educação como esforço público e bem comum. O relatório, publicado em 2021 após consultas a mais de um milhão
            de pessoas, se apresenta como um documento vivo: ele se completa com a ação de quem educa.
          </p>
        </aside>
      </div>

      <section className="section container" aria-labelledby="principios">
        <SectionHead id="principios" eyebrow="PRINCÍPIOS" title="Princípios que orientam o nosso trabalho." />
        <CheckList items={principles} />
      </section>

      <section className="band-soft" aria-labelledby="como-trabalhamos">
        <div className="section container">
          <SectionHead id="como-trabalhamos" eyebrow="COMO TRABALHAMOS" title="Como trabalhamos." />
          <IconGrid items={ways} cols={3} />
        </div>
      </section>

      <section className="band-navy" aria-labelledby="ritmo">
        <div className="section container split challenges">
          <h2 id="ritmo" data-reveal>
            O ritmo da teia
          </h2>
          <div className="stack" data-reveal>
            <p className="body">
              O relatório propõe três movimentos para qualquer rede, e são também os nossos: levar adiante o que já
              funciona, abandonar o que já não serve e reimaginar o que vem a seguir.
            </p>
          </div>
        </div>
        <div className="pattern-band" aria-hidden />
      </section>

      <section className="section container" aria-labelledby="trajetoria">
        <SectionHead id="trajetoria" eyebrow="TRAJETÓRIA" title="Nossa linha do tempo." center />
        <StepsThread steps={timeline} />
      </section>

      <section className="band-soft" aria-label="Citação">
        <div className="section container">
          <figure className="quote" data-reveal>
            <blockquote>
              <p>“Um sonho real se constrói de mãos dadas, ouvidos atentos e com comunicação amorosa.”</p>
            </blockquote>
            <figcaption>— Pacelli H. S. Lopes</figcaption>
          </figure>
        </div>
      </section>

      <section className="section container" aria-labelledby="compromisso">
        <div className="section-head center" data-reveal>
          <h2 id="compromisso" className="sr-only">
            Compromisso final
          </h2>
          <p className="body">
            A escola, pública ou privada, é um espaço estratégico de construção de outro mundo possível. Trabalhamos para
            que toda criança, jovem e adulto aprenda com dignidade, para que cada educador se reconheça como agente de
            transformação e para que os gestores sejam protagonistas de uma educação que honra o passado e constrói os
            futuros.
          </p>
        </div>
      </section>

      <CtaBlock
        title="Vamos tecer juntos os futuros da educação?"
        text="Fale com nossa equipe e conte sobre a realidade da sua rede."
        label="Fale com nossa equipe"
      />
    </>
  );
}
