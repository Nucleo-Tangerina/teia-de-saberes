import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { team, type TeamMember } from "../content";
import { CtaBlock, PageHero, initials, stagger } from "../ui";

const lead =
  "A equipe da Teia de Saberes reúne formação acadêmica sólida, experiência prática com redes públicas de ensino e compromisso ético com a transformação social por meio da educação.";

export const metadata: Metadata = {
  title: "Equipe",
  description: "Integrantes da equipe da Teia de Saberes, com formação e experiência em redes públicas de ensino.",
  alternates: { canonical: "/nossa-equipe" },
};

function Profile({ p, i }: { p: TeamMember; i: number }) {
  return (
    <li className="profile" data-reveal style={stagger(i)}>
      <span className="monogram" style={{ "--accent": p.accent } as React.CSSProperties} aria-hidden>
        {initials(p.name)}
      </span>
      <div className="profile-body">
        <span className="profile-role">{p.role}</span>
        <h3>{p.name}</h3>
        {p.degree && <p className="team-role">{p.degree}</p>}
        {p.bio && <p className="team-bio">{p.bio}</p>}
        {p.lattes && (
          <a href={p.lattes} className="link-arrow" target="_blank" rel="noopener noreferrer">
            Currículo Lattes
            <ArrowUpRight size={16} aria-hidden />
          </a>
        )}
      </div>
    </li>
  );
}

export default function Equipe() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Equipe" }]}
        eyebrow="EQUIPE"
        title="Quem tece com você"
        lead={lead}
        img="/images/art0.jpg"
        imgAlt="Educadores trabalhando juntos em torno de uma mesa"
      />

      <section className="section container" aria-label="Integrantes da equipe">
        <ul className="profiles">
          {team.map((p, i) => (
            <Profile key={p.name} p={p} i={i} />
          ))}
        </ul>
      </section>

      <section className="band-navy" aria-labelledby="compromisso">
        <div className="section container split challenges">
          <h2 id="compromisso" data-reveal>
            Compromisso
          </h2>
          <div className="stack" data-reveal>
            <p className="body">
              A Teia de Saberes acredita que a escola pública é um espaço estratégico de construção de outro mundo
              possível. Trabalhamos para que toda criança, jovem e adulto tenha acesso à aprendizagem com dignidade, para
              que cada educador se reconheça como agente de transformação e para que os gestores sejam protagonistas de
              uma educação que honra o passado e constrói os futuros.
            </p>
          </div>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
