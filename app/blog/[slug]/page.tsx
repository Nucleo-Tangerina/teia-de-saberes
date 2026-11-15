import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, publishedArticles } from "../../content";
import { CtaBlock, stagger } from "../../ui";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => publishedArticles.map((a) => ({ slug: a.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = publishedArticles.find((x) => x.slug === slug);
  return a ? { title: a.title, description: a.excerpt, alternates: { canonical: `/blog/${a.slug}` } } : {};
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const a = publishedArticles.find((x) => x.slug === slug);
  if (!a) notFound();
  const others = publishedArticles.filter((x) => x.slug !== slug).slice(0, 2);

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
                <Link href="/blog">Conversas que tecem</Link>
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
            {a.author} · <time dateTime={a.date}>{formatDate(a.date!)}</time>
          </p>
        </header>
        <div className="container">
          <div className="post-cover">
            <Image src={a.img} alt="" fill priority sizes="(max-width: 960px) 100vw, 1160px" />
          </div>
          <div className="post-body">
            {a.body!.map((p, i) => (
              <p key={i} className="body">
                {p}
              </p>
            ))}
            {a.refs?.length ? (
              <section aria-labelledby="referencias">
                <h2 id="referencias" className="eyebrow">
                  REFERÊNCIAS
                </h2>
                <ol>
                  {a.refs.map((r) => (
                    <li key={r} className="body">
                      {r}
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}
          </div>
        </div>
      </article>

      {others.length > 0 && (
        <section className="band-soft" aria-labelledby="relacionados">
          <div className="section container">
            <div className="section-head narrow" data-reveal>
              <p className="eyebrow">CONTINUE LENDO</p>
              <h2 id="relacionados">Outros artigos.</h2>
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
                      <span className="article-meta">
                        {o.author} · {formatDate(o.date!)}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBlock />
    </>
  );
}
