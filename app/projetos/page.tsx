import type { Metadata } from "next";
import Image from "next/image";
import { municipios } from "../content";
import { Badge, CtaBlock, PageHero, ProjectPlaceholders, SectionHead, stagger } from "../ui";

export const metadata: Metadata = {
  title: "Projetos e Resultados",
  description:
    "Projetos e experiências da Teia de Saberes com redes municipais de educação. Conheça os municípios parceiros.",
  alternates: { canonical: "/projetos" },
};

export default function Projetos() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Projetos e Resultados" }]}
        eyebrow="PROJETOS E EXPERIÊNCIAS"
        title="Conhecimento colocado em prática."
        lead="Cada projeto representa uma oportunidade de fortalecer profissionais, ampliar diálogos e construir novas possibilidades para a educação."
        img="/images/proj0.jpg"
        imgAlt="Professor com estudantes em sala de aula"
      />

      <section className="section container" aria-labelledby="municipios">
        <SectionHead id="municipios" eyebrow="MUNICÍPIOS PARCEIROS" title="Municípios que estão transformando a educação da sua cidade." />
        <ul className="muni-grid">
          {municipios.map((m, i) => (
            <li key={m.name} data-reveal style={stagger(i % 6)}>
              <Image src={m.src} alt={`Brasão de ${m.name}`} width={140} height={84} />
              <span className="muni-name">{m.name}</span>
              <span className="muni-uf">{m.uf}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="band-soft" aria-labelledby="casos">
        <div className="section container">
          <SectionHead
            id="casos"
            eyebrow="PROJETOS"
            title="Experiências com as redes municipais."
            text="Cada projeto terá contexto, local, período, ações, registros e resultados verificáveis, publicados somente com autorização."
          />
          <ProjectPlaceholders />
          <Badge>CASOS REAIS A VALIDAR · NÃO PUBLICAR SEM AUTORIZAÇÃO</Badge>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
