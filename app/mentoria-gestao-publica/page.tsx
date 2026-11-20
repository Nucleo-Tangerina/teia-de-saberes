import type { Metadata } from "next";
import { ContactForm } from "../interactive";
import { CheckList, Facts, Faq, FiosLigados, IconGrid, PageHero, Ponte, SectionHead, StepsThread } from "../ui";

export const metadata: Metadata = {
  title: { absolute: "Mentoria para Gestão Pública Educacional – Teia de Saberes" },
  description:
    "Programa de 12 meses para Secretarias de Educação: Plano Municipal de Educação, PPA, LDO e LOA, com acompanhamento quinzenal.",
  alternates: { canonical: "/mentoria-gestao-publica" },
};

const facts = [
  { label: "Duração", value: "12 meses" },
  { label: "Encontros", value: "Quinzenais, até 1h30" },
  { label: "Produto final", value: "Plano estratégico e operacional da gestão educacional" },
  { label: "Participantes", value: "Definidos pela rede" },
];

const objetivos = [
  "Implementar práticas pedagógicas inovadoras.",
  "Fortalecer a gestão democrática e participativa.",
  "Contribuir para um ensino inclusivo e de qualidade.",
  "Integrar os ODS e o Novo Contrato Social às políticas locais.",
  "Construir políticas educacionais alinhadas ao PME, PPA, LDO e LOA.",
];

const steps = [
  { accent: "#ED8C32", title: "Mês 1", text: "Seleção do público e planejamento inicial." },
  {
    accent: "#2679AD",
    title: "Meses 2 a 12",
    text: "Formação e acompanhamento contínuo, com Trabalho de Projetos e Problematização.",
  },
];

const conteudos = [
  "Planejamento educacional e orçamentário (PME, PPA, LDO, LOA).",
  "Práticas inclusivas e transformadoras.",
  "Currículo emancipador e territorializado.",
  "Liderança democrática e participativa.",
  "Educação como bem comum e direito humano (ODS 4).",
];

const areas = [
  {
    icon: "landmark",
    title: "Política pública e conteúdos",
    text: "Mentoria em política pública educacional, produção de materiais pedagógicos e capacitação pedagógica com metodologias ativas.",
  },
  {
    icon: "briefcase",
    title: "Financeira e prestação de contas",
    text: "Planejamento orçamentário, SIOPE, PNAE, PDDE, Educacenso e Caixa Escolar (UEX).",
  },
  {
    icon: "layers",
    title: "Técnica e sistemas",
    text: "PAR, SIGARP, SIMEC, CACS, CAE e programas do FNDE, com engenharia e obras para conformidade com as normas.",
  },
  {
    icon: "lightbulb",
    title: "Jurídica e inovação",
    text: "Consultoria sobre caixas escolares e questões legais; automação e soluções digitais para redes públicas.",
  },
];

const faq = [
  {
    q: "Quanto tempo dura a mentoria?",
    a: "É um programa de 12 meses, com encontros quinzenais de até 1h30, estudo, produção e acompanhamento.",
  },
  {
    q: "Quem participa da mentoria?",
    a: "A rede escolhe quem participa: diretores e especialistas, professores ou equipe da SME.",
  },
  {
    q: "Como o programa se organiza?",
    a: "No primeiro mês, seleção do público e planejamento inicial. Do segundo ao décimo segundo, formação e acompanhamento contínuo, com Trabalho de Projetos e Problematização.",
  },
  {
    q: "O que o município recebe ao final?",
    a: "O plano estratégico e operacional da gestão educacional do município, construído a partir dos desafios reais da rede.",
  },
  {
    q: "Quem conduz os encontros?",
    a: "Mestres e doutores em políticas públicas, história e ciências sociais.",
  },
  {
    q: "Como solicitar uma proposta?",
    a: "Preencha o formulário desta página com os dados do seu município. Nossa equipe entra em contato para conhecer a realidade da sua rede.",
  },
];

export default function MentoriaGestao() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Soluções", href: "/solucoes-educacionais" }, { label: "Mentoria para Gestão Pública" }]}
        eyebrow="MENTORIA"
        title="Planejar juntos o Novo Contrato Social do seu município."
        lead="Gestão democrática para redes que aprendem juntas."
        img="/images/sol0.jpg"
        imgAlt="Gestores reunidos em torno de uma mesa de trabalho"
      >
        <a href="#proposta" className="btn btn-orange">
          Solicite uma proposta
        </a>
        <a href="#como-funciona" className="btn btn-outline">
          Como funciona
        </a>
      </PageHero>

      <div className="container facts-wrap">
        <Facts items={facts} />
      </div>

      <section className="section container narrow-col" aria-label="Abertura">
        <p className="body" data-reveal>
          Em um mundo de desafios complexos e desigualdades agravadas, liderar com propósito na educação é garantir o
          direito de aprender com dignidade, justiça e equidade. A mentoria apoia gestores na construção de redes
          democráticas, participativas e sustentáveis, inspirada no Novo Contrato Social para a Educação (UNESCO) e na
          Agenda 2030.
        </p>
      </section>

      <section className="band-soft" aria-labelledby="objetivo">
        <div className="section container split audience-block align-top">
          <div className="stack" data-reveal>
            <p className="eyebrow">OBJETIVO</p>
            <h2 id="objetivo">Desenvolver lideranças educacionais capazes de transformar a rede.</h2>
          </div>
          <CheckList items={objetivos} />
        </div>
      </section>

      <section id="como-funciona" className="section container" aria-labelledby="como-funciona-title">
        <SectionHead
          id="como-funciona-title"
          eyebrow="COMO FUNCIONA"
          title="Um programa de 12 meses construído com a rede."
          text="Programa de 12 meses e 100 horas, entre encontros quinzenais de até 1h30, estudo, produção e acompanhamento."
          center
        />
        <StepsThread steps={steps} />
        <div className="narrow-col stack" data-reveal>
          <p className="body">
            A rede escolhe quem participa (diretores e especialistas, professores ou equipe da SME). O foco são os
            desafios reais da rede, conduzido por mestres e doutores em políticas públicas, história e ciências sociais.{" "}
            <strong>O produto final é o plano estratégico e operacional da gestão educacional do município.</strong>
          </p>
          <p className="body">Retorno ágil pelos canais diretos, em horário comercial.</p>
        </div>
      </section>

      <section className="band-soft" aria-labelledby="conteudos">
        <div className="section container split audience-block align-top">
          <div className="stack" data-reveal>
            <p className="eyebrow">CONTEÚDOS</p>
            <h2 id="conteudos">O que a mentoria trabalha com a rede.</h2>
          </div>
          <CheckList items={conteudos} />
        </div>
      </section>

      <section id="assessoria-tecnica" className="section container" aria-labelledby="assessoria-title">
        <SectionHead
          id="assessoria-title"
          eyebrow="ASSESSORIA TÉCNICA, PRESTAÇÃO DE CONTAS E CAIXA ESCOLAR"
          title="Recursos bem cuidados sustentam o bem comum."
          text="Apoiamos a Secretaria nos programas do FNDE (PAR, PDDE, PNAE e Educacenso), no monitoramento dos conselhos (CACS e CAE), no planejamento orçamentário e na prestação de contas (SIOPE) e na regularização e acompanhamento das caixas escolares (UEX). Nossa equipe reúne quatro áreas de apoio:"
        />
        <IconGrid items={areas} cols={2} />
        {/* second Ponte on the page (doc: assessoria has its own), so no Ponte component: its id would repeat */}
        <div className="ponte ponte-inline" data-reveal>
          <p className="eyebrow">PONTE COM O NOVO CONTRATO SOCIAL</p>
          <p className="ponte-text">Sem financiamento público bem cuidado, o bem comum não se sustenta.</p>
        </div>
      </section>

      <section className="section container narrow-col" aria-labelledby="faq">
        <SectionHead id="faq" eyebrow="PERGUNTAS FREQUENTES" title="Dúvidas sobre a mentoria." />
        <Faq items={faq} />
      </section>

      <Ponte>
        O relatório pede educação como esforço público e bem comum. Isso começa em um plano municipal construído com a
        comunidade e em um orçamento que o sustente.
      </Ponte>

      <section id="proposta" className="band-soft" aria-labelledby="proposta-title">
        <div className="section container split form-split">
          <div className="stack" data-reveal>
            <p className="eyebrow">SOLICITAÇÃO DE PROPOSTA</p>
            <h2 id="proposta-title">Vamos tecer juntos esse novo futuro?</h2>
            <p className="body">Solicite uma proposta. Nossa equipe vai conhecer a realidade do seu município.</p>
          </div>
          <ContactForm defaultInterest="Mentoria para Gestão Pública" />
        </div>
      </section>

      <FiosLigados slug="gestao" />
    </>
  );
}
