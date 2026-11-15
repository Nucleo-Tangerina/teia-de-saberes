import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { formatDate, publishedArticles } from "../content";
import { CtaBlock, PageHero, stagger } from "../ui";

export const metadata: Metadata = {
  title: "Conversas que tecem",
  description: "Artigos sobre gestão e educação pública.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  const items = [...publishedArticles].sort((a, b) => b.date!.localeCompare(a.date!));
  return (
    <>
      <PageHero
        crumbs={[{ label: "Conversas que tecem" }]}
        eyebrow="BLOG"
        title="Conversas que tecem"
        lead="Artigos sobre gestão e educação pública"
      />
      <section className="section container" aria-label="Lista de artigos">
        {items.length ? (
          <ul className="articles">
            {items.map((a, i) => (
              <li key={a.slug} data-reveal style={stagger(i)}>
                <Link href={`/blog/${a.slug}`} className="article">
                  <div className="article-photo">
                    <Image src={a.img} alt="" fill sizes="(max-width: 720px) 96px, 370px" />
                  </div>
                  <div className="article-body">
                    <span className="article-cat">{a.cat}</span>
                    <h3>{a.title}</h3>
                    <span className="article-meta">
                      {a.author} · {formatDate(a.date!)}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="empty" data-reveal>
            <p>Os primeiros artigos desta seção estão a caminho. Enquanto isso, conheça nossas soluções.</p>
            <Link href="/solucoes-educacionais" className="btn btn-outline btn-sm">
              Conheça nossas soluções
            </Link>
          </div>
        )}
      </section>
      <CtaBlock />
    </>
  );
}
