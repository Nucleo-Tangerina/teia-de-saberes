import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "../../content";
import { Badge, CtaBlock, stagger } from "../../ui";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => articles.map((a) => ({ slug: a.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  return a ? { title: a.title, description: a.excerpt, alternates: { canonical: `/blog/${a.slug}` } } : {};
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();
  const others = articles.filter((x) => x.slug !== slug);

  return (
    <>
      <article className="post">
        <header className="post-head container">
          <nav aria-label="Você está em" className="crumbs hero-in" style={stagger(0)}>
            <ol>
              <li>
                <Link href="/">Início</Link>
              </li>
              <li>
                <Link href="/blog">Conteúdos</Link>
              </li>
              <li>
                <span aria-current="page">{a.cat.charAt(0) + a.cat.slice(1).toLowerCase()}</span>
              </li>
            </ol>
          </nav>
          <span className="article-cat hero-in" style={stagger(1)}>
            {a.cat}
          </span>
          <h1 className="hero-in" style={stagger(2)}>
            {a.title}
          </h1>
          <p className="article-meta hero-in" style={stagger(3)}>
            Autoria · Data
          </p>
        </header>
        <div className="container">
          <div className="post-cover">
            <Image src={a.img} alt="" fill priority sizes="(max-width: 960px) 100vw, 1160px" />
          </div>
          <div className="post-body">
            <p className="lead">{a.excerpt}</p>
            <p className="body">
              Este artigo está em produção pela equipe da Teia de Saberes. Enquanto isso, conheça nossas soluções ou fale
              com nossa equipe sobre o tema.
            </p>
            <Badge>ARTIGO EM PRODUÇÃO · NÃO PUBLICAR SEM TEXTO, AUTORIA E DATA</Badge>
          </div>
        </div>
      </article>

      <section className="band-soft" aria-labelledby="relacionados">
        <div className="section container">
          <div className="section-head narrow" data-reveal>
            <p className="eyebrow">CONTINUE LENDO</p>
            <h2 id="relacionados">Outros conteúdos.</h2>
          </div>
          <ul className="articles two">
            {others.map((o, i) => (
              <li key={o.slug} data-reveal style={stagger(i)}>
                <Link href={`/blog/${o.slug}`} className="article">
                  <div className="article-photo">
                    <Image src={o.img} alt="" fill sizes="(max-width: 720px) 96px, 568px" />
                  </div>
                  <div className="article-body">
                    <span className="article-cat">{o.cat}</span>
                    <h3>{o.title}</h3>
                    <span className="article-meta">Autoria · Data</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
