import type { Metadata } from "next";
import { AtSign, Globe, MessageCircle } from "lucide-react";
import { channels } from "../content";
import { ContactForm } from "../interactive";
import { HeroThreads, stagger } from "../ui";
import { interests } from "./validate";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a equipe da Teia de Saberes: conte sobre a realidade da sua rede de ensino e conheça possibilidades de atuação.",
  alternates: { canonical: "/contato" },
};

// Short ?interesse= values used by links across the site.
const preset: Record<string, (typeof interests)[number]> = {
  escolar: "Mentoria para Transformação Escolar",
  gestao: "Mentoria para Gestão Pública",
  tear: "Tear: Plano Municipal de Educação",
  olimpiada: "Olimpíada Pocket ODS",
  pos: "Pós-graduação",
  inclusao: "Caminhos da Inclusão",
  palestras: "Palestras e Rodas de Conversa",
};

const icons: Record<string, typeof Globe> = { WhatsApp: MessageCircle, Instagram: AtSign, Site: Globe };

export default async function Contato({ searchParams }: { searchParams: Promise<{ interesse?: string }> }) {
  const { interesse } = await searchParams;
  return (
    <section className="hero contact" aria-labelledby="page-title">
      <HeroThreads />
      <div className="container contact-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-in" style={stagger(0)}>
            CONTATO
          </p>
          <h1 id="page-title" className="hero-in" style={stagger(1)}>
            Vamos tecer juntos?
          </h1>
          <p className="lead hero-in" style={stagger(2)}>
            Sua rede já tem sementes de futuro. Vamos cultivá-las juntos? O próximo passo pode ser uma conversa. Fale com
            nossa equipe por WhatsApp, e-mail ou videoconferência.
          </p>
          <ul className="channels hero-in" style={stagger(3)} aria-label="Canais oficiais">
            {channels.map(({ label, value, href }) => {
              const Icon = icons[label] ?? Globe;
              return (
                <li key={label}>
                  <span className="icon-dot">
                    <Icon size={20} aria-hidden />
                  </span>
                  <span>
                    <span className="channel-label">{label}</span>
                    <a href={href} target="_blank" rel="noopener">
                      {value}
                    </a>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hero-in" style={stagger(2)}>
          <ContactForm defaultInterest={interesse && Object.hasOwn(preset, interesse) ? preset[interesse] : undefined} />
        </div>
      </div>
    </section>
  );
}
