import type { Metadata } from "next";
import { consultants, founders } from "../content";
import { Badge, CtaBlock, PageHero, SectionHead, stagger } from "../ui";

export const metadata: Metadata = {
  title: "Nossa Equipe",
  description:
    "Conheça as pessoas que dedicam conhecimento e experiência à educação na Teia de Saberes: idealizadores, consultores e formadores.",
  alternates: { canonical: "/nossa-equipe" },
};

// No authorized portraits yet: initials stand in rather than stock faces.
const initials = (name: string) =>
  name
    .split(" ")
    .filter((w) => w.length > 2 && !["Júnior", "Filho", "Neto"].includes(w))
    .map((w) => w[0])
    .filter((_, i, a) => i === 0 || i === a.length - 1)
    .join("");

type Person = { name: string; degree: string; role: string; accent: string; bio?: string };

function Profile({ p, i }: { p: Person; i: number }) {
  return (
    <li className="profile" data-reveal style={stagger(i)}>
      <span className="monogram" style={{ "--accent": p.accent } as React.CSSProperties} aria-hidden>
        {initials(p.name)}
      </span>
      <div className="profile-body">
        <span className="profile-role">{p.role}</span>
        <h3>{p.name}</h3>
        <p className="team-role">{p.degree}</p>
        {p.bio && <p className="team-bio">{p.bio}</p>}
      </div>
    </li>
  );
}

export default function Equipe() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Nossa Equipe" }]}
        eyebrow="NOSSA EQUIPE"
        title="Pessoas que dedicam conhecimento e experiência à educação."
        lead="Nossa atuação é construída a partir do encontro entre diferentes saberes, trajetórias profissionais e experiências no campo educacional."
        img="/images/art0.jpg"
        imgAlt="Educadores trabalhando juntos em torno de uma mesa"
      />

      <section className="section container" aria-labelledby="fundadores">
        <SectionHead id="fundadores" eyebrow="IDEALIZAÇÃO" title="Quem começou a tecer esta rede." />
        <ul className="profiles cols-2">
          {founders.map((p, i) => (
            <Profile key={p.name} p={p} i={i} />
          ))}
        </ul>
      </section>

      <section className="band-soft" aria-labelledby="consultores">
        <div className="section container">
          <SectionHead
            id="consultores"
            eyebrow="ESPECIALISTAS"
            title="Consultores e formadores."
            text="Mestres e doutores em políticas públicas, história e ciências sociais, que conduzem mentorias, formações e a pós-graduação."
          />
          <ul className="profiles">
            {consultants.map((p, i) => (
              <Profile key={p.name} p={p} i={i} />
            ))}
          </ul>
          <Badge>DADOS DA PROPOSTA DE 2025 · FOTOS E CURRÍCULOS A VALIDAR</Badge>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
