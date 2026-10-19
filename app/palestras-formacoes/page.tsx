import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "../interactive";
import { Badge, CheckList, CtaBlock, IconGrid, PageHero, SectionHead } from "../ui";

export const metadata: Metadata = {
  title: "Palestras e Formações",
  description:
    "Experiências formativas para profissionais da educação: gestão, currículo, inclusão e desafios contemporâneos das escolas.",
  alternates: { canonical: "/palestras-formacoes" },
};

const topics = [
  { icon: "landmark", title: "Gestão educacional", text: "Planejamento, organização e colaboração nas redes municipais." },
  { icon: "book-open", title: "Currículo", text: "Construção e desenvolvimento curricular a partir da realidade da rede." },
  { icon: "handshake", title: "Inclusão", text: "Práticas e mediação para uma escola que acolhe a todos." },
  { icon: "lightbulb", title: "Desafios contemporâneos das escolas", text: "Temas atuais que atravessam o cotidiano da educação pública." },
  { icon: "sprout", title: "Novo Contrato Social para a Educação", text: "Os princípios propostos pela UNESCO (2021) e seus caminhos para os municípios." },
  { icon: "users", title: "Comunidades de Aprendizagem", text: "Educação participativa, com estudantes protagonistas e a comunidade junto." },
];

const formats = [
  { icon: "mic", title: "Palestras", text: "Encontros para mobilizar equipes em torno de um tema." },
  { icon: "graduation-cap", title: "Formações continuadas", text: "Percursos para professores e equipes educacionais." },
  { icon: "monitor-play", title: "Cursos online com encontros ao vivo", text: "Módulos online combinados a encontros síncronos, com certificado." },
];

const audience = [
  "Secretários e equipes técnicas das Secretarias Municipais de Educação.",
  "Diretores, coordenadores e especialistas escolares.",
  "Professores da educação básica.",
  "Mediadores e profissionais que atuam na inclusão escolar.",
];

export default function Palestras() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Soluções", href: "/solucoes-educacionais" }, { label: "Palestras e Formações" }]}
        eyebrow="FORMAÇÃO"
        title="Palestras e Formações"
        lead="Experiências formativas para profissionais da educação, com temas relacionados à gestão, ao currículo, à inclusão e aos desafios contemporâneos das escolas."
        img="/images/sol2.jpg"
        imgAlt="Profissionais da educação em uma formação"
      >
        <a href="#proposta" className="btn btn-orange">
          Solicite uma proposta
        </a>
        <a href="#temas" className="btn btn-outline">
          Ver temas
        </a>
      </PageHero>

      <section id="temas" className="section container" aria-labelledby="temas-title">
        <SectionHead id="temas-title" eyebrow="CATÁLOGO DE TEMAS" title="Temas para formar quem transforma a educação." />
        <IconGrid items={topics} cols={3} />
        <Badge>CATÁLOGO EM CONSTRUÇÃO · TEMAS A VALIDAR</Badge>
      </section>

      <section className="band-soft" aria-labelledby="destaque">
        <div className="section container split feature">
          <div className="feature-media" data-reveal>
            <Image src="/images/caminhos-inclusao.png" alt="Caminhos da Inclusão: formação para mediadores, 180 horas" fill sizes="(max-width: 960px) 100vw, 536px" />
          </div>
          <div className="stack" data-reveal>
            <p className="eyebrow">FORMAÇÃO EM DESTAQUE</p>
            <h2 id="destaque">Caminhos da Inclusão.</h2>
            <p className="body">
              Formação de 180 horas para mediadores que atuam na inclusão escolar, com Ana Paula Jorge: 5 módulos, aulas
              online, encontros ao vivo e certificado.
            </p>
            <div>
              <a href="https://caminhoinclusao.teiadesaberes.com.br/" target="_blank" rel="noopener" className="btn btn-dark">
                Conheça a formação
                <ArrowRight size={18} aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="formatos">
        <SectionHead id="formatos" eyebrow="FORMATOS" title="Do encontro pontual ao percurso formativo." />
        <IconGrid items={formats} cols={3} />
      </section>

      <section className="section-tail container split audience-block align-top" aria-labelledby="publico">
        <div className="stack" data-reveal>
          <p className="eyebrow">PÚBLICO</p>
          <h2 id="publico">Para profissionais de toda a rede.</h2>
          <p className="body">
            As formações são conduzidas por especialistas da nossa equipe, com mestres e doutores em políticas públicas,
            história e ciências sociais.
          </p>
          <div>
            <Link href="/nossa-equipe" className="link-arrow">
              Conheça os palestrantes
              <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </div>
        <CheckList items={audience} />
      </section>

      <section id="proposta" className="band-soft" aria-labelledby="proposta-title">
        <div className="section container split form-split">
          <div className="stack" data-reveal>
            <p className="eyebrow">SOLICITAÇÃO DE PROPOSTA</p>
            <h2 id="proposta-title">Leve uma formação para a sua rede.</h2>
            <p className="body">
              Indique o tema, o público e o formato que interessam à sua rede. Nossa equipe retorna com possibilidades
              alinhadas às suas necessidades.
            </p>
          </div>
          <ContactForm defaultInterest="Palestras e Formações" />
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
