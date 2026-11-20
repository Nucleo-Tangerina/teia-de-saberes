import type { Metadata } from "next";
import Link from "next/link";
import { CtaBlock, FiosLigados, PageHero, Ponte, SectionHead, StepsThread } from "../ui";

export const metadata: Metadata = {
  title: { absolute: "Olimpíada Pocket ODS – Teia de Saberes" },
  description:
    "Competição em três fases que leva os 17 ODS às escolas e faz estudantes transformarem a própria comunidade.",
  alternates: { canonical: "/olimpiada-pocket-ods" },
};

const phases = [
  {
    accent: "#FFB000",
    title: "Trilha de aprendizagem",
    text: "Quizzes e testes online que apresentam os 17 Objetivos de Desenvolvimento Sustentável de forma acessível, para o ensino fundamental e médio.",
  },
  {
    accent: "#2679AD",
    title: "Desenvolvimento de projetos",
    text: "Com o Arco de Maguerez, os estudantes criam projetos sociais, ambientais ou comunitários que resolvem problemas reais que eles mesmos identificam.",
  },
  {
    accent: "#F02A89",
    title: "Evento final",
    text: "Os melhores projetos são apresentados a um júri, com premiação, participação da comunidade e do poder público municipal.",
  },
];

export default function OlimpiadaPocketOds() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Soluções", href: "/solucoes-educacionais" }, { label: "Olimpíada Pocket ODS" }]}
        eyebrow="OLIMPÍADA POCKET ODS"
        title="Estudantes que transformam a própria comunidade."
        lead="Uma competição educacional para redes de ensino públicas e privadas."
        img="/images/sol5.jpg"
        imgAlt="Pessoa usando calculadora sobre gráficos impressos, ao lado de um teclado"
      >
        <Link href="/contato?interesse=olimpiada" className="btn btn-orange">
          Fale com nossa equipe
        </Link>
      </PageHero>

      <section className="band-soft" aria-labelledby="fases">
        <div className="section container">
          <SectionHead
            id="fases"
            eyebrow="AS TRÊS FASES"
            title="Uma competição educacional em três fases, pensada para redes de ensino públicas e privadas."
            center
          />
          <StepsThread steps={phases} />
        </div>
      </section>

      <section className="section container split audience-block align-top" aria-label="Para quem é a Olimpíada">
        <div className="stack" data-reveal>
          <p className="eyebrow">REDES DE ENSINO</p>
          <h2>Para a rede</h2>
          <p className="body">
            A Olimpíada funciona como uma leitura do território: revela problemas locais e as soluções criadas pelos
            jovens.
          </p>
        </div>
        <div className="stack" data-reveal>
          <p className="eyebrow">PATROCÍNIO</p>
          <h2>Para empresas e institutos parceiros</h2>
          <p className="body">
            Parcerias de patrocínio com relatório de impacto (estudantes alcançados, projetos gerados, ODS tratados).
            Valores sob proposta.
          </p>
        </div>
      </section>

      <Ponte>Participação estudantil, escola ligada à comunidade e uma nova relação com o planeta.</Ponte>

      <CtaBlock
        title="Quer levar a Olimpíada para a sua rede ou apoiar uma edição?"
        text="Fale com nossa equipe."
        label="Fale com nossa equipe"
        href="/contato?interesse=olimpiada"
      />

      <FiosLigados slug="olimpiada" />
    </>
  );
}
