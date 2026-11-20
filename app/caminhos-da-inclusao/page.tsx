import type { Metadata } from "next";
import { CAMINHOS_URL } from "../content";
import { CtaBlock, Facts, FiosLigados, PageHero, Ponte } from "../ui";

export const metadata: Metadata = {
  title: "Caminhos da Inclusão: Formação para Mediadores",
  description:
    "Formação de 180 horas para atuar na inclusão escolar com mais segurança. Com Ana Paula Jorge. Aulas online, encontros ao vivo e certificado.",
  alternates: { canonical: "/caminhos-da-inclusao" },
};

const facts = [
  { label: "Formação completa", value: "180 horas" },
  { label: "Conteúdo estruturado", value: "5 módulos" },
  { label: "Formato", value: "Aulas online e encontros ao vivo" },
  { label: "De conclusão", value: "Certificado" },
];

// The full course page, enrolment and checkout live on the course's own site.
export default function CaminhosDaInclusao() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Soluções", href: "/solucoes-educacionais" }, { label: "Caminhos da Inclusão" }]}
        eyebrow="FORMAÇÃO"
        title="Ninguém fora da trama."
        lead="Formação de 180 horas para mediadores que atuam na inclusão escolar, com Ana Paula Jorge: 5 módulos, aulas online, encontros ao vivo e certificado."
        img="/caminhos/ana-paula-blazer.jpg"
        imgAlt="Ana Paula Jorge sorrindo, de blazer magenta, com os braços apoiados em uma mesa de madeira"
      >
        <a href={CAMINHOS_URL} target="_blank" rel="noopener" className="btn btn-orange btn-wrap">
          Conheça a formação completa
          <span className="sr-only"> (abre em uma nova aba)</span>
        </a>
      </PageHero>

      <div className="container facts-wrap">
        <Facts items={facts} />
      </div>

      <section className="section container narrow-col" aria-label="Abertura">
        <p className="body" data-reveal>
          Uma jornada de 180 horas para profissionais que desejam compreender os fundamentos da Educação Especial e
          aproximar esse conhecimento das situações encontradas no cotidiano escolar.
        </p>
      </section>

      <Ponte>
        O relatório defende o direito à educação de qualidade ao longo da vida, para todas as pessoas. Uma escola que
        inclui cumpre esse contrato.
      </Ponte>

      <CtaBlock
        title="Conheça o Caminhos da Inclusão por completo."
        text="Os módulos, os encontros ao vivo, a certificação e a inscrição estão no site da formação."
        label="Conheça a formação completa"
        href={CAMINHOS_URL}
        external
      />

      <FiosLigados slug="inclusao" />
    </>
  );
}
