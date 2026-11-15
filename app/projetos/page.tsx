import type { Metadata } from "next";
import Image from "next/image";
import { municipios } from "../content";
import { CtaBlock, PageHero, SectionHead, stagger } from "../ui";

type Case = {
  titulo: string;
  local: string;
  periodo: string;
  desafio: string;
  acoes: string;
  resultados: string;
  fonte: string;
};

// Only cases complete and authorized in writing go here (issue #17); empty means the section is hidden.
const cases: Case[] = [];

const lead = "Projetos e resultados com as redes de ensino que caminham com a Teia de Saberes.";

export const metadata: Metadata = {
  title: "Projetos e Resultados",
  description: lead,
  alternates: { canonical: "/projetos" },
};

export default function Projetos() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Projetos e Resultados" }]}
        eyebrow="PROJETOS E RESULTADOS"
        title="Fios que já se firmaram"
        lead={lead}
        img="/images/proj0.jpg"
        imgAlt="Professor com estudantes em sala de aula"
      />

      <section className="section container" aria-labelledby="municipios">
        <SectionHead
          id="municipios"
          eyebrow="MUNICÍPIOS PARCEIROS"
          title="Municípios que estão transformando a educação da sua cidade."
          text="Os casos são publicados com dados verificáveis e com autorização das redes e instituições envolvidas."
        />
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

      {cases.length > 0 && (
        <section className="band-soft" aria-labelledby="casos">
          <div className="section container">
            <SectionHead id="casos" eyebrow="CASOS" title="Experiências com as redes de ensino." />
            <ul className="projects">
              {cases.map((c, i) => (
                <li key={c.titulo} data-reveal style={stagger(i)}>
                  <div className="proj-body">
                    <div className="proj-top">
                      <span className="proj-place">{c.local}</span>
                      <span className="proj-period">{c.periodo}</span>
                    </div>
                    <h3>{c.titulo}</h3>
                    <dl className="proj-fields">
                      <div>
                        <dt>DESAFIO</dt>
                        <dd>{c.desafio}</dd>
                      </div>
                      <div>
                        <dt>AÇÕES</dt>
                        <dd>{c.acoes}</dd>
                      </div>
                      <div>
                        <dt>RESULTADOS</dt>
                        <dd>
                          {c.resultados} <small>Fonte: {c.fonte}</small>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBlock />
    </>
  );
}
