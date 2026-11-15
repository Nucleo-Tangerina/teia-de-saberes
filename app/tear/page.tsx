import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { FiosLigados, PageHero, Ponte } from "../ui";

export const metadata: Metadata = {
  title: "Tear: Plano Municipal de Educação",
  description:
    "Conduz o município na construção e no monitoramento do Plano Municipal de Educação frente à Lei nº 15.388/2026.",
  alternates: { canonical: "/tear" },
};

export default function Tear() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Soluções", href: "/solucoes-educacionais" }, { label: "Tear" }]}
        eyebrow="TEAR"
        title="Tear: Plano Municipal de Educação"
        lead="O plano da cidade, tecido com quem a vive."
        img="/images/tear.png"
        imgFit="contain"
        imgAlt="Logotipo do Tear, plano municipal de educação"
      />

      <section className="section container narrow-col" aria-label="Sobre o Tear">
        <div className="stack" data-reveal>
          <p className="body">
            Conduz o município na construção e no monitoramento do Plano Municipal de Educação frente à Lei nº
            15.388/2026.
          </p>
          <div>
            <a href="https://tear.teiadesaberes.com.br/" target="_blank" rel="noopener" className="btn btn-orange">
              Acesse o Tear
              <ArrowRight size={18} aria-hidden />
            </a>
          </div>
        </div>
      </section>

      <Ponte>
        O Novo Contrato Social pede educação como esforço público e bem comum. Um plano municipal construído com a
        comunidade é onde isso começa.
      </Ponte>

      <FiosLigados slug="tear" />
    </>
  );
}
