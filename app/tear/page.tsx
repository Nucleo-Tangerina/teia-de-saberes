import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { Variante } from "../aprovacao/variante";
import { TEAR_URL, WHATSAPP } from "../content";
import { CheckList, FiosLigados, PageHero, Ponte, SectionHead, StepsThread, stagger } from "../ui";

export const metadata: Metadata = {
  title: "Tear: Plano Municipal de Educação",
  description:
    "Encontre em um só lugar os dados que sua equipe levaria dias ou semanas para localizar, organizar e analisar. Da lei ao plano.",
  alternates: { canonical: "/tear" },
};

// Copy ported verbatim from the Tear commercial landing (front-pne, src/lib/venda.ts and
// src/paginas/landing.tsx). Live parts of that page (countdown, municipality search and
// diagnosis) are API-driven and stay out: only numbers written in the landing appear here.

// Deadline agreed with the client in the landing (PRAZO, 30/04/2027).
const PRAZO = "30 de abril de 2027";

// Structure of the new PNE, Lei nº 15.388/2026.
const LEI = [
  { valor: "19", rotulo: "Objetivos" },
  { valor: "73", rotulo: "Metas" },
  { valor: "372", rotulo: "Estratégias" },
];

const TAREFAS = [
  "Localizar dados oficiais.",
  "Analisar indicadores.",
  "Compreender a realidade educacional do município.",
  "Construir diagnósticos.",
  "Definir prioridades, metas e estratégias.",
  "Lidar com documentos técnicos e jurídicos.",
  "Cumprir etapas e acompanhar prazos.",
  "Preparar, revisar e validar documentos.",
];

const PROBLEMAS = [
  "Dados espalhados em diferentes fontes.",
  "Indicadores que precisam ser localizados e interpretados.",
  "Falta de profissionais especializados no processo.",
  "Dificuldade com documentos técnicos e jurídicos.",
  "Diagnósticos ainda incompletos.",
  "Documentos sendo preparados manualmente.",
  "Pouco tempo para discussão, revisão e validação.",
];

const FONTES = [
  { sigla: "INEP", desc: "Censo Escolar, Ideb e indicadores educacionais" },
  { sigla: "IBGE", desc: "População, território e recorte socioeconômico" },
  { sigla: "SICONFI", desc: "Receitas e despesas declaradas pelo município" },
  { sigla: "SIOPE", desc: "Investimento em educação e vinculação mínima" },
];

const PRONTO = [
  "Os dados já estão organizados.",
  "A estrutura do PNE já está no sistema.",
  "A jornada já está definida.",
  "E sua equipe sabe qual é o próximo passo.",
];

const PASSOS = [
  {
    accent: "#ED8C32",
    title: "Dados e diagnóstico",
    text: "Selecione o município, visualize informações e indicadores e utilize os dados disponíveis para apoiar a compreensão da realidade educacional local.",
  },
  {
    accent: "#2679AD",
    title: "Jornada orientada",
    text: "Acompanhe as etapas do processo, o que já foi concluído, o que está pendente e quais são os próximos passos.",
  },
  {
    accent: "#F02A89",
    title: "Datas e alertas",
    text: "O sistema ajuda sua equipe a acompanhar os prazos importantes ao longo da construção do Plano.",
  },
  {
    accent: "#90D518",
    title: "Objetivos, metas e estratégias",
    text: "Trabalhe a estrutura do Plano considerando o novo PNE e as particularidades do município.",
  },
  {
    accent: "#ED8C32",
    title: "Documentos automatizados",
    text: "As informações trabalhadas durante a jornada alimentam os documentos contemplados pela plataforma, que são gerados e formatados automaticamente.",
  },
  {
    accent: "#2679AD",
    title: "Apoio especializado",
    text: "Sua equipe conta com profissionais que conhecem o processo para apoiar a utilização da plataforma e a condução das etapas.",
  },
];

const BENEFICIOS = [
  { title: "Dados integrados", text: "Informações do município organizadas em um único ambiente." },
  {
    title: "Linguagem simplificada",
    text: "Análises e orientações apresentadas de maneira mais fácil de compreender.",
  },
  {
    title: "Documentos prontos",
    text: "Documentos contemplados pelo sistema são gerados e formatados automaticamente.",
  },
  {
    title: "Jornada passo a passo",
    text: "Sua equipe consegue visualizar o que precisa fazer e qual é a próxima etapa.",
  },
  { title: "Datas e alertas", text: "Prazos importantes ficam integrados à jornada." },
  { title: "Equipe especializada", text: "A tecnologia vem acompanhada de suporte humano especializado." },
];

const SEM = [
  "Procurar dados em diferentes fontes.",
  "Organizar informações manualmente.",
  "Interpretar a estrutura do novo PNE.",
  "Descobrir como executar cada etapa.",
  "Controlar datas e pendências.",
  "Montar documentos do zero.",
  "Formatar arquivos manualmente.",
  "Lidar com linguagem técnica e jurídica.",
  "Descobrir os próximos passos durante o próprio processo.",
];

const COM = [
  "Dados do município organizados.",
  "PNE estruturado dentro do sistema.",
  "Jornada passo a passo.",
  "Datas e alertas.",
  "Linguagem simplificada.",
  "Documentos automatizados e formatados.",
  "Equipe especializada acompanhando o processo.",
];

const FECHO = [
  "Os dados já podem estar organizados.",
  "A estrutura já está no sistema.",
  "A jornada já está definida.",
  "Os documentos podem ser automatizados.",
  "E sua equipe pode contar com apoio especializado.",
];

const novaAba = <span className="sr-only"> (abre em uma nova aba)</span>;

function Prazo({ onNavy }: { onNavy?: boolean }) {
  return (
    <div className={`tear-prazo${onNavy ? " on-navy" : ""}`}>
      <p className="tear-prazo-label">Prazo para atualização</p>
      <p className="tear-prazo-data">{PRAZO}</p>
      <p className="tear-prazo-text">
        Cada dia que passa é um dia a menos para diagnosticar, planejar, validar e entregar.
      </p>
    </div>
  );
}

export default function Tear() {
  return (
    <>
      {/* 01. Hero */}
      <PageHero
        crumbs={[{ label: "Soluções", href: "/solucoes-educacionais" }, { label: "Tear" }]}
        eyebrow="ATENÇÃO, GESTORES MUNICIPAIS DE EDUCAÇÃO"
        title="O prazo está correndo. Seu município já tem os dados necessários para construir o novo Plano Municipal de Educação?"
        lead={
          <>
            Não espere chegar em abril para descobrir que ainda faltam{" "}
            <strong>indicadores, diagnósticos e informações essenciais</strong> para construir o Plano do seu
            município.
          </>
        }
        img="/tear/gestora.png"
        imgFit="contain"
        imgAlt="Gestora de educação segurando um tablet. Ao lado: todos os municípios precisam estar atualizados até abril."
        after={
          <div className="tear-hero-after">
            <p className="tear-hero-strong">
              Encontre em um só lugar os dados que sua equipe levaria dias ou semanas para localizar, organizar e
              analisar.
            </p>
            <Prazo />
            <div className="actions">
              <a href={TEAR_URL} target="_blank" rel="noopener" className="btn btn-orange btn-wrap">
                Acessar os dados do meu município
                {novaAba}
                <ArrowRight size={18} aria-hidden />
              </a>
              <Link href="/contato?interesse=tear" className="btn btn-outline btn-wrap">
                Preparar meu município
              </Link>
            </div>
          </div>
        }
      />

      <Variante
        id="tear-frase"
        opcoes={{
          a: (
            // top padding only: the next section already brings its own top padding
            <section className="container narrow-col" style={{ paddingTop: "var(--section)" }} aria-label="Frase do Tear">
              <p className="ponte-text" data-reveal>
                O plano da cidade, tecido com quem a vive.
              </p>
            </section>
          ),
          b: null,
        }}
      />

      {/* 02. Abril é o prazo */}
      <section className="section container" aria-labelledby="prazo">
        <div className="split align-top">
          <div className="stack" data-reveal>
            <h2 id="prazo">Abril é o prazo. Não o momento de começar.</h2>
            <p className="lead">
              Construir o novo Plano Municipal de Educação exige muito mais do que preencher um documento.
            </p>
            <p className="body">
              O novo PNE estabelece uma estrutura ampla que precisa ser compreendida e relacionada à realidade de cada
              município:
            </p>
            <dl className="tear-lei">
              {LEI.map((l) => (
                <div key={l.rotulo}>
                  <dt>{l.rotulo}</dt>
                  <dd>{l.valor}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="stack-tight" data-reveal>
            <p className="tear-intro">
              E antes de transformar tudo isso em planejamento municipal, sua equipe ainda precisa:
            </p>
            <ul className="tear-rows">
              {TAREFAS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="tear-note">Tudo isso enquanto continua atendendo às demandas diárias da Secretaria.</p>
          </div>
        </div>
        <div className="tear-statement" data-reveal>
          <p>O prazo diminui todos os dias.</p>
          <p className="tear-statement-strong">A quantidade de trabalho, não.</p>
        </div>
      </section>

      {/* 03. Corrida contra o relógio */}
      <section className="band-soft" aria-labelledby="corrida">
        <div className="section container">
          <div className="section-head narrow" data-reveal>
            <h2 id="corrida">Deixar para depois pode transformar o Plano em uma corrida contra o relógio</h2>
            <p className="lead">O problema não é apenas ter um prazo. É tudo o que precisa acontecer antes dele.</p>
          </div>
          <div className="narrow" data-reveal>
            <p className="tear-intro">
              Quando o processo começa tarde, sua equipe pode chegar às últimas semanas ainda enfrentando:
            </p>
            <ol className="tear-rows numbered">
              {PROBLEMAS.map((t, i) => (
                <li key={t}>
                  <span className="tear-num" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {t}
                </li>
              ))}
            </ol>
          </div>
          <div className="narrow stack-tight tear-block" data-reveal>
            <p className="tear-subhead">E existe uma obrigação por trás desse processo.</p>
            <p className="body">
              Atrasos e inconsistências podem expor a gestão a{" "}
              <strong>questionamentos e medidas dos órgãos competentes</strong>, conforme as obrigações aplicáveis ao
              município.
            </p>
          </div>
          <div className="tear-statement" data-reveal>
            <p>Quando abril chegar, não será hora de começar.</p>
            <p className="tear-statement-strong">Será hora de estar pronto.</p>
          </div>
        </div>
      </section>

      {/* 04. O município */}
      <section id="municipio" className="section container" aria-labelledby="municipio-title">
        <div className="section-head narrow" data-reveal>
          <h2 id="municipio-title">E se o seu município não precisasse começar do zero?</h2>
          <p className="tear-subhead">Pare de procurar dados. Comece a construir o Plano.</p>
        </div>
        <div className="split align-top">
          <div className="stack" data-reveal>
            <p className="body">
              Nossa plataforma transforma a complexidade do processo em uma{" "}
              <strong>jornada organizada, orientada e automatizada</strong>. E começa resolvendo um dos maiores
              gargalos: <strong>os dados do seu município.</strong>
            </p>
            <p className="body">
              A própria estrutura do PNE considera diferentes fontes de dados oficiais — educacionais, demográficas,
              sociais, econômicas e territoriais — como subsídio para o planejamento. Em vez de sua equipe perder dias
              procurando e organizando essas informações, a plataforma integra as bases utilizadas pelo sistema e
              apresenta os dados disponíveis de forma organizada para análise.
            </p>
            <div>
              <a href={TEAR_URL} target="_blank" rel="noopener" className="btn btn-orange btn-wrap">
                Consultar meu município
                {novaAba}
                <ArrowRight size={18} aria-hidden />
              </a>
            </div>
          </div>
          <div className="tear-panel" data-reveal>
            <p className="tear-panel-head">plataforma · painel do município</p>
            <div className="tear-panel-body">
              <h3 className="tear-panel-title">Bases oficiais integradas</h3>
              <ul className="tear-fontes">
                {FONTES.map((f) => (
                  <li key={f.sigla}>
                    <strong>{f.sigla}</strong>
                    <span>{f.desc}</span>
                  </li>
                ))}
              </ul>
              <CheckList items={PRONTO} />
            </div>
          </div>
        </div>
      </section>

      {/* 05. Da lei ao plano */}
      <section id="como-funciona" className="band-soft" aria-labelledby="como-funciona-title">
        <div className="section container">
          <SectionHead
            id="como-funciona-title"
            title="Da lei ao plano. Sem construir todo o caminho sozinho."
            text="A plataforma conduz sua equipe durante o processo."
          />
          <StepsThread steps={PASSOS} />
          <div className="tear-after-steps" data-reveal>
            <Link href="/contato?interesse=tear" className="btn btn-orange btn-wrap">
              Quero conhecer a plataforma
            </Link>
          </div>
        </div>
      </section>

      {/* 06. Benefícios */}
      <section id="beneficios" className="section container" aria-labelledby="beneficios-title">
        <div className="section-head narrow" data-reveal>
          <h2 id="beneficios-title">Menos trabalho operacional. Mais tempo para decidir.</h2>
          <p className="lead">
            Sua equipe não precisa dominar legislação, dados, documentação e tecnologia para começar.
          </p>
          <p className="body">
            A plataforma foi criada justamente para reduzir a complexidade operacional enfrentada pelas equipes
            municipais.
          </p>
        </div>
        <ol className="tear-beneficios">
          {BENEFICIOS.map((b, i) => (
            <li key={b.title} data-reveal style={stagger(Math.min(i, 5))}>
              <span className="tear-num" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </li>
          ))}
        </ol>
        <div className="tear-statement" data-reveal>
          <p className="tear-statement-strong small">A plataforma não substitui as decisões da sua equipe.</p>
          <p>Ela elimina boa parte do trabalho operacional que existe antes delas.</p>
        </div>
      </section>

      {/* 07. Dois caminhos */}
      <section className="band-soft" aria-labelledby="caminhos">
        <div className="section container">
          <SectionHead id="caminhos" title="O mesmo plano. Dois caminhos completamente diferentes." />
          <div className="tear-paths">
            <div className="tear-path" data-reveal>
              <h3 className="tear-path-label">SEM A PLATAFORMA</h3>
              <ul>
                {SEM.map((t) => (
                  <li key={t}>
                    <span className="tear-x" aria-hidden>
                      <X size={14} strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <p className="tear-or" aria-hidden>
              OU
            </p>
            <div className="tear-path" data-reveal>
              <h3 className="tear-path-label is-com">COM A PLATAFORMA</h3>
              <CheckList items={COM} />
            </div>
          </div>
          <div className="tear-statement" data-reveal>
            <p>O município continua responsável pelas decisões.</p>
            <p className="tear-statement-strong">Mas não precisa construir toda a estrutura sozinho.</p>
            <div>
              <a href={WHATSAPP} target="_blank" rel="noopener" className="btn btn-orange btn-wrap">
                Preparar meu município
                <span className="sr-only"> pelo WhatsApp (abre em uma nova aba)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 08. CTA final */}
      <section className="band-navy tear-final" aria-labelledby="agora">
        <div className="section container">
          <div className="section-head narrow" data-reveal>
            <p className="eyebrow on-navy">ATENÇÃO, GESTORES MUNICIPAIS DE EDUCAÇÃO</p>
            <h2 id="agora" className="on-navy">
              O prazo está correndo. Não espere abril chegar para descobrir o que ainda falta.
            </h2>
            <p className="body">
              Seu município precisa transformar{" "}
              <strong>dados, diagnósticos, objetivos, metas, estratégias e documentos</strong> em um Plano conectado à
              sua realidade. E sua equipe não precisa começar esse processo do zero.
            </p>
          </div>
          <div className="split align-top">
            <div className="tear-fecho" data-reveal>
              <CheckList items={FECHO} />
            </div>
            <div className="stack" data-reveal>
              <Prazo onNavy />
              <p className="tear-subhead on-navy">Pare de procurar dados. Comece a construir o Plano.</p>
              <div className="actions">
                <a href={WHATSAPP} target="_blank" rel="noopener" className="btn btn-orange btn-wrap">
                  Quero preparar meu município agora
                  <span className="sr-only"> pelo WhatsApp (abre em uma nova aba)</span>
                </a>
                <a href={TEAR_URL} target="_blank" rel="noopener" className="btn btn-outline-light btn-wrap">
                  Acesse o Tear
                  {novaAba}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pattern-band" aria-hidden />
      </section>

      <Ponte>
        O Novo Contrato Social pede educação como esforço público e bem comum. Um plano municipal construído com a
        comunidade é onde isso começa.
      </Ponte>

      <FiosLigados slug="tear" />
    </>
  );
}
