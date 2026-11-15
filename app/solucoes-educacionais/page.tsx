import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { fios, solutions } from "../content";
import { CtaBlock, PageHero, SectionHead, StepsThread } from "../ui";
import { SolutionsFilter, SolutionsFilterFallback } from "./filter";

export const metadata: Metadata = {
  title: { absolute: "Soluções educacionais – Teia de Saberes" },
  description:
    "Planos municipais, mentorias, formação, assessoria técnica e projetos para redes de ensino. Escolha o fio por onde começar.",
  alternates: { canonical: "/solucoes-educacionais" },
};

// Methodology copy from the content brief (issue #7); content.ts `steps` still holds the old text.
const steps = [
  { accent: "#ED8C32", title: "Escuta e compreensão", text: "Conhecer o território, a rede e as urgências." },
  {
    accent: "#2679AD",
    title: "Planejamento colaborativo",
    text: "Decidir com a equipe o que levar adiante, o que abandonar e o que reimaginar.",
  },
  { accent: "#F02A89", title: "Desenvolvimento das ações", text: "Testar pequenos passos que mudam a rotina." },
  { accent: "#90D518", title: "Acompanhamento", text: "Olhar os resultados e ajustar, como um documento vivo." },
];

const href = (slug: string) => solutions.find((s) => s.slug === slug)!.href;

export default function Solucoes() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Soluções" }]}
        eyebrow="SOLUÇÕES · OS NÓS DA TEIA"
        title="Um hub de soluções para tecer a educação do seu município."
        lead="Cada solução da Teia de Saberes é um nó de uma mesma teia: serve à missão de ajudar as redes municipais a construir o Novo Contrato Social da Educação e se conecta às outras."
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

      <section id="catalogo" className="section container" aria-labelledby="catalogo-title">
        <SectionHead
          id="catalogo-title"
          eyebrow="CATÁLOGO"
          title="Escolha por onde começar."
          text="Este hub é um ponto de encontro. Escolha o fio por onde quer começar; nós mostramos os nós que o sustentam e como eles se ligam. Começamos sempre pela escuta, planejamos com a sua equipe e acompanhamos até a prática mudar."
        />
        {/* useSearchParams needs a Suspense boundary on a static page; the fallback is the same unfiltered markup */}
        <Suspense fallback={<SolutionsFilterFallback solutions={solutions} fios={fios} />}>
          <SolutionsFilter solutions={solutions} fios={fios} />
        </Suspense>
      </section>

      <section className="band-soft" aria-labelledby="como">
        <div className="section container">
          <SectionHead id="como" eyebrow="METODOLOGIA" title="Cada transformação começa com a escuta." center />
          <StepsThread steps={steps} />
        </div>
      </section>

      <section className="section container" aria-labelledby="jornada">
        <SectionHead
          id="jornada"
          eyebrow="JORNADA SUGERIDA"
          title="Para a secretaria que chega sem saber por onde começar."
          text="Uma sugestão, não um pacote."
        />
        <ol className="hub-journey" data-reveal>
          <li>
            <Link href={href("palestras")}>Palestra ou roda de conversa</Link>
          </li>
          <li>
            <Link href={href("tear")}>Tear</Link> e <Link href={href("gestao")}>Mentoria para Gestão Pública</Link>
          </li>
          <li>
            <Link href={href("escolar")}>Mentoria para Transformação Escolar</Link> nas escolas priorizadas
          </li>
          <li>
            <Link href={href("assessoria")}>Assessoria técnica</Link> para sustentar
          </li>
        </ol>
      </section>

      <CtaBlock title="Vamos conversar sobre os desafios do seu município?" label="Fale com nossa equipe" />
    </>
  );
}
