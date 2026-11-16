import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckList, CtaBlock, Facts, FiosLigados, IconGrid, PageHero, Ponte, SectionHead } from "../ui";

export const metadata: Metadata = {
  title: { absolute: "Mentoria para Transformação Escolar – Teia de Saberes" },
  description:
    "180 horas em 12 meses para transformar a escola, com análise do território e revisão do Projeto Político-Pedagógico.",
  alternates: { canonical: "/mentoria-transformacao-escolar" },
};

const facts = [
  { label: "Duração", value: "12 meses" },
  { label: "Carga horária", value: "180 horas" },
  { label: "Formato", value: "Presencial e a distância" },
  { label: "Acompanhamento", value: "Próximo, ao longo do ciclo" },
];

const reasons = [
  { icon: "landmark", title: "Direito humano", text: "A educação é direito humano e base de sociedades mais igualitárias." },
  { icon: "messages-square", title: "Inovar com escuta", text: "Inovar exige responsabilidade, diálogo e escuta do território." },
  { icon: "sprout", title: "Práticas que permanecem", text: "As práticas construídas hoje precisam permanecer depois de quem as iniciou." },
];

const frentes = [
  "Análise do Território Educativo: diagnóstico participativo de desafios e potencialidades.",
  "Núcleos de Transformação Escolar: professores e gestores que atuam como multiplicadores.",
  "Revisão do Projeto Político-Pedagógico à luz do Novo Contrato Social.",
  "Acompanhamento formativo com metodologias ativas, como o Arco de Maguerez e projetos integradores.",
  "Relatórios e monitoramento, com apresentação de resultados ao final do ciclo.",
];

const results = [
  "Autonomia pedagógica fortalecida.",
  "Professores com visão crítica e inovadora.",
  "Práticas de educação integral e inclusiva.",
  "Soluções construídas coletivamente e sustentáveis.",
  "Uma escola que vira referência de participação para o município.",
];

const commitments = [
  "Educação como bem comum.",
  "Justiça social, equidade e inclusão.",
  "Educação ao longo da vida.",
  "Transformação curricular com base no território.",
  "Futuros sustentáveis (ODS 4, 10, 16 e 17).",
];

// Aguardando fotos de Paty do Alferes e da Fazenda Paraíso enviadas pelo cliente.
const referenceImages: { src: string; alt: string }[] = [];

export default function MentoriaEscolar() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Soluções", href: "/solucoes-educacionais" }, { label: "Mentoria para Transformação Escolar" }]}
        eyebrow="MENTORIA"
        title="Uma escola que ensina e pratica a cooperação."
        lead="Uma jornada coletiva por uma educação mais justa, inovadora e sustentável."
        img="/images/sol1.jpg"
        imgAlt="Professora em sala de aula com estudantes"
      >
        <Link href="/contato?interesse=escolar" className="btn btn-orange">
          Solicite uma proposta
        </Link>
        <a href="#como-funciona" className="btn btn-outline">
          Como funciona
        </a>
      </PageHero>

      <div className="container facts-wrap">
        <Facts items={facts} />
      </div>

      <section className="section container narrow-col" aria-labelledby="abertura">
        <div className="stack" data-reveal>
          <p className="eyebrow">MENTORIA PARA TRANSFORMAÇÃO ESCOLAR</p>
          <h2 id="abertura">A escola como bem comum, a partir do território.</h2>
          <p className="body">
            Projeto formativo para redes que querem transformar suas escolas em espaços de aprendizagem significativa,
            justiça social e inovação pedagógica. Inspirada no Novo Contrato Social para a Educação e na Agenda 2030,
            parte da ideia de que a escola é um bem comum e se reinventa articulando conhecimento, afetos e participação
            cidadã, a partir do território.
          </p>
        </div>
      </section>

      <section className="band-soft" aria-labelledby="por-que">
        <div className="section container">
          <SectionHead id="por-que" eyebrow="POR QUE INVESTIR" title="Três razões para transformar a escola." center />
          <IconGrid items={reasons} cols={3} />
        </div>
      </section>

      <section id="como-funciona" className="section container split audience-block align-top" aria-labelledby="como-funciona-title">
        <div className="stack" data-reveal>
          <p className="eyebrow">COMO FUNCIONA</p>
          <h2 id="como-funciona-title">Cinco frentes ao longo de um ciclo.</h2>
          <p className="body">12 meses e 180 horas, presencial e a distância, com acompanhamento próximo.</p>
        </div>
        <CheckList items={frentes} />
      </section>

      {/* band-soft, not band-navy: CheckList text has no on-navy color */}
      <section className="band-soft" aria-labelledby="resultados">
        <div className="section container split audience-block align-top">
          <div className="stack" data-reveal>
            <p className="eyebrow">RESULTADOS ESPERADOS</p>
            <h2 id="resultados">O que a mentoria busca construir.</h2>
          </div>
          <CheckList items={results} />
        </div>
      </section>

      <section className="section container split audience-block align-top" aria-labelledby="compromissos">
        <div className="stack" data-reveal>
          <p className="eyebrow">COMPROMISSOS</p>
          <h2 id="compromissos">O que orienta cada escolha.</h2>
        </div>
        <CheckList items={commitments} />
      </section>

      <section className="band-soft" aria-labelledby="referencia">
        <div className="section container narrow-col">
          <div className="stack" data-reveal>
            <p className="eyebrow">EXPERIÊNCIA DE REFERÊNCIA</p>
            <h2 id="referencia">Paty do Alferes e Escola Fazenda Paraíso.</h2>
            <p className="body">
              A metodologia da mentoria foi construída na prática: com as educadoras de Paty do Alferes (RJ), que
              estudaram com a equipe da Teia de Saberes e transformaram a rotina da Escola da Aldeia, e na Escola
              Estadual Fazenda Paraíso, em Minas Gerais, que o idealizador da Teia geriu de 2019 a 2023 como Comunidade
              de Aprendizagem.
            </p>
          </div>
          {referenceImages.length > 0 && (
            <div className="reference-photos">
              {referenceImages.map((img) => (
                <div key={img.src} className="about-photo" data-reveal="wipe">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 960px) 100vw, 400px" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Ponte>
        O relatório pede pedagogias de cooperação e solidariedade, professores que produzem conhecimento e escolas
        redesenhadas para o coletivo. Os núcleos de transformação são um jeito concreto de fazer isso.
      </Ponte>

      <CtaBlock
        title="Leve a transformação para a sua rede."
        text="Solicite uma proposta e conte como são as escolas da sua rede."
        label="Solicite uma proposta"
        href="/contato?interesse=escolar"
      />

      <FiosLigados slug="escolar" />
    </>
  );
}
