import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check, Lock, RotateCcw, ShieldCheck, X } from "lucide-react";
import { CAMINHOS_OFERTA } from "../content";
import {
  CheckList,
  CtaBlock,
  Facts,
  Faq,
  FiosLigados,
  IconGrid,
  PageHero,
  Ponte,
  SectionHead,
  StepsThread,
  stagger,
} from "../ui";

export const metadata: Metadata = {
  title: "Caminhos da Inclusão: Formação para Mediadores",
  description:
    "Formação de 160 horas para atuar na inclusão escolar com mais segurança. Com Ana Paula Jorge. Aulas online, encontros ao vivo e certificado.",
  alternates: { canonical: "/caminhos-da-inclusao" },
};

const OFERTA = CAMINHOS_OFERTA;
const ext = { target: "_blank", rel: "noopener" } as const;

const facts = [
  { label: "Formação completa", value: "160h" },
  { label: "Conteúdo estruturado", value: "5 módulos" },
  { label: "Estude no seu ritmo", value: "Aulas online" },
  { label: "Aprofundamento", value: "Encontros ao vivo" },
  { label: "De conclusão", value: "Certificado" },
];

const dores = [
  {
    icon: "circle-help",
    title: "Como devo agir?",
    text: "“Tenho conhecimento, mas ainda me sinto inseguro diante de determinadas situações.”",
  },
  { icon: "circle-help", title: "Será que estou fazendo certo?", text: "“Tenho medo de realizar uma mediação inadequada.”" },
  {
    icon: "circle-help",
    title: "Como transformar teoria em prática?",
    text: "“Estudei Educação Especial, mas sinto falta de orientações aplicáveis à rotina escolar.”",
  },
  {
    icon: "circle-help",
    title: "Estou realmente preparado?",
    text: "“Quero atuar na área, mas não quero chegar à escola sem saber como conduzir situações reais.”",
  },
];

const antes = [
  "Não sei como agir.",
  "Conhecimento fragmentado.",
  "Teoria sem aplicação.",
  "Insegurança na mediação.",
  "Dúvidas sobre o papel profissional.",
];

const depois = [
  "Entendo melhor como conduzir situações.",
  "Tenho uma formação estruturada.",
  "Consigo aproximar conhecimento e aplicação.",
  "Tenho mais direcionamento para atuar.",
  "Compreendo melhor minhas responsabilidades.",
];

const jornada = [
  { accent: "#ED8C32", title: "Conhecer", text: "" },
  { accent: "#2679AD", title: "Compreender", text: "" },
  { accent: "#F02A89", title: "Aplicar", text: "" },
  { accent: "#90D518", title: "Atuar", text: "" },
];

const accents = ["#2679AD", "#ED8C32", "#F02A89", "#90D518", "#8F2DE2"];

const pilares = [
  { name: "Fundamentos", text: "Entenda os princípios e a legislação que orientam a Educação Especial e Inclusiva." },
  { name: "Compreensão", text: "Conheça aspectos do desenvolvimento humano e diferentes deficiências." },
  { name: "Mediação", text: "Desenvolva conhecimentos relacionados à comunicação, interação e mediação." },
  { name: "Adaptação", text: "Entenda adaptações, estratégias, observação e registros." },
  { name: "Apoio", text: "Prepare-se para aspectos práticos relacionados ao cotidiano e à vida diária." },
];

const desenvolver = [
  { icon: "shield-check", title: "Segurança", text: "Mais clareza para lidar com situações da rotina escolar." },
  { icon: "lightbulb", title: "Compreensão", text: "Entender necessidades e particularidades dos alunos." },
  { icon: "messages-square", title: "Mediação", text: "Conhecer estratégias relacionadas à interação e inclusão." },
  { icon: "target", title: "Prática", text: "Aproximar conhecimento acadêmico da realidade." },
  { icon: "compass", title: "Direcionamento", text: "Compreender melhor o papel do profissional de apoio." },
  { icon: "graduation-cap", title: "Preparação", text: "Construir uma base mais sólida para atuação profissional." },
];

const perfis = [
  "Profissional de apoio",
  "Cuidador escolar",
  "Auxiliar de classe",
  "Educador",
  "Estudante de licenciatura",
  "Profissional interessado em Educação Especial",
];

const credenciais = [
  "Mestre e Doutoranda",
  "Professora da Rede Municipal",
  "Coordenação Municipal de Educação Especial",
  "Experiência no Ensino Superior",
  "Pesquisadora e palestrante",
  "Autora e organizadora de obras na área",
];

const depoimentos = [
  {
    src: "/images/caminhos/depoimento-maycon.webp",
    w: 578,
    h: 500,
    alt: "Print de WhatsApp: Maycon Eliseu Couto conta que o curso foi uma experiência muito enriquecedora e que hoje se sente preparado para ajudar crianças a se desenvolverem.",
  },
  {
    src: "/images/caminhos/depoimento-monique.webp",
    w: 590,
    h: 310,
    alt: "Print de comentário no Instagram de @monique3173: \"Estou fazendo o curso e falo, aproveitem porque é muito bom, nada cansativo, super dinâmico.\"",
  },
  {
    src: "/images/caminhos/depoimento-curso-otimo.webp",
    w: 840,
    h: 114,
    alt: "Print de WhatsApp: aluna escreve \"Curso ótimo e completo, amei\".",
  },
];

const formato = [
  { icon: "monitor-play", title: "Aulas gravadas", text: "Assista de acordo com sua disponibilidade." },
  { icon: "smartphone", title: "Aplicativo", text: "Leve sua formação com você." },
  { icon: "users", title: "Encontros ao vivo", text: "Encontros quinzenais para aprofundamento." },
  { icon: "clock", title: "160 horas", text: "Uma formação completa e estruturada." },
  { icon: "award", title: "Certificado", text: "Certificação conforme os requisitos da formação." },
];

// Hours as published on the course site. They add up to 150 h while the course says 160 h:
// no total is shown until the client confirms.
const modulos = [
  {
    name: "Fundamentos e Legislação",
    hours: "30h",
    text: "História da Educação Especial e Inclusiva, marco legal e legislações apresentadas na formação.",
  },
  {
    name: "Desenvolvimento Humano e Deficiências",
    hours: "40h",
    text: "Desenvolvimento humano, deficiência intelectual, transtornos de aprendizagem, TEA, níveis de suporte e comportamento.",
  },
  { name: "Comunicação e Mediação", hours: "30h", text: "Libras, Braille, CAA, mediação de conflitos, socialização e atividades." },
  {
    name: "Adaptação Curricular e Prática de Relatório",
    hours: "30h",
    text: "Adaptação de materiais, estratégias, vivências, observação e relatório.",
  },
  {
    name: "Técnicas de Apoio e Vida Diária",
    hours: "20h",
    text: "Higiene, alimentação, locomoção e demais aspectos apresentados no programa.",
  },
];

const inclui = [
  "Formação completa de 160 horas",
  "5 módulos",
  "Aulas gravadas",
  "Acesso pelo aplicativo",
  "Encontros ao vivo quinzenais",
  "Orientação relacionada ao portfólio",
  "Certificado de conclusão",
];

const faq = [
  {
    q: "Nunca trabalhei na área. Posso participar?",
    a: "Sim. A formação começa pelos fundamentos da Educação Especial e foi pensada também para quem quer entrar na área e chegar à escola mais preparado.",
  },
  {
    q: "Consigo conciliar com meu trabalho?",
    a: "Sim. As aulas são gravadas e podem ser assistidas quando você puder, pelo computador ou pelo aplicativo. Só os encontros ao vivo, quinzenais, têm data marcada.",
  },
  {
    q: "Já trabalho em escola. Essa formação também serve para mim?",
    a: "Sim. Profissionais de apoio, cuidadores, auxiliares e educadores encontram aqui uma base estruturada para aproximar o que já sabem das situações do dia a dia.",
  },
  {
    q: "Já tenho formação na área. Ainda faz sentido?",
    a: "A proposta da formação é aproximar a teoria das situações reais do cotidiano escolar, com foco em mediação, adaptação e apoio. Para quem já tem a base teórica, esse é justamente o ponto de aprofundamento.",
  },
  { q: "Como funcionam os encontros ao vivo?", a: "São encontros quinzenais para aprofundamento dos temas da formação." },
  {
    q: "Vou receber certificado?",
    a: "Sim. Ao concluir a formação conforme os requisitos definidos, você recebe o certificado de conclusão.",
  },
  { q: "A formação aborda TEA?", a: "Sim. O Módulo 02, Desenvolvimento Humano e Deficiências, aborda TEA e níveis de suporte." },
  { q: "Quais são as formas de pagamento?", a: "R$197 à vista ou em até 12x de R$20,36, no cartão, Pix ou boleto." },
  { q: "Como funciona a garantia?", a: "Você tem 30 dias de garantia, nas condições definidas para a oferta." },
];

function Trust({ items }: { items: readonly [typeof ShieldCheck, string][] }) {
  return (
    <ul className="trust-line">
      {items.map(([Icon, label]) => (
        <li key={label}>
          <Icon size={16} aria-hidden />
          {label}
        </li>
      ))}
    </ul>
  );
}

export default function CaminhosDaInclusao() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Soluções", href: "/solucoes-educacionais" }, { label: "Caminhos da Inclusão" }]}
        eyebrow="CAMINHOS DA INCLUSÃO · FORMAÇÃO PARA MEDIADORES"
        title="Saiba como agir na prática diante dos desafios reais da Educação Especial."
        lead="Prepare-se para atuar na inclusão escolar com mais segurança, conhecimento e direcionamento no Caminhos da Inclusão, uma formação para mediadores de 160 horas criada por quem vive a Educação Especial na prática."
        img="/images/caminhos/ana-hero.webp"
        imgAlt="Ana Paula Jorge sorrindo, de blazer magenta, com os braços apoiados em uma mesa de madeira"
        caption={
          <>
            <strong>Ana Paula Jorge</strong>
            <span className="sr-only"> — </span>Mestre e Doutoranda, professora da Rede Municipal
          </>
        }
        after={
          <Trust
            items={[
              [ShieldCheck, "Inscrição segura"],
              [RotateCcw, "30 dias de garantia"],
              [Lock, "Pagamento em ambiente seguro"],
            ]}
          />
        }
      >
        <a href={OFERTA} {...ext} className="btn btn-orange btn-wrap">
          Quero me preparar para atuar na Educação Especial
        </a>
        <a href="#conteudo" className="btn btn-outline">
          Ver conteúdo
        </a>
      </PageHero>

      <div className="container facts-wrap facts-5">
        <Facts items={facts} />
      </div>

      <section className="section container" aria-labelledby="dores">
        <SectionHead
          id="dores"
          eyebrow="SE VOCÊ QUER TRABALHAR COM INCLUSÃO, TALVEZ JÁ TENHA SENTIDO ISSO."
          title="Conhecer a teoria é diferente de saber o que fazer quando a situação acontece diante de você."
        />
        <IconGrid items={dores} cols={4} />
        <p className="body caminhos-after" data-reveal>
          Você não precisa aprender tudo isso sozinho, <strong>depois que os desafios aparecerem.</strong>
        </p>
      </section>

      <section className="band-navy" aria-labelledby="diferenca">
        <div className="section container">
          <h2 id="diferenca" className="on-navy" data-reveal>
            Existe uma diferença entre…
          </h2>
          <div className="diferenca" data-reveal>
            <div>
              <h3>Saber sobre inclusão.</h3>
              <p className="body">A teoria oferece a base.</p>
            </div>
            <p className="diferenca-sep">não é o mesmo que</p>
            <div>
              <h3>Saber como agir na inclusão.</h3>
              <p className="body">A prática transforma conhecimento em decisões, mediação e suporte no cotidiano escolar.</p>
            </div>
          </div>
          <p className="body diferenca-ponte" data-reveal>
            É nessa ponte entre conhecimento e atuação que nasce o <strong>Caminhos da Inclusão</strong>.
          </p>
        </div>
        <div className="pattern-band" aria-hidden />
      </section>

      <section className="section container" aria-labelledby="antes-depois">
        <SectionHead
          id="antes-depois"
          title="Da insegurança para uma atuação mais preparada."
          text="Não se trata apenas de concluir mais um curso. Trata-se de construir uma base para estar mais preparado quando alguém depender da sua atuação."
        />
        <div className="antes-depois">
          <div className="antes" data-reveal style={stagger(0)}>
            <h3>Antes</h3>
            <ul>
              {antes.map((t) => (
                <li key={t}>
                  <X size={18} aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="depois" data-reveal style={stagger(1)}>
            <h3>Depois</h3>
            <ul>
              {depois.map((t) => (
                <li key={t}>
                  <Check size={18} strokeWidth={3} aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="band-soft" aria-labelledby="jornada">
        <div className="section container">
          <SectionHead
            id="jornada"
            center
            title="Caminhos da Inclusão — Formação para Mediadores"
            text="Uma jornada de 160 horas criada para profissionais que desejam compreender os fundamentos da Educação Especial e aproximar esse conhecimento das situações encontradas no cotidiano escolar."
          />
          <StepsThread steps={jornada} />
        </div>
      </section>

      <section className="section container" aria-labelledby="pilares">
        <SectionHead id="pilares" title="Os 5 pilares da sua preparação." text="Uma jornada completa, do fundamento à atuação." />
        <ol className="modulos">
          {pilares.map((p, i) => (
            <li key={p.name} data-reveal style={{ ...stagger(i), "--accent": accents[i] } as React.CSSProperties}>
              <span className="step-num" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="caminhos-after" data-reveal>
          <a href="#conteudo" className="link-arrow">
            Ver conteúdo completo da formação
            <ArrowRight size={18} aria-hidden />
          </a>
        </p>
      </section>

      <section className="band-soft" aria-labelledby="desenvolver">
        <div className="section container">
          <SectionHead id="desenvolver" title="Mais do que conteúdo: o que essa formação busca desenvolver em você." />
          <IconGrid items={desenvolver} cols={3} />
        </div>
      </section>

      <section className="section container split audience-block align-top" aria-labelledby="para-quem">
        <div className="stack" data-reveal>
          <p className="eyebrow">PARA QUEM É</p>
          <h2 id="para-quem">Se você faz parte da Educação ou quer entrar nessa área, essa formação pode ser para você.</h2>
        </div>
        <div className="stack">
          <CheckList items={perfis} />
          <p className="body" data-reveal>
            Principalmente para quem acredita que inclusão exige mais do que boa intenção: <strong>exige preparação.</strong>
          </p>
        </div>
      </section>

      <section className="band-soft" aria-labelledby="ana">
        <div className="section container split about align-top">
          <div className="about-photo ana-photo" data-reveal="wipe">
            <Image
              src="/images/caminhos/ana-autora.webp"
              alt="Ana Paula Jorge, professora e coordenadora em Educação Especial"
              fill
              sizes="(max-width: 960px) 100vw, 536px"
            />
          </div>
          <div className="stack" data-reveal>
            <h2 id="ana">Ana Paula Jorge</h2>
            <p className="lead">
              Quem vai guiar você nessa jornada une experiência acadêmica e vivência prática na Educação Especial.
            </p>
            <p className="body">
              Mestre e Doutoranda, professora da Rede Municipal e atuante na Coordenação Municipal de Educação Especial.
              Pesquisadora, palestrante e autora de obras na área, une a pesquisa acadêmica à vivência diária da inclusão
              nas escolas.
            </p>
            <CheckList items={credenciais} />
          </div>
        </div>
        <div className="container section-tail">
          <figure className="quote" data-reveal>
            <blockquote>
              <p>
                “Não queremos entregar apenas teoria. Queremos ajudar você a estar mais preparado para a realidade da
                inclusão.”
              </p>
            </blockquote>
            <figcaption>— Caminhos da Inclusão</figcaption>
          </figure>
        </div>
      </section>

      <section className="section container" aria-labelledby="depoimentos">
        <SectionHead
          id="depoimentos"
          eyebrow="DEPOIMENTOS"
          title="Conhecimento que começa na formação e chega à prática."
          text="Alunos do Caminhos da Inclusão contam como foi a formação."
        />
        <ul className="prints">
          {depoimentos.map((d, i) => (
            <li key={d.src} data-reveal style={stagger(i)}>
              <Image src={d.src} alt={d.alt} width={d.w} height={d.h} sizes="(max-width: 720px) 100vw, 360px" />
            </li>
          ))}
        </ul>
      </section>

      <section className="band-soft" aria-labelledby="formato">
        <div className="section container">
          <SectionHead id="formato" title="Estude do seu jeito: uma formação completa que acompanha sua rotina." />
          <IconGrid items={formato} cols={3} />
        </div>
      </section>

      <section id="conteudo" className="section container" aria-labelledby="conteudo-title">
        <SectionHead
          id="conteudo-title"
          eyebrow="CONTEÚDO"
          title="Uma formação estruturada do fundamento à prática."
          text="Veja tudo o que você vai aprender."
        />
        <ol className="modulos">
          {modulos.map((m, i) => (
            <li key={m.name} data-reveal style={{ ...stagger(i), "--accent": accents[i] } as React.CSSProperties}>
              <span className="step-num" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>
                  <span className="sr-only">Módulo {String(i + 1).padStart(2, "0")}: </span>
                  {m.name}
                </h3>
                <p>{m.text}</p>
              </div>
              <span className="modulo-horas">{m.hours}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Price shown on purpose: the no-price rule covers solutions sold to municipalities; this course is sold to people. */}
      <section id="oferta" className="band-soft" aria-labelledby="oferta-title">
        <div className="section container split align-top oferta">
          <div className="stack" data-reveal>
            <h2 id="oferta-title">Sua inscrição no Caminhos da Inclusão inclui:</h2>
            <CheckList items={inclui} />
          </div>
          <div className="price-card" data-reveal>
            <h3>Caminhos da Inclusão — Formação para Mediadores</h3>
            <p className="price-vagas">
              Turma limitada · <strong>Apenas 60 vagas</strong>
            </p>
            <p className="price-main">
              <span>Hoje por</span>
              <strong>12x de R$20,36</strong>
            </p>
            <p className="price-alt">
              ou <strong>R$197</strong> à vista
            </p>
            <a href={OFERTA} {...ext} className="btn btn-orange btn-wrap price-btn">
              Quero garantir minha vaga
            </a>
            <Trust
              items={[
                [ShieldCheck, "Compra segura"],
                [RotateCcw, "30 dias de garantia"],
                [Lock, "Pagamento seguro"],
              ]}
            />
            <p className="price-pay">Formas de pagamento: Visa, Mastercard, American Express, Pix, Boleto</p>
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="garantia">
        <aside className="explainer" data-reveal>
          <h2 id="garantia">
            <ShieldCheck size={24} aria-hidden />
            Você tem 30 dias para conhecer a formação.
          </h2>
          <p className="garantia-sub">Sua decisão não precisa ser um salto no escuro.</p>
          <p className="body">
            Faça sua inscrição e conheça o conteúdo. Caso entenda que a formação não atende ao que procura, a garantia
            seguirá as condições definidas para a oferta.
          </p>
        </aside>
      </section>

      <section className="section-tail container" aria-labelledby="faq">
        <SectionHead id="faq" eyebrow="AINDA ESTÁ EM DÚVIDA?" title="Perguntas frequentes" />
        <Faq items={faq} />
      </section>

      <CtaBlock
        title="Quando chegar o momento de agir, você quer estar tentando descobrir o que fazer, ou quer estar mais preparado?"
        text="A inclusão acontece todos os dias dentro das escolas. Cada situação pode exigir compreensão, responsabilidade, conhecimento e preparo. Você não precisa esperar estar diante do desafio para começar a se preparar. Comece agora sua jornada no Caminhos da Inclusão. 12x de R$20,36 ou R$197 à vista."
        label="Quero começar minha formação"
        href={OFERTA}
        external
      />

      <Ponte>
        O relatório defende o direito à educação de qualidade ao longo da vida, para todas as pessoas. Uma escola que
        inclui cumpre esse contrato.
      </Ponte>

      <FiosLigados slug="inclusao" />
    </>
  );
}
