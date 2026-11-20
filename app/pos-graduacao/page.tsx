import type { Metadata } from "next";
import Link from "next/link";
import { Variante } from "../aprovacao/variante";
import { CheckList, CtaBlock, Facts, FiosLigados, PageHero, Ponte, SectionHead, initials, stagger } from "../ui";

export const metadata: Metadata = {
  title: { absolute: "Pós-graduação para o Novo Contrato Social – Teia de Saberes" },
  description:
    "Especialização lato sensu de 360 horas, híbrida, para gestores e educadores, com foco em políticas públicas e Comunidades de Aprendizagem.",
  alternates: { canonical: "/pos-graduacao" },
};

// The partner institution and its accreditation stay off the page until the client confirms them.
const facts = [
  { label: "Modalidade", value: "Especialização lato sensu" },
  { label: "Carga horária", value: "360 horas" },
  { label: "Duração", value: "12 meses" },
  { label: "Formato", value: "Híbrido, pelo Microsoft Teams" },
];

const learn = [
  "Criar uma abordagem educacional que seja de fato colaborativa, democrática e inovadora.",
  "Reafirmar o direito à educação ao longo da vida vinculando o direito à educação ao direito à informação, à ciência, à participação e à conectividade.",
  "Construir uma relação baseada no encontro entre pessoas em busca de aprendizado profissional e humano.",
  "Reafirmar a educação como um bem público.",
  "Examinar as formas como construímos, mantemos e melhoramos a educação, bem como quem está envolvido nesse esforço coletivo.",
  "Requalificar a atuação profissional na gestão e docência na educação.",
  "Examinar como a aprendizagem é organizada e quais os projetos possíveis para nossos sistemas educacionais.",
  "Analisar como organizamos os espaços de aprendizagem formais e informais.",
];

const modules = [
  { name: "Contextos da educação", question: "O que foi o contrato social da educação?", hours: 80, accent: "#2679AD" },
  { name: "Reinventando a educação", question: "Por que criar um contrato social para educação?", hours: 80, accent: "#ED8C32" },
  { name: "Reimaginando a educação", question: "Como criar um novo contrato social para educação?", hours: 80, accent: "#F02A89" },
  { name: "Construindo futuros educacionais", question: "Quais futuros possíveis podemos criar para educação?", hours: 80, accent: "#90D518" },
  {
    name: "Construção de um Novo Contrato Social da Educação",
    question: "Como construir uma educação para democracia?",
    hours: 40,
    accent: "#8F2DE2",
  },
];
const totalHours = modules.reduce((sum, m) => sum + m.hours, 0);

const criteria = [
  { label: "Frequência mínima", value: "75% das aulas" },
  { label: "Aprovação", value: "70% de aproveitamento, em escala de 100 pontos" },
  { label: "Carga horária mensal", value: "30 h/a, sendo 50% síncrona" },
  { label: "Trabalho final", value: "Entregue até 3 meses após o encerramento das aulas" },
];

const receive = [
  "Plataforma digital com aulas síncronas e assíncronas.",
  "Corpo docente com mestres e doutores em políticas públicas e metodologias educacionais.",
  "Tutores e roteiros de estudo ajustados às necessidades locais.",
  "Bibliografia e ferramentas de gestão educacional.",
];

const faculty = [
  { name: "Ricardo José de Azevedo Marinho", degree: "Pós-doutor em Políticas Públicas e Formação Humana, UERJ", accent: "#2679AD" },
  { name: "Tiago Martins Simões", degree: "Doutor em História, FGV", accent: "#90D518" },
  { name: "Vagner Gomes de Souza", degree: "Mestre em Ciências Sociais, UFRRJ", accent: "#8F2DE2" },
  { name: "José Márcio Figueira Júnior", degree: "Mestre e doutorando em Ciências Sociais, UFRRJ", accent: "#ED8C32" },
  { name: "Pablo De Las Torres Spinelli Fonseca", degree: "Mestre em Ciências Sociais, UFRRJ", accent: "#F02A89" },
  { name: "Pacelli Henrique Silva Lopes", degree: "Mestre em História, UNIVERSO", accent: "#90D518" },
  { name: "Laura Ituassu", degree: "Mestre em Administração, FEAD-MG", accent: "#8F2DE2" },
];

export default function PosGraduacao() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Soluções", href: "/solucoes-educacionais" }, { label: "Pós-graduação" }]}
        eyebrow="PÓS-GRADUAÇÃO"
        title="Formação para o Novo Contrato Social na Educação"
        lead="Quem educa também pesquisa e produz conhecimento."
        img="/images/sol3.jpg"
        imgAlt="Educadora estudando com notebook"
      >
        <Link href="/contato?interesse=pos" className="btn btn-orange">
          Solicite uma proposta
        </Link>
        <a href="#modulos" className="btn btn-outline">
          Ver módulos
        </a>
      </PageHero>

      <div className="container facts-wrap">
        <Facts items={facts} />
      </div>

      <section className="section container split audience-block align-top" aria-labelledby="curso-title">
        <div className="stack" data-reveal>
          <p className="eyebrow">O CURSO</p>
          <h2 id="curso-title">Teoria e prática para os desafios da educação.</h2>
        </div>
        <div className="stack" data-reveal>
          <p className="body">
            Especialização lato sensu de 360 horas, em 12 meses, com aulas híbridas, síncronas e assíncronas, pelo
            Microsoft Teams, em horários flexíveis. Tutoria personalizada e coordenação do Prof. Dr. Ricardo Marinho,
            especialista em Políticas Públicas e Formação Humana.
          </p>
          <p className="body">
            O curso integra teoria e prática com Comunidades de Aprendizagem, Problematização e Trabalho de Projetos, e
            inclui o preparo de instrumentos de gestão (PPA, LDO, LOA e Plano Municipal de Educação).
          </p>
        </div>
      </section>

      <section className="band-soft" aria-labelledby="para-quem">
        <div className="section container split audience-block align-top">
          <div className="stack" data-reveal>
            <p className="eyebrow">PARA QUEM É</p>
            <h2 id="para-quem">Para profissionais da educação.</h2>
          </div>
          <div className="stack" data-reveal>
            <p className="body">
              O curso destina-se aos profissionais da educação e demais interessados portadores de diploma de graduação
              interessados na temática da Educação. Serão formados profissionais especialistas com perfil
              crítico-reflexivo habilitado a atuar no ensino, na pesquisa, na extensão, na organização e gestão de
              projetos educacionais para a produção e difusão do conhecimento e práticas exemplares.
            </p>
          </div>
        </div>
      </section>

      <Variante
        id="pos-porque"
        opcoes={{
          a: (
            <section className="section container split audience-block align-top" aria-labelledby="porque">
              <div className="stack" data-reveal>
                <p className="eyebrow">POR QUE ESTA PÓS-GRADUAÇÃO</p>
                <h2 id="porque">Educação é patrimônio da humanidade e bem comum e público.</h2>
              </div>
              <div className="stack" data-reveal>
                <p className="body">
                  A educação brasileira vive uma crise profunda, acelerada pela pandemia de COVID-19: o vínculo entre
                  escola, estudantes e comunidade se enfraquece, e muitos educadores adoecem ou desistem da profissão.
                  Acreditamos que é em cenários de crise que se constroem soluções inovadoras capazes de transformar a
                  realidade.
                </p>
                <p className="body">
                  Por isso, a pós-graduação forma novos líderes educacionais capazes de construir, em rede, um movimento
                  de transformação educacional pautado em valores republicanos e democráticos, ajudando a colocar em
                  prática os 17 Objetivos de Desenvolvimento Sustentável (ODS). Ao final, os educandos estarão
                  preparados para transformar estruturas educacionais existentes e liderar processos de inovação nas
                  redes públicas e privadas.
                </p>
              </div>
            </section>
          ),
          b: null,
        }}
      />

      <section className="section container split audience-block align-top" aria-labelledby="aprender">
        <div className="stack" data-reveal>
          <p className="eyebrow">O QUE VOCÊ VAI APRENDER</p>
          <h2 id="aprender">O que você vai aprender.</h2>
        </div>
        <CheckList items={learn} />
      </section>

      <section id="modulos" className="band-soft" aria-labelledby="modulos-title">
        <div className="section container">
          <SectionHead
            id="modulos-title"
            eyebrow="MÓDULOS"
            title="Cinco módulos, uma pergunta em cada."
            text={`Carga horária total de ${totalHours} horas.`}
          />
          <ol className="modulos">
            {modules.map((m, i) => (
              <li
                key={m.name}
                data-reveal
                style={{ ...stagger(i), "--accent": m.accent } as React.CSSProperties}
              >
                <span className="step-num" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{m.name}</h3>
                  <p>{m.question}</p>
                </div>
                <span className="modulo-horas">{m.hours} horas</span>
              </li>
            ))}
          </ol>
          <p className="modulos-total" data-reveal>
            Total <strong>{totalHours} horas</strong>
          </p>
        </div>
      </section>

      <section className="section container" aria-labelledby="titulacao">
        <SectionHead id="titulacao" eyebrow="TITULAÇÃO" title="Critérios para a titulação." />
        <Facts items={criteria} />
        <Variante
          id="pos-avaliacao"
          opcoes={{
            a: (
              <div className="narrow-col stack" data-reveal>
                <p className="body">
                  O aproveitamento é avaliado em uma escala de 100 pontos, com pelo menos uma atividade durante o curso e
                  uma atividade de conclusão de cada módulo, segundo os critérios da coordenação. As avaliações podem ser
                  trabalhos dentro e fora da aula, escritos e orais, provas, exercícios e seminários, individuais ou em
                  grupo. O prazo para concluir o curso é de um ano.
                </p>
              </div>
            ),
            b: null,
          }}
        />
      </section>

      <section className="section container split audience-block align-top" aria-labelledby="trabalho-final">
        <div className="stack" data-reveal>
          <p className="eyebrow">TRABALHO FINAL</p>
          <h2 id="trabalho-final">Uma solução para a sua comunidade.</h2>
        </div>
        <div className="stack" data-reveal>
          <p className="body">
            Desenvolvimento de uma solução para os problemas que afligem as comunidades escolares e de aprendizagem,
            individual ou em equipe, com professor orientador, 6 h/a de orientação individual e banca.
          </p>
          <p className="body">Formatos aceitos: artigo, projeto científico, e-book, revista, livro digital, cartilha.</p>
        </div>
      </section>

      <section className="band-soft" aria-labelledby="recebem">
        <div className="section container split audience-block align-top">
          <div className="stack" data-reveal>
            <p className="eyebrow">ESTRUTURA</p>
            <h2 id="recebem">O que você e sua equipe recebem.</h2>
          </div>
          <CheckList items={receive} />
        </div>
      </section>

      <section className="section container" aria-labelledby="docentes">
        <SectionHead id="docentes" eyebrow="CORPO DOCENTE" title="Mestres e doutores em educação e políticas públicas." />
        <ul className="profiles">
          {faculty.map((p, i) => (
            <li key={p.name} className="profile" data-reveal style={stagger(i)}>
              <span className="monogram" style={{ "--accent": p.accent } as React.CSSProperties} aria-hidden>
                {initials(p.name)}
              </span>
              <div className="profile-body">
                <h3>{p.name}</h3>
                <p className="team-role">{p.degree}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Ponte>
        O relatório trata os professores como produtores de conhecimento, não como executores de pacotes. A formação
        parte dessa ideia.
      </Ponte>

      <CtaBlock
        title="Quer formar sua equipe?"
        text="Solicite uma proposta para levar a pós-graduação aos educadores da sua rede."
        label="Solicite uma proposta"
        href="/contato?interesse=pos"
      />

      <FiosLigados slug="pos" />
    </>
  );
}
