import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Suspense } from "react";
import { CAMINHOS_OFERTA, fios, solutions, TEAR_URL } from "../content";
import { CtaBlock, PageHero, SectionHead, StepsThread } from "../ui";
import { SolutionsFilter, SolutionsFilterFallback } from "./filter";

export const metadata: Metadata = {
  title: { absolute: "Soluções educacionais – Teia de Saberes" },
  description:
    "Planos municipais, mentorias, formação, assessoria técnica e projetos para redes de ensino. Escolha o fio por onde começar.",
  alternates: { canonical: "/solucoes-educacionais" },
};

// Methodology copy from the content brief (issue #7).
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
        lead="Um hub é um ponto de encontro: aqui, cada solução da Teia de Saberes é um nó de uma mesma teia: serve à missão de ajudar as redes municipais a construir o Novo Contrato Social da Educação e se conecta às outras."
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

      <section className="section container destaques" aria-labelledby="destaques-title">
        <p className="eyebrow" id="destaques-title">
          EM DESTAQUE
        </p>
        <article className="destaque" aria-labelledby="destaque-caminhos" data-reveal>
          <div className="destaque-media is-photo">
            <Image
              src="/caminhos/ana-paula-blazer.jpg"
              alt="Ana Paula Jorge sorrindo, de blazer magenta, com os braços apoiados em uma mesa de madeira"
              fill
              sizes="(max-width: 960px) 100vw, 520px"
            />
          </div>
          <div className="destaque-copy">
            <p className="destaque-label">FORMAÇÃO</p>
            <h2 id="destaque-caminhos">Caminhos da Inclusão</h2>
            <p className="destaque-phrase">Saiba como agir na prática diante dos desafios reais da Educação Especial.</p>
            <ul className="tags" aria-label="Sobre a formação">
              <li>180 horas</li>
              <li>5 módulos</li>
              <li>Encontros ao vivo</li>
              <li>Certificado</li>
            </ul>
            <div className="actions">
              <a href={CAMINHOS_OFERTA} target="_blank" rel="noopener" className="btn btn-orange btn-wrap">
                Quero garantir minha vaga
                <span className="sr-only"> na formação Caminhos da Inclusão (abre em uma nova aba)</span>
              </a>
              <Link href="/caminhos-da-inclusao" className="btn btn-outline btn-wrap">
                Conheça a formação
              </Link>
            </div>
          </div>
        </article>
        <article className="destaque is-reverse" aria-labelledby="destaque-tear" data-reveal>
          <div className="destaque-media is-logo">
            <Image src="/tear/tear-marca.png" alt="Logotipo do Tear" fill sizes="(max-width: 960px) 100vw, 520px" />
          </div>
          <div className="destaque-copy">
            <p className="destaque-label">PLANO MUNICIPAL DE EDUCAÇÃO</p>
            <h2 id="destaque-tear">Tear</h2>
            <p className="destaque-phrase">O plano da cidade, tecido com quem a vive.</p>
            <ul className="tags" aria-label="Sobre o Tear">
              <li>Lei nº 15.388/2026</li>
              <li>19 objetivos</li>
              <li>73 metas</li>
              <li>372 estratégias</li>
            </ul>
            <div className="actions">
              <a href={TEAR_URL} target="_blank" rel="noopener" className="btn btn-orange btn-wrap">
                Acesse o Tear
                <span className="sr-only"> (abre em uma nova aba)</span>
                <ArrowRight size={18} aria-hidden />
              </a>
              <Link href="/tear" className="btn btn-outline btn-wrap">
                Conheça o Tear
              </Link>
            </div>
          </div>
        </article>
      </section>

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
