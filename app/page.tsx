import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SolutionsRail } from "./interactive";
import { articles, audience, diffs, municipios, solutions, steps } from "./content";
import { Badge, CtaBlock, HeroThreads, IconGrid, ProjectPlaceholders, StepsThread, icons, stagger } from "./ui";

export default function Home() {
  const ticker = [...municipios, ...municipios];
  return (
    <>
        {/* 01 Hero */}
        <section className="hero" aria-labelledby="hero-title">
          <HeroThreads />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-in" style={stagger(0)}>
                ASSESSORIA •&nbsp;FORMAÇÃO<span className="eyebrow-sep"> •</span> <br className="eyebrow-br" />TRANSFORMAÇÃO EDUCACIONAL
              </p>
              <h1 id="hero-title" className="hero-in" style={stagger(1)}>
                Uma educação pública mais forte começa com uma gestão preparada.
              </h1>
              <p className="lead hero-in" style={stagger(2)}>
                Apoiamos Secretarias Municipais de Educação no planejamento, desenvolvimento e fortalecimento de suas
                redes de ensino, conectando conhecimento técnico, formação e soluções alinhadas aos desafios de cada
                território.
              </p>
              <div className="actions hero-in" style={stagger(3)}>
                <a href="#solucoes" className="btn btn-orange">
                  Conheça nossas soluções
                </a>
                <Link href="/contato" className="btn btn-outline">
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

        {/* Diferenciais */}
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

        {/* Municípios */}
        <section className="munis" aria-labelledby="munis-title">
          <div className="section-head center container" data-reveal>
            <p className="eyebrow">MUNICÍPIOS PARCEIROS</p>
            <h2 id="munis-title" className="h-sub">
              Municípios que estão transformando a educação da sua cidade
            </h2>
          </div>
          <div className="container">
            <div className="ticker" data-reveal>
              <ul className="ticker-track">
                {ticker.map((m, i) => (
                  <li key={`${m.name}-${i}`} aria-hidden={i >= municipios.length || undefined}>
                    <Image src={m.src} alt={`Brasão de ${m.name}`} width={140} height={84} />
                    <span className="muni-name">{m.name}</span>
                    <span className="muni-uf">{m.uf}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 02 Para quem */}
        <section className="section container split audience-block" aria-labelledby="para-quem">
          <div className="stack" data-reveal>
            <p className="eyebrow">PARA QUEM TRABALHAMOS</p>
            <h2 id="para-quem">Ao lado de quem faz a educação pública acontecer.</h2>
            <p className="body">
              Cada município possui sua própria realidade, desafios e oportunidades. Por isso, desenvolvemos ações que
              dialogam com as necessidades de quem planeja, coordena e transforma a educação todos os dias.
            </p>
            <Link href="/contato" className="link-arrow">
              Fale com nossa equipe
              <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
          <IconGrid items={audience} />
        </section>

        {/* 03 Quem somos */}
        <section className="section-tail container split about" aria-labelledby="quem-somos">
          <div className="about-photo" data-reveal="wipe">
            <Image
              src="/images/quem.jpg"
              alt="Equipe da Teia de Saberes em atividade"
              fill
              sizes="(max-width: 960px) 100vw, 536px"
            />
          </div>
          <div className="stack" data-reveal>
            <p className="eyebrow">QUEM SOMOS</p>
            <h2 id="quem-somos">Conectamos pessoas, conhecimentos e experiências para fortalecer a educação.</h2>
            <p className="body">
              A Teia de Saberes é uma organização dedicada à construção de caminhos para uma educação pública inclusiva,
              democrática e comprometida com o desenvolvimento das pessoas e das comunidades. Por meio de assessorias,
              mentorias, formações e projetos educacionais, buscamos aproximar o conhecimento acadêmico das necessidades
              concretas das redes de ensino.
            </p>
            <p className="body">
              Acreditamos que transformações consistentes são construídas coletivamente, com escuta, diálogo,
              planejamento e valorização dos profissionais da educação.
            </p>
            <div>
              <Link href="/quem-somos" className="btn btn-outline">
                Conheça nossa história
              </Link>
            </div>
          </div>
        </section>

        {/* 04 Soluções */}
        <section id="solucoes" className="band-soft" aria-labelledby="solucoes-title">
          <div className="section container">
            <div className="section-head narrow" data-reveal>
              <p className="eyebrow">SOLUÇÕES EDUCACIONAIS</p>
              <h2 id="solucoes-title">Soluções estratégicas para os desafios da educação municipal.</h2>
            </div>
            <SolutionsRail items={solutions} />
          </div>
        </section>

        {/* 05 Desafios */}
        <section className="band-navy" aria-labelledby="desafios">
          <div className="section container split challenges">
            <h2 id="desafios" data-reveal>
              Os desafios da sua rede de ensino precisam de soluções conectadas à realidade do município.
            </h2>
            <div className="stack" data-reveal style={stagger(1)}>
              <p className="body">
                Planejamento educacional, formação de profissionais, organização da gestão e desenvolvimento das escolas
                são questões que exigem conhecimento técnico, diálogo e acompanhamento. A Teia de Saberes propõe
                construir caminhos em conjunto com as equipes municipais, respeitando as características de cada rede.
              </p>
              <div>
                <Link href="/contato" className="btn btn-orange btn-wrap">
                  Vamos conversar sobre os desafios do seu município?
                </Link>
              </div>
            </div>
          </div>
          <div className="pattern-band" aria-hidden />
        </section>

        {/* 06 Metodologia */}
        <section className="section container" aria-labelledby="metodologia">
          <div className="section-head center" data-reveal>
            <p className="eyebrow">METODOLOGIA</p>
            <h2 id="metodologia">Cada transformação começa com a escuta.</h2>
          </div>
          <StepsThread steps={steps} />
        </section>

        {/* 07 Equipe */}
        <section className="band-soft" aria-labelledby="equipe">
          <div className="section container">
            <div className="split head-split" data-reveal>
              <div className="stack-tight">
                <p className="eyebrow">NOSSA EQUIPE</p>
                <h2 id="equipe">Pessoas que dedicam conhecimento e experiência à educação.</h2>
              </div>
              <div className="stack align-start">
                <p className="body">
                  Nossa atuação é construída a partir do encontro entre diferentes saberes, trajetórias profissionais e
                  experiências no campo educacional.
                </p>
                <Link href="/nossa-equipe" className="btn btn-outline">
                  Conheça nossos especialistas
                </Link>
              </div>
            </div>
            <ul className="team">
              {[0, 1, 2, 3].map((i) => (
                <li key={i} data-reveal style={stagger(i)}>
                  <div className="team-photo">
                    <Image src={`/images/team${i}.jpg`} alt="" fill sizes="(max-width: 720px) 240px, 272px" />
                  </div>
                  <div className="team-body">
                    <h3>Nome do especialista</h3>
                    <p className="team-role">Formação · Especialidade</p>
                    <p className="team-bio">Apresentação breve com trajetória comprovada.</p>
                  </div>
                </li>
              ))}
            </ul>
            <Badge>PERFIS A VALIDAR · DADOS REAIS DA EQUIPE</Badge>
          </div>
        </section>

        {/* 08 Projetos */}
        <section className="section container" aria-labelledby="projetos">
          <div className="split head-split" data-reveal>
            <div className="stack-tight">
              <p className="eyebrow">PROJETOS E EXPERIÊNCIAS</p>
              <h2 id="projetos">Conhecimento colocado em prática.</h2>
            </div>
            <p className="body">
              Cada projeto representa uma oportunidade de fortalecer profissionais, ampliar diálogos e construir novas
              possibilidades para a educação.
            </p>
          </div>
          <ProjectPlaceholders />
          <Badge>CASOS REAIS A VALIDAR · NÃO PUBLICAR SEM AUTORIZAÇÃO</Badge>
        </section>

        {/* 09 Conteúdos */}
        <section className="band-soft" aria-labelledby="conteudos">
          <div className="section container articles-section">
            <div className="section-head row" data-reveal>
              <div className="stack-tight narrow">
                <p className="eyebrow">CONTEÚDOS E PUBLICAÇÕES</p>
                <h2 id="conteudos">Reflexões e conhecimentos para quem transforma a educação.</h2>
              </div>
              <Link href="/blog" className="btn btn-outline">
                Acesse nossos conteúdos
              </Link>
            </div>
            <ul className="articles">
              {articles.map((a, i) => (
                <li key={a.slug} data-reveal style={stagger(i)}>
                  <Link href={`/blog/${a.slug}`} className="article">
                    <div className="article-photo">
                      <Image src={a.img} alt="" fill sizes="(max-width: 720px) 96px, 370px" />
                    </div>
                    <div className="article-body">
                      <span className="article-cat">{a.cat}</span>
                      <h3>{a.title}</h3>
                      <span className="article-meta">Autoria · Data</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 10 CTA final */}
        <CtaBlock />
    </>
  );
}
