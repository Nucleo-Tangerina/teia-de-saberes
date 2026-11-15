// The four "Em movimento" blocks, fed by app/movimento.ts. Empty blocks are not rendered.
import Image from "next/image";
import Link from "next/link";
import { formatDate, publishedArticles } from "./content";
import { novidades, palestras, turmas } from "./movimento";
import { SectionHead, stagger } from "./ui";

const solucaoLabel = { pos: "PÓS-GRADUAÇÃO", olimpiada: "OLIMPÍADA POCKET ODS" } as const;

// shortcut: datas comparadas no build, rebuild para esconder eventos passados
const upcoming = () => {
  const today = new Date().toISOString().slice(0, 10);
  return palestras.filter((p) => p.data >= today).sort((a, b) => a.data.localeCompare(b.data));
};
const latestArticles = () => [...publishedArticles].sort((a, b) => b.date!.localeCompare(a.date!)).slice(0, 3);

export function hasMovimento() {
  return upcoming().length > 0 || turmas.length > 0 || novidades.length > 0 || publishedArticles.length > 0;
}

function Card({ cat, title, meta, text, href }: { cat: string; title: string; meta?: string; text?: string; href?: string }) {
  const body = (
    <div className="article-body">
      <span className="article-cat">{cat}</span>
      <h3>{title}</h3>
      {text && <p className="body">{text}</p>}
      {meta && <span className="article-meta">{meta}</span>}
    </div>
  );
  return href ? (
    <a href={href} className="article" target="_blank" rel="noopener noreferrer">
      {body}
    </a>
  ) : (
    <div className="article">{body}</div>
  );
}

export function MovimentoBlocks() {
  const agenda = upcoming();
  const artigos = latestArticles();
  return (
    <>
      {agenda.length > 0 && (
        <section className="section container" aria-labelledby="mov-palestras">
          <SectionHead id="mov-palestras" eyebrow="AGENDA" title="Próximas palestras e rodas" />
          <ul className="articles">
            {agenda.map((p, i) => (
              <li key={p.titulo + p.data} data-reveal style={stagger(i)}>
                <Card
                  cat={p.online ? "ONLINE" : "PRESENCIAL"}
                  title={p.titulo}
                  meta={`${formatDate(p.data)} · ${p.local}`}
                  href={p.link}
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      {turmas.length > 0 && (
        <section className="section container" aria-labelledby="mov-turmas">
          <SectionHead id="mov-turmas" eyebrow="TURMAS" title="Turmas e edições abertas" />
          <ul className="articles">
            {turmas.map((t, i) => (
              <li key={t.titulo} data-reveal style={stagger(i)}>
                <Card
                  cat={solucaoLabel[t.solucao]}
                  title={t.titulo}
                  meta={t.inicio ? `Início em ${formatDate(t.inicio)}` : undefined}
                  href={t.link}
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      {novidades.length > 0 && (
        <section className="section container" aria-labelledby="mov-novidades">
          <SectionHead id="mov-novidades" eyebrow="REDES PARCEIRAS" title="Novidades das redes parceiras" />
          <ul className="articles">
            {novidades.map((n, i) => (
              <li key={n.titulo + n.data} data-reveal style={stagger(i)}>
                <Card cat={n.rede.toUpperCase()} title={n.titulo} text={n.texto} meta={formatDate(n.data)} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {artigos.length > 0 && (
        <section className="section container" aria-labelledby="mov-artigos">
          <SectionHead id="mov-artigos" eyebrow="BLOG" title="Artigos do blog" />
          <ul className="articles">
            {artigos.map((a, i) => (
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
        </section>
      )}
    </>
  );
}
