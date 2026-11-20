import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { audience, CAMINHOS_OFERTA, TEAR_URL, diffs, fios, municipios, solutions, team, type FioKey } from "./content";
import { Variante } from "./aprovacao/variante";
import { HeroCarousel, type Slide } from "./hero-carousel";
import { MovimentoBlocks, hasMovimento } from "./movimento-blocks";
import { CheckList, CtaBlock, HeroThreads, IconGrid, SectionHead, icons, initials, stagger } from "./ui";

export const metadata: Metadata = {
  title: { absolute: "Teia de Saberes – Mentoria e formação para redes de ensino" },
  description:
    "Hub de soluções educacionais: assessoria, mentoria e formação para Secretarias de Educação, a partir do Novo Contrato Social da Educação (UNESCO).",
};

// Rebuild daily so past talks drop out of "Em movimento".
export const revalidate = 86400;

// Same hues as the hero thread nodes.
const fioColor: Record<FioKey, string> = { rede: "#ED8C32", escola: "#2679AD", pessoas: "#F02A89", trama: "#90D518" };

// Approval variations (issue #30): a = client wording, b = the same idea without implying UNESCO endorsement.
const abertura = (
  <Variante
    id="home-2050"
    inline
    opcoes={{
      a: "Somos um hub de soluções educacionais, um ponto de encontro de saberes, pessoas e projetos, voltado a ajudar a UNESCO a construir um Novo Contrato Social da Educação até 2050, ao lado das redes públicas de ensino.",
      b: "Somos um hub de soluções educacionais, um ponto de encontro de saberes, pessoas e projetos, que ajuda redes públicas de ensino a construir, até 2050, o Novo Contrato Social da Educação proposto pela UNESCO.",
    }}
  />
);

const slides: Slide[] = [
  // Opens on the featured course; the h1 stays on the Teia's own opening slide.
  {
    eyebrow: "FORMAÇÃO EM DESTAQUE · CAMINHOS DA INCLUSÃO",
    title: "Saiba como agir na prática diante dos desafios reais da Educação Especial.",
    text: "180 horas, 5 módulos, encontros ao vivo e certificado.",
    cta: { label: "Quero garantir minha vaga", href: CAMINHOS_OFERTA },
    primary: true,
    secondary: { label: "Conheça a formação", href: "/caminhos-da-inclusao" },
    img: "/caminhos/ana-paula-blazer.jpg",
    imgAlt: "Ana Paula Jorge sorrindo, de blazer magenta, com os braços apoiados em uma mesa de madeira",
  },
  // Tear right after the course, with the landing photo instead of the logo on a white box.
  {
    eyebrow: "PLANO MUNICIPAL DE EDUCAÇÃO · TEAR",
    title: "Tear: Plano Municipal de Educação",
    text: "Encontre em um só lugar os dados que sua equipe levaria dias ou semanas para localizar, organizar e analisar.",
    cta: { label: "Acesse o Tear", href: TEAR_URL, external: true },
    primary: true,
    secondary: { label: "Conheça o Tear", href: "/tear" },
    img: "/tear/gestora.png",
    imgAlt: "Gestora de educação segurando um tablet, ao lado de um mapa do Brasil e dos passos planejamento, dados, documentos e entrega",
  },
  {
    heading: "h1",
    eyebrow: "TEIA DE SABERES · HUB DE SOLUÇÕES EDUCACIONAIS",
    title: "Tecendo uma nova educação, em movimento.",
    text: abertura,
    cta: { label: "Fale com nossa equipe", href: "/contato" },
    primary: true,
    img: "/images/hero.jpg",
    imgAlt: "Gestores e educadores reunidos em volta de uma mesa de trabalho",
  },
  ...solutions
    .filter((s) => s.slug !== "inclusao" && s.slug !== "tear")
    .map((s) => ({
      eyebrow: fios.find((f) => f.key === s.fio)!.nome,
      title: s.title,
      text: s.phrase,
      cta: { label: "Saiba mais", href: s.href },
      img: s.img,
      fit: s.fit,
    })),
];

const compromissos = [
  "Educação como bem comum e conhecimento como patrimônio da humanidade.",
  "Justiça social, equidade e inclusão em todos os territórios.",
  "Aprendizagem ao longo da vida e em todos os espaços.",
  "Transformação curricular e pedagógica a partir da realidade dos sujeitos.",
  "Compromisso coletivo com futuros sustentáveis.",
];

function HeroFoto() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <HeroThreads />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-in" style={stagger(0)}>
            TEIA DE SABERES<span className="eyebrow-sep"> ·</span> <br className="eyebrow-br" />
            HUB DE SOLUÇÕES EDUCACIONAIS
          </p>
          <h1 id="hero-title" className="hero-in" style={stagger(1)}>
            Tecendo uma nova educação, em movimento.
          </h1>
          <p className="lead hero-in" style={stagger(2)}>
            {abertura}
          </p>
          <div className="actions hero-in" style={stagger(3)}>
            <Link href="/contato" className="btn btn-orange">
              Fale com nossa equipe
            </Link>
          </div>
        </div>
        <div className="hero-media">
          <div className="hero-photo">
            <Image
              src="/images/hero.jpg"
              alt="Gestores e educadores reunidos em volta de uma mesa de trabalho"
              fill
              priority
              sizes="(max-width: 960px) 100vw, 560px"
            />
          </div>
          <div className="pattern-tile" aria-hidden />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* 1 Abertura: a = hero com foto única (padrão), b = carrossel de soluções em tema claro */}
      <Variante id="home-topo" opcoes={{ a: <HeroFoto />, b: <HeroCarousel slides={slides} tema="claro" /> }} />

      {/* 2 Manifesto */}
      <section className="band-navy" aria-labelledby="manifesto">
        <div className="section container narrow-col">
          <div className="stack" data-reveal>
            <p className="eyebrow on-navy">MANIFESTO</p>
            <h2 id="manifesto" className="on-navy">
              Tecer é juntar fios que, sozinhos, não seguram nada.
            </h2>
            <p className="body">Cada professor, cada família, cada estudante e cada gestor é um fio.</p>
            <p className="body">
              O relatório da UNESCO nos convida a reequilibrar nossas relações: das pessoas entre si, com o planeta e com a
              tecnologia. Isso não se decreta; se tece, escola por escola, cidade por cidade.
            </p>
            <p className="body">
              Por isso a nossa teia nunca está pronta. Como o próprio relatório, ela é um documento vivo: cresce com cada
              rede que entra, e aprende com ela.
            </p>
          </div>
        </div>
        <div className="pattern-band" aria-hidden />
      </section>

      {/* 3 Missão e visão */}
      <section className="section container stack" aria-label="Missão e visão">
        <p className="lead" data-reveal>
          Na Teia de Saberes, acreditamos que a educação é mais do que um direito: é um bem comum, e o conhecimento que ela
          cultiva é patrimônio comum da humanidade.
        </p>
        <div className="mv-panels">
          <div className="mv-panel" data-reveal style={stagger(0)}>
            <h2 className="eyebrow">MISSÃO</h2>
            <p className="body">
              Ajudar as redes de ensino a construir, na prática, o Novo Contrato Social para a Educação proposto pela UNESCO
              (2021), em diálogo com a Agenda 2030: uma educação inclusiva, justa, democrática e comprometida com a
              sustentabilidade da vida no planeta.
            </p>
          </div>
          <div className="mv-panel" data-reveal style={stagger(1)}>
            <h2 className="eyebrow">VISÃO</h2>
            <p className="body">
              Ser uma teia que leva o Novo Contrato Social da Educação a cada vez mais municípios brasileiros, com redes que
              aprendem juntas, escolas que cooperam com suas comunidades e gestão pública que garante o direito à educação
              ao longo da vida.
            </p>
          </div>
        </div>
        <p className="body" data-reveal>
          <strong>O que fazemos:</strong> ações formativas, assessorias e projetos que fortalecem a gestão pública
          educacional, a formação docente continuada e a transformação curricular, sempre a partir dos desafios das redes
          de ensino e com o protagonismo das comunidades escolares.
        </p>
      </section>

      {/* 4 Os quatro fios */}
      <section className="band-soft" aria-labelledby="fios-title">
        <div className="section container">
          <SectionHead id="fios-title" eyebrow="OS QUATRO FIOS" title="Escolha o fio por onde começar." />
          {/* data-reveal="thread": the list stays visible; a thread stitches the four nodes as it enters */}
          <ul className="fio-cards" data-reveal="thread">
            {fios.map((f, i) => (
              <li key={f.key} data-reveal style={stagger(i)}>
                <Link
                  href={`/solucoes-educacionais?fio=${f.key}`}
                  className="fio-card"
                  style={{ "--accent": fioColor[f.key] } as React.CSSProperties}
                >
                  <span className="fio-dot" aria-hidden />
                  <h3>{f.nome}</h3>
                  <p className="fio-pergunta">{f.pergunta}</p>
                  <p>{f.resumo}</p>
                  <p className="fio-ponte">{f.ponte}</p>
                  <span className="link-arrow">
                    Ver soluções<span className="sr-only"> do fio {f.nome}</span>
                    <ArrowRight size={18} aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Formação em destaque: Caminhos da Inclusão (curso vendido a pessoas, por isso com preço) */}
      <section className="section container destaque-wrap" aria-labelledby="destaque-title">
        <div className="destaque" data-reveal>
          <Image
            src="/caminhos/ana-paula-blazer.jpg"
            alt="Ana Paula Jorge sorrindo, de blazer magenta, com os braços apoiados em uma mesa de madeira"
            width={880}
            height={964}
            sizes="(max-width: 960px) 100vw, 520px"
            className="destaque-photo"
          />
          <div className="stack">
            <p className="eyebrow">FORMAÇÃO EM DESTAQUE</p>
            <h2 id="destaque-title">Caminhos da Inclusão</h2>
            <p className="lead">Saiba como agir na prática diante dos desafios reais da Educação Especial.</p>
            <ul className="tags">
              {["180h", "5 módulos", "Encontros ao vivo", "Certificado"].map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="destaque-price">12x de R$20,37 ou R$197 à vista · Apenas 60 vagas</p>
            <div className="actions">
              <a href={CAMINHOS_OFERTA} className="btn btn-orange">
                Quero garantir minha vaga
              </a>
              <Link href="/caminhos-da-inclusao" className="btn btn-outline">
                Conheça a formação
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Cinco compromissos */}
      <section className="section container split audience-block align-top" aria-labelledby="compromissos">
        <div className="stack" data-reveal>
          <p className="eyebrow">COMPROMISSOS</p>
          <h2 id="compromissos">Cinco compromissos.</h2>
        </div>
        <CheckList items={compromissos} />
      </section>

      {/* 6 Diferenciais */}
      <div className="container">
        <ul className="diffs" data-reveal>
          {diffs.map((d) => {
            const Icon = icons[d.icon];
            return (
              <li key={d.title}>
                <span className="icon-dot">
                  <Icon size={22} aria-hidden />
                </span>
                <div>
                  <h2 className="diff-title">{d.title}</h2>
                  <p>{d.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 7 Municípios parceiros */}
      <section className="section container" aria-labelledby="munis-title">
        <SectionHead
          id="munis-title"
          center
          eyebrow="MUNICÍPIOS PARCEIROS"
          title="Municípios que estão transformando a educação da sua cidade"
        />
        {/* a = faixa rolante, como antes da reformulação (padrão); b = grade sem repetição */}
        <Variante
          id="home-munis"
          opcoes={{
            a: (
              <div className="ticker" data-reveal>
                {/* the list repeats so the strip loops without a seam; the copy is hidden from screen readers */}
                <ul className="ticker-track">
                  {[...municipios, ...municipios].map((m, i) => (
                    <li key={`${m.name}-${i}`} aria-hidden={i >= municipios.length || undefined}>
                      <Image src={m.src} alt={`Brasão de ${m.name}`} width={140} height={84} />
                      <span className="muni-name">{m.name}</span>
                      <span className="muni-uf">{m.uf}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ),
            b: (
              <ul className="muni-grid">
                {municipios.map((m, i) => (
                  <li key={m.name} data-reveal style={stagger(i % 6)}>
                    <Image src={m.src} alt={`Brasão de ${m.name}`} width={140} height={84} />
                    <span className="muni-name">{m.name}</span>
                    <span className="muni-uf">{m.uf}</span>
                  </li>
                ))}
              </ul>
            ),
          }}
        />
      </section>

      {/* 8 Para quem trabalhamos */}
      <section className="section-tail container" aria-labelledby="para-quem">
        <SectionHead id="para-quem" eyebrow="PARA QUEM TRABALHAMOS" title="Para quem trabalhamos." />
        <IconGrid items={audience} cols={4} />
      </section>

      {/* Equipe (pedido do cliente, entre o 8 e o 9) */}
      <section className="band-soft" aria-labelledby="equipe">
        <div className="section container">
          <SectionHead id="equipe" eyebrow="EQUIPE" title="Quem tece com você" />
          <div className="stack">
            <ul className="profiles">
              {team.map((p, i) => (
                <li key={p.name} className="profile" data-reveal style={stagger(i)}>
                  <span className="monogram" style={{ "--accent": p.accent } as React.CSSProperties} aria-hidden>
                    {initials(p.name)}
                  </span>
                  <div className="profile-body">
                    <span className="profile-role">{p.role}</span>
                    <h3>{p.name}</h3>
                  </div>
                </li>
              ))}
            </ul>
            <div>
              <Link href="/nossa-equipe" className="btn btn-outline">
                Conheça a equipe
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9 Em movimento: só aparece com itens */}
      {hasMovimento() && (
        <section aria-labelledby="movimento">
          <div className="section container">
            <SectionHead id="movimento" eyebrow="EM MOVIMENTO" title="Em movimento" text="Agenda, turmas e conversas" />
          </div>
          <MovimentoBlocks limit={3} />
          <div className="container">
            <Link href="/em-movimento" className="link-arrow">
              Ver tudo
              <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </section>
      )}

      {/* 10 Chamada final */}
      <CtaBlock
        title="Qual fio começa a sua teia?"
        text="Vamos juntos reimaginar os futuros da educação e tecer caminhos de esperança."
        label="Fale com nossa equipe"
      />
    </>
  );
}
