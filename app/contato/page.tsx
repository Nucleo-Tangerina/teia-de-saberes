import type { Metadata } from "next";
import { AtSign, Globe, MessageCircle } from "lucide-react";
import { INSTAGRAM, SITE_URL, WHATSAPP } from "../content";
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
  assessoria: "Assessoria técnica e Caixa Escolar",
};

const channels = [
  { icon: MessageCircle, label: "WhatsApp", value: "(13) 99208-1120", href: WHATSAPP },
  { icon: AtSign, label: "Instagram", value: "@teia.de.saberes", href: INSTAGRAM },
  { icon: Globe, label: "Site", value: "teiadesaberes.com.br", href: SITE_URL },
];

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
            Vamos conversar sobre a educação do seu município?
          </h1>
          <p className="lead hero-in" style={stagger(2)}>
            Nossa equipe está disponível para conhecer a realidade da sua rede de ensino e apresentar possibilidades de
            atuação alinhadas às suas necessidades.
          </p>
          <ul className="channels hero-in" style={stagger(3)} aria-label="Canais oficiais">
            {channels.map(({ icon: Icon, label, value, href }) => (
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
            ))}
          </ul>
        </div>
        <div className="hero-in" style={stagger(2)}>
          <ContactForm defaultInterest={interesse ? preset[interesse] : undefined} />
        </div>
      </div>
    </section>
  );
}
