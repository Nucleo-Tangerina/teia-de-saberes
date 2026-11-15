// Shared building blocks for every page: same hero threads, CTA, badges,
// cards and footer as the home, so internal pages stay in one world.
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  CalendarClock,
  Check,
  GraduationCap,
  Handshake,
  Landmark,
  Layers,
  Lightbulb,
  MessagesSquare,
  Mic,
  MonitorPlay,
  School,
  Sprout,
  Target,
  UserCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { fios, footerCols, INSTAGRAM, solutions, type Solution } from "./content";

export const icons: Record<string, LucideIcon> = {
  "user-check": UserCheck,
  "calendar-clock": CalendarClock,
  "messages-square": MessagesSquare,
  landmark: Landmark,
  briefcase: Briefcase,
  school: School,
  users: Users,
  handshake: Handshake,
  sprout: Sprout,
  target: Target,
  layers: Layers,
  lightbulb: Lightbulb,
  "book-open": BookOpen,
  "graduation-cap": GraduationCap,
  mic: Mic,
  "monitor-play": MonitorPlay,
};

export const stagger = (i: number) => ({ "--i": i }) as React.CSSProperties;

// No authorized portraits yet: initials stand in rather than stock faces.
export const initials = (name: string) =>
  name
    .split(" ")
    .filter((w) => w.length > 2 && !["Júnior", "Filho", "Neto"].includes(w))
    .map((w) => w[0])
    .filter((_, i, a) => i === 0 || i === a.length - 1)
    .join("");

export function HeroThreads() {
  const paths = [
    "M-20 640 C 240 560, 420 700, 640 600 S 980 380, 1180 420 S 1400 300, 1470 220",
    "M-20 180 C 200 240, 360 120, 560 170 S 900 320, 1100 200 S 1350 80, 1470 120",
    "M300 790 C 420 640, 700 640, 820 520 S 1000 300, 1240 140",
  ];
  // The comp's five nodes, each slid along its own thread into clear space
  // (column gap, right of the photo, under the buttons) so none sits on copy.
  const nodes: [number, number, string][] = [
    [679, 582, "#ED8C32"],
    [1348, 390, "#2679AD"],
    [674, 204, "#F02A89"],
    [1315, 100, "#90D518"],
    [530, 653, "#2679AD"],
  ];
  return (
    <svg className="hero-threads" viewBox="0 0 1440 770" preserveAspectRatio="xMidYMid slice" aria-hidden>
      {paths.map((d, i) => (
        <path key={d} d={d} pathLength={1} style={stagger(i)} />
      ))}
      {nodes.map(([x, y, c], i) => (
        <g key={`${x}-${y}`} style={{ ...stagger(i), transformOrigin: `${x}px ${y}px` }} className="node">
          <circle className="node-pulse" cx={x} cy={y} r={6} fill={c} />
          <circle className="node-dot" cx={x} cy={y} r={6} fill={c} />
        </g>
      ))}
    </svg>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <p className="draft-badge">
      <span>{children}</span>
    </p>
  );
}

type Crumb = { label: string; href?: string };

/** Internal-page hero: the home hero's grammar at a smaller scale. */
export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  img,
  imgAlt = "",
  imgFit,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: React.ReactNode;
  crumbs: Crumb[];
  img?: string;
  imgAlt?: string;
  imgFit?: "contain";
  children?: React.ReactNode;
}) {
  return (
    <section className={`hero page-hero${img ? "" : " no-media"}`} aria-labelledby="page-title">
      <HeroThreads />
      <div className="container hero-grid">
        <div className="hero-copy">
          <nav aria-label="Você está em" className="crumbs hero-in" style={stagger(0)}>
            <ol>
              {[{ label: "Início", href: "/" }, ...crumbs].map((c) => (
                <li key={c.label}>{c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}</li>
              ))}
            </ol>
          </nav>
          <p className="eyebrow hero-in" style={stagger(1)}>
            {eyebrow}
          </p>
          <h1 id="page-title" className="hero-in" style={stagger(2)}>
            {title}
          </h1>
          {lead && (
            <p className="lead hero-in" style={stagger(3)}>
              {lead}
            </p>
          )}
          {children && (
            <div className="actions hero-in" style={stagger(4)}>
              {children}
            </div>
          )}
        </div>
        {img && (
          <div className="hero-media">
            <div className={`hero-photo${imgFit === "contain" ? " is-contain" : ""}`}>
              <Image src={img} alt={imgAlt} fill priority sizes="(max-width: 960px) 100vw, 560px" />
            </div>
            <div className="pattern-tile" aria-hidden />
          </div>
        )}
      </div>
    </section>
  );
}

/** Eyebrow + heading (+ optional text) used at the top of most sections. */
export function SectionHead({
  id,
  eyebrow,
  title,
  text,
  center,
}: {
  id: string;
  eyebrow: string;
  title: string;
  text?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`section-head${center ? " center" : " narrow"}`} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {text && <p className="body">{text}</p>}
    </div>
  );
}

/** Bordered icon cells (the home's "Para quem" grid), 2, 3 or 4 across. */
export function IconGrid({
  items,
  cols = 2,
}: {
  items: readonly { icon: string; title: string; text: string }[];
  cols?: 2 | 3 | 4;
}) {
  return (
    <ul className={`audience cols-${cols}`}>
      {items.map((a, i) => {
        const Icon = icons[a.icon] ?? Lightbulb;
        return (
          <li key={a.title} data-reveal style={stagger(i)}>
            <span className="icon-square">
              <Icon size={22} aria-hidden />
            </span>
            <h3>{a.title}</h3>
            <p>{a.text}</p>
          </li>
        );
      })}
    </ul>
  );
}

export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="checklist">
      {items.map((t, i) => (
        <li key={t} data-reveal style={stagger(Math.min(i, 5))}>
          <span className="check" aria-hidden>
            <Check size={16} strokeWidth={3} />
          </span>
          {t}
        </li>
      ))}
    </ul>
  );
}

/** Key facts as a definition list (carga horária, formato...). */
export function Facts({ items }: { items: readonly { label: string; value: string }[] }) {
  return (
    <dl className="facts" data-reveal>
      {items.map((f) => (
        <div key={f.label}>
          <dt>{f.label}</dt>
          <dd>{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Native disclosure widgets: keyboard and screen-reader support for free. */
export function Faq({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="faq" data-reveal>
      {items.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/** The home's methodology thread, reusable with any steps. */
export function StepsThread({ steps }: { steps: readonly { accent: string; title: string; text: string }[] }) {
  return (
    <div className="steps-wrap" data-thread>
      <span className="thread" aria-hidden>
        <span className="thread-fill" />
      </span>
      <ol className={`steps n-${steps.length}`}>
        {steps.map((s, i) => (
          <li key={s.title} data-node style={{ "--accent": s.accent } as React.CSSProperties}>
            <span className="step-num" aria-hidden>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function SolutionCard({ s, i }: { s: Solution; i: number }) {
  const external = s.href.startsWith("http");
  return (
    <article className="sol-card" data-reveal style={stagger(Math.min(i % 4, 4))}>
      <div className={`sol-media${s.fit === "contain" ? " is-contain" : ""}`}>
        <Image src={s.img} alt="" fill sizes="(max-width: 720px) 264px, 272px" />
      </div>
      <div className="sol-body">
        <div className="sol-meta">
          <span className="sol-num">
            <i style={{ background: s.accent }} />
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="tag">{fios.find((f) => f.key === s.fio)?.nome}</span>
        </div>
        <h3>{s.title}</h3>
        <p className="sol-phrase">{s.phrase}</p>
        <p>{s.text}</p>
        <a href={s.href} className="link-arrow" {...(external ? { target: "_blank", rel: "noopener" } : {})}>
          Saiba mais<span className="sr-only"> sobre {s.title}</span>
          <ArrowRight size={18} aria-hidden />
        </a>
      </div>
    </article>
  );
}

export function CtaBlock({
  title = "O próximo passo para fortalecer a educação do seu município pode começar com uma conversa.",
  text = "Nossa equipe está disponível para conhecer a realidade da sua rede de ensino e apresentar possibilidades de atuação alinhadas às suas necessidades.",
  label = "Entre em contato com a Teia de Saberes",
  href = "/contato",
}: {
  title?: string;
  text?: string;
  label?: string;
  href?: string;
}) {
  return (
    <section className="section container" aria-labelledby="cta-final">
      <div className="cta" data-reveal>
        <div className="cta-copy">
          <h2 id="cta-final">{title}</h2>
          <p className="body">{text}</p>
          <div>
            <Link href={href} className="btn btn-orange btn-wrap">
              {label}
            </Link>
          </div>
        </div>
        <div className="cta-pattern" aria-hidden />
      </div>
    </section>
  );
}

/** "Ponte com o Novo Contrato Social" highlight; one per page, hence the fixed id. */
export function Ponte({ children }: { children: React.ReactNode }) {
  return (
    <section className="section container" aria-labelledby="ponte-title">
      <div className="ponte" data-reveal>
        <p className="eyebrow" id="ponte-title">
          PONTE COM O NOVO CONTRATO SOCIAL
        </p>
        <p className="ponte-text">{children}</p>
      </div>
    </section>
  );
}

/** Solutions linked to `slug` (its `ligaA`), in the given order. */
export function FiosLigados({ slug }: { slug: string }) {
  const ligadas = (solutions.find((s) => s.slug === slug)?.ligaA ?? [])
    .map((l) => solutions.find((s) => s.slug === l))
    .filter((s): s is Solution => !!s);
  if (!ligadas.length) return null;
  return (
    <section aria-labelledby="fios-ligados">
      <div className="section container">
        <SectionHead id="fios-ligados" eyebrow="FIOS QUE SE LIGAM A ESTA" title="Soluções que se conectam a esta." />
        <ul className="fios-ligados">
          {ligadas.map((s, i) => (
            <li key={s.slug} data-reveal style={stagger(Math.min(i, 5))}>
              <Link href={s.href} className="fio-link" style={{ "--accent": s.accent } as React.CSSProperties}>
                <span className="tag">{fios.find((f) => f.key === s.fio)?.nome}</span>
                <h3>{s.title}</h3>
                <p>{s.phrase}</p>
                <ArrowRight size={18} aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image src="/logo-white.png" alt="Teia de Saberes" width={681} height={289} />
          <p>Conectando saberes. Fortalecendo a gestão. Transformando a educação.</p>
        </div>
        {footerCols.map((c) => (
          <nav key={c.title} aria-label={c.title.toLowerCase()}>
            <h2>{c.title}</h2>
            <ul>
              {c.items.map((it) => (
                <li key={it.label}>
                  {"href" in it && it.href ? (
                    <a href={it.href} {...(it.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}>
                      {it.label}
                    </a>
                  ) : (
                    <span>{it.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Teia de Saberes. Todos os direitos reservados.</span>
        <p>A Teia de Saberes é uma organização independente e não representa a UNESCO nem a ONU.</p>
        <p>
          <Link href="/politica-de-privacidade">Política de Privacidade</Link>
          <span aria-hidden> · </span>
          <a href={INSTAGRAM} target="_blank" rel="noopener">
            Instagram
          </a>
          <span aria-hidden> · </span>
          <Link href="/contato">Contato</Link>
        </p>
      </div>
    </footer>
  );
}
