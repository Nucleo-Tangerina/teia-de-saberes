import type { Metadata } from "next";
import { articles } from "../content";
import { BlogIndex } from "../interactive";
import { Badge, CtaBlock, PageHero } from "../ui";

export const metadata: Metadata = {
  title: "Conteúdos",
  description: "Reflexões e conhecimentos sobre gestão educacional, formação continuada e os desafios da educação pública municipal.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Conteúdos" }]}
        eyebrow="CONTEÚDOS E PUBLICAÇÕES"
        title="Reflexões e conhecimentos para quem transforma a educação."
        lead="Artigos sobre gestão educacional, formação continuada e os desafios contemporâneos da educação pública municipal."
      />
      <section className="section container" aria-label="Lista de conteúdos">
        <BlogIndex items={articles} />
        <Badge>ARTIGOS EM PRODUÇÃO · AUTORIA E DATAS A DEFINIR</Badge>
      </section>
      <CtaBlock />
    </>
  );
}
