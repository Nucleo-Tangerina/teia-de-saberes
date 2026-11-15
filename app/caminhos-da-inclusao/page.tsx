import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { FiosLigados, PageHero, Ponte } from "../ui";

export const metadata: Metadata = {
  title: "Caminhos da Inclusão",
  description:
    "Formação de 180 horas para mediadores que atuam na inclusão escolar: 5 módulos, aulas online, encontros ao vivo e certificado.",
  alternates: { canonical: "/caminhos-da-inclusao" },
};

export default function CaminhosDaInclusao() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Soluções", href: "/solucoes-educacionais" }, { label: "Caminhos da Inclusão" }]}
        eyebrow="CAMINHOS DA INCLUSÃO"
        title="Caminhos da Inclusão"
        lead="Ninguém fora da trama."
        img="/images/caminhos-inclusao.png"
        imgFit="contain"
        imgAlt="Caminhos da Inclusão: formação para mediadores, 180 horas"
      />

      <section className="section container narrow-col" aria-label="Sobre a formação">
        <div className="stack" data-reveal>
          <p className="body">
            Formação de 180 horas para mediadores que atuam na inclusão escolar, com Ana Paula Jorge: 5 módulos, aulas
            online, encontros ao vivo e certificado.
          </p>
          <div>
            <a
              href="https://caminhoinclusao.teiadesaberes.com.br/"
              target="_blank"
              rel="noopener"
              className="btn btn-orange"
            >
              Conheça a formação
              <ArrowRight size={18} aria-hidden />
            </a>
          </div>
        </div>
      </section>

      <Ponte>
        O relatório defende o direito à educação de qualidade ao longo da vida, para todas as pessoas. Uma escola que
        inclui cumpre esse contrato.
      </Ponte>

      <FiosLigados slug="inclusao" />
    </>
  );
}
