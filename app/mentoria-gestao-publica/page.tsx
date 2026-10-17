import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "../interactive";
import { Badge, CheckList, CtaBlock, Facts, Faq, IconGrid, PageHero, SectionHead, StepsThread } from "../ui";

export const metadata: Metadata = {
  title: "Mentoria para Gestão Pública Educacional",
  description:
    "Acompanhamento especializado para gestores e equipes técnicas das Secretarias Municipais de Educação, com foco em planejamento e fortalecimento das políticas educacionais.",
  alternates: { canonical: "/mentoria-gestao-publica" },
};

// Figures from the 2025 mentoring proposal; confirm the current offer.
const facts = [
  { label: "Formação", value: "100 horas" },
  { label: "Encontros", value: "Quinzenais, até 1h30" },
  { label: "Percurso", value: "12 etapas" },
  { label: "Participantes", value: "Definidos pela rede" },
];

const audience = [
  { icon: "landmark", title: "Gestores educacionais", text: "Secretários e equipes de gestão da Secretaria Municipal de Educação." },
  { icon: "school", title: "Diretores e especialistas escolares", text: "Para fortalecer a gestão democrática e a liderança escolar." },
  { icon: "briefcase", title: "Especialistas da SME", text: "Foco em aprimorar estratégias pedagógicas e de supervisão." },
  { icon: "users", title: "Professores", text: "Desenvolvimento de práticas inovadoras em sala de aula e incentivo ao protagonismo dos estudantes." },
];

const steps = [
  { accent: "#ED8C32", title: "Seleção dos participantes", text: "O município define o público prioritário conforme suas necessidades estratégicas." },
  { accent: "#2679AD", title: "Planejamento inicial", text: "Estruturação do percurso a partir da realidade e das metas da rede." },
  { accent: "#F02A89", title: "Formação e acompanhamento", text: "Encontros quinzenais com especialistas em educação, da 2ª à 12ª etapa." },
  { accent: "#90D518", title: "Planos estratégicos", text: "Apoio ao Plano Municipal de Educação e ao planejamento de PPA, LDO e LOA." },
];

const deliverables = [
  "Formação de 100 horas para o público definido pela rede municipal.",
  "Encontros focados em resolver desafios específicos da educação local e implementar melhorias práticas.",
  "Plano Municipal de Educação (PME) construído de forma colaborativa e alinhado às metas educacionais locais.",
  "Consultoria para planejamento orçamentário eficiente e transparente (PPA, LDO e LOA).",
  "Atendimento multicanal: WhatsApp, e-mail, telefone, videoconferências e visitas presenciais.",
];

const faq = [
  {
    q: "Quem participa da mentoria?",
    a: "A rede municipal tem liberdade para definir o público prioritário: diretores e especialistas escolares, especialistas da Secretaria ou professores.",
  },
  {
    q: "Como são os encontros?",
    a: "Quinzenais, com até 1h30 de duração, conduzidos por especialistas em educação e focados nos desafios específicos da rede.",
  },
  {
    q: "Qual é a duração e a carga horária?",
    a: "A proposta de 2025 prevê um percurso em 12 etapas e formação de 100 horas. Confirme com nossa equipe a configuração da oferta atual.",
  },
  {
    q: "Quais metodologias são utilizadas?",
    a: "Abordagens como a Metodologia de Trabalho de Projetos e a Metodologia da Problematização, adaptadas às demandas da rede.",
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
        title="Mentoria para Gestão Pública Educacional"
        lead="Acompanhamento especializado para gestores e equipes técnicas, com foco em planejamento, organização, desenvolvimento institucional e fortalecimento das políticas educacionais."
        img="/images/sol0.jpg"
        imgAlt="Gestores reunidos em torno de uma mesa de trabalho"
      >
        <a href="#proposta" className="btn btn-orange">
          Solicite uma proposta
        </a>
        <a href="#etapas" className="btn btn-outline">
          Ver etapas
        </a>
      </PageHero>

      <div className="container facts-wrap">
        <Facts items={facts} />
        <Badge>DURAÇÃO E CARGA HORÁRIA DA OFERTA ATUAL A CONFIRMAR</Badge>
      </div>

      <section className="section container split audience-block" aria-labelledby="publico">
        <div className="stack" data-reveal>
          <p className="eyebrow">PÚBLICO-ALVO</p>
          <h2 id="publico">Cada município decide quem participa.</h2>
          <p className="body">
            A formação se adapta às prioridades estratégicas da rede: da equipe da Secretaria às lideranças escolares e
            aos professores interessados em liderar a transformação educacional.
          </p>
        </div>
        <IconGrid items={audience} />
      </section>

      <section className="band-navy" aria-labelledby="objetivo">
        <div className="section container split challenges">
          <h2 id="objetivo" data-reveal>
            Desenvolver lideranças educacionais capazes de transformar a rede.
          </h2>
          <div className="stack" data-reveal>
            <p className="body">
              O objetivo é formar lideranças capazes de implementar práticas inovadoras, fortalecer a gestão democrática
              e contribuir para um ensino mais inclusivo e eficaz.
            </p>
            <p className="body">
              Os desafios de planejamento, organização da gestão e desenvolvimento das escolas são trabalhados com
              conhecimento técnico, diálogo e acompanhamento, a partir das características de cada rede.
            </p>
          </div>
        </div>
        <div className="pattern-band" aria-hidden />
      </section>

      <section id="etapas" className="section container" aria-labelledby="etapas-title">
        <SectionHead id="etapas-title" eyebrow="ETAPAS" title="Um percurso construído com a rede." center />
        <StepsThread steps={steps} />
      </section>

      <section className="band-soft" aria-labelledby="entregas">
        <div className="section container split audience-block align-top">
          <div className="stack" data-reveal>
            <p className="eyebrow">ENTREGÁVEIS</p>
            <h2 id="entregas">O que a mentoria entrega ao município.</h2>
            <p className="body">
              Metodologias como a de Trabalho de Projetos e a da Problematização orientam o trabalho, sempre adaptadas às
              demandas da rede educacional.
            </p>
            <div>
              <Link href="/nossa-equipe" className="link-arrow">
                Conheça os especialistas
                <ArrowRight size={18} aria-hidden />
              </Link>
            </div>
          </div>
          <CheckList items={deliverables} />
        </div>
      </section>

      <section className="section container narrow-col" aria-labelledby="faq">
        <SectionHead id="faq" eyebrow="PERGUNTAS FREQUENTES" title="Dúvidas sobre a mentoria." />
        <Faq items={faq} />
      </section>

      <section id="proposta" className="band-soft" aria-labelledby="proposta-title">
        <div className="section container split form-split">
          <div className="stack" data-reveal>
            <p className="eyebrow">SOLICITAÇÃO DE PROPOSTA</p>
            <h2 id="proposta-title">Vamos conversar sobre a educação do seu município?</h2>
            <p className="body">
              Conte um pouco sobre a sua rede de ensino. Nossa equipe vai conhecer a realidade do município e apresentar
              possibilidades de atuação alinhadas às suas necessidades.
            </p>
          </div>
          <ContactForm defaultInterest="Mentoria para Gestão Pública" />
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
