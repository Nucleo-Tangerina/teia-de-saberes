import type { Metadata } from "next";
import { ContactForm } from "../interactive";
import { CheckList, Facts, FiosLigados, IconGrid, PageHero, Ponte, SectionHead } from "../ui";
import { Video } from "./video";

export const metadata: Metadata = {
  title: { absolute: "Palestras e Rodas de Conversa – Teia de Saberes" },
  description: "Diálogos presenciais ou online sobre os desafios reais da escola, à luz do Novo Contrato Social da Educação.",
  alternates: { canonical: "/palestras-rodas-de-conversa" },
};

const encontros = [
  { label: "Formato", value: "Presencial ou 100% online." },
  { label: "Duração", value: "Palestras de 1 a 2h30; rodas de conversa de 2 a 4 horas." },
  { label: "Público", value: "Educadores, gestores, estudantes, famílias e agentes públicos." },
  { label: "Metodologia", value: "Problematização, escuta ativa, construção coletiva e vínculo com o território." },
];

const problemas = [
  { icon: "graduation-cap", title: "Desmotivação de professores", text: "" },
  { icon: "users", title: "Baixa participação das famílias", text: "" },
  { icon: "school", title: "Desinteresse dos estudantes", text: "" },
  { icon: "monitor-play", title: "Desafios com a tecnologia", text: "" },
  { icon: "lightbulb", title: "Resistência à inovação", text: "" },
  { icon: "handshake", title: "Falta de articulação entre escola e comunidade", text: "" },
];

const temas = [
  "Novo Contrato Social para a Educação (UNESCO).",
  "Educação como bem comum e direito humano.",
  "Comunidade de Aprendizagem e transformação curricular.",
  "Mediação de conflitos e cultura de paz na escola.",
  "Análise do território educativo e equidade.",
  "Dispositivos inovadores de aprendizagem.",
  "Educação, saúde e políticas públicas integradas.",
  "Fortalecimento da escola como espaço democrático.",
];

const compromissos = [
  "Educação como bem comum.",
  "Valorização da escuta dos sujeitos e dos territórios.",
  "Formação para o pensamento crítico e democrático.",
  "Promoção da justiça social e da equidade educacional.",
  "Mobilização para ações concretas e sustentáveis.",
];

export default function Palestras() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Soluções", href: "/solucoes-educacionais" }, { label: "Palestras e Rodas de Conversa" }]}
        eyebrow="PALESTRAS E RODAS DE CONVERSA · PROEC"
        title="Conversas que começam pelos problemas reais da sua escola."
        lead="Diálogos para transformar a educação com justiça, escuta e compromisso social."
        img="/images/sol2.jpg"
        imgAlt="Profissionais da educação reunidos em uma roda de conversa"
      >
        <a href="#proposta" className="btn btn-orange">
          Agende uma palestra
        </a>
        <a href="#temas" className="btn btn-outline">
          Ver temas
        </a>
      </PageHero>

      <section className="section container" aria-labelledby="encontros">
        <SectionHead
          id="encontros"
          eyebrow="PROGRAMA ESCOLA E COMUNIDADE"
          title="Sobre os encontros."
          text="A Teia de Saberes convida escolas, redes municipais, universidades, fóruns e coletivos educacionais a um ciclo contínuo de diálogo por meio de palestras e rodas de conversa. Mais do que eventos, são espaços de reflexão crítica, formação cidadã e mobilização coletiva, que abordam os desafios da educação pública à luz do Novo Contrato Social para a Educação (UNESCO, 2021) e da Agenda 2030. Usamos metodologias participativas e experiências reais para construir sentido coletivo, renovar esperanças e fomentar ações educacionais sustentáveis e inclusivas."
        />
        <Facts items={encontros} />
        <p className="body encontros-note" data-reveal>
          Os encontros podem ser abertos ao público geral ou direcionados a grupos específicos, e sempre partem da
          realidade local.
        </p>
      </section>

      <section className="band-soft" aria-labelledby="problemas">
        <div className="section container">
          <SectionHead id="problemas" eyebrow="PONTO DE PARTIDA" title="Problemas que trabalhamos." />
          <IconGrid items={problemas} cols={3} />
        </div>
      </section>

      <section id="temas" className="section container split audience-block align-top" aria-labelledby="temas-title">
        <div className="stack" data-reveal>
          <p className="eyebrow">TEMAS</p>
          <h2 id="temas-title">Temas sugeridos.</h2>
          <p className="body">(ou adaptados ao interesse do município)</p>
        </div>
        <CheckList items={temas} />
      </section>

      <section className="band-soft" aria-labelledby="destaque">
        <div className="section container split feature">
          <Video />
          <div className="stack" data-reveal>
            <p className="eyebrow">PALESTRA EM DESTAQUE</p>
            <h2 id="destaque">
              “Liderando pelo Novo Contrato Social da Educação: como educar em um mundo frágil e incerto?”
            </h2>
            <p className="body">Vídeo de uma palestra do idealizador.</p>
          </div>
        </div>
      </section>

      <section className="section container split audience-block align-top" aria-labelledby="participar">
        <div className="stack" data-reveal>
          <p className="eyebrow">LOGÍSTICA</p>
          <h2 id="participar">Como participar.</h2>
        </div>
        <div className="stack" data-reveal>
          <p className="body">
            A Teia de Saberes apoia a logística, o material de divulgação, o formulário de inscrição e a coleta de
            feedback, cujo resultado é compartilhado com a organização.
          </p>
          <p className="body">
            Os encontros podem ocorrer em escolas, fóruns municipais ou regionais, congressos, seminários, semanas
            pedagógicas, ambientes comunitários e conselhos escolares.
          </p>
          <p className="body">
            A organização informa local, contato responsável e, se necessário, som, projetor e recursos de
            acessibilidade.
          </p>
        </div>
      </section>

      <section className="section-tail container split audience-block align-top" aria-labelledby="compromissos">
        <div className="stack" data-reveal>
          <p className="eyebrow">PRINCÍPIOS</p>
          <h2 id="compromissos">Compromissos que orientam os encontros.</h2>
        </div>
        <CheckList items={compromissos} />
      </section>

      <Ponte>
        O relatório se apresenta como um documento vivo, que se constrói no diálogo. As rodas são um jeito de fazer
        isso acontecer na sua cidade.
      </Ponte>

      <section id="proposta" className="band-soft" aria-labelledby="proposta-title">
        <div className="section container split form-split">
          <div className="stack" data-reveal>
            <p className="eyebrow">AGENDAMENTO</p>
            <h2 id="proposta-title">Vamos dialogar?</h2>
            <p className="body">Agende uma palestra ou roda de conversa.</p>
          </div>
          <ContactForm defaultInterest="Palestras e Rodas de Conversa" />
        </div>
      </section>

      <FiosLigados slug="palestras" />
    </>
  );
}
