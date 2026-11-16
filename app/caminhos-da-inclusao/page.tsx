import type { Metadata } from "next";
import { Lexend, Young_Serif } from "next/font/google";
import { FiosLigados, Ponte } from "../ui";
import { PageThread } from "./_lp/PageThread";
import { Hero } from "./_lp/Hero";
import { Pain } from "./_lp/Pain";
import { BigIdea } from "./_lp/BigIdea";
import { Transformation, Solution, Pillars, Benefits, Audience } from "./_lp/Journey";
import { Author, Study, Curriculum } from "./_lp/Proof";
import { Video, Testimonials } from "./_lp/Social";
import { Offer, Guarantee, Objections, Faq, Closing } from "./_lp/Close";
import "./lp.css";

// The landing's own type, only inside this page's wrapper (.lp reads these variables).
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });
const youngSerif = Young_Serif({ subsets: ["latin"], weight: "400", variable: "--font-young-serif" });

export const metadata: Metadata = {
  title: "Caminhos da Inclusão: Formação para Mediadores",
  description:
    "Formação de 180 horas para atuar na inclusão escolar com mais segurança. Com Ana Paula Jorge. Aulas online, encontros ao vivo e certificado.",
  alternates: { canonical: "/caminhos-da-inclusao" },
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Caminhos da Inclusão: Formação para Mediadores",
  description:
    "Formação de 180 horas em 5 módulos para atuar na inclusão escolar: fundamentos e legislação, desenvolvimento humano e deficiências, comunicação e mediação, adaptação curricular e técnicas de apoio.",
  inLanguage: "pt-BR",
  provider: { "@type": "Organization", name: "Teia de Saberes" },
  instructor: { "@type": "Person", name: "Ana Paula Jorge" },
  offers: { "@type": "Offer", price: "197.00", priceCurrency: "BRL", category: "Paid" },
  hasCourseInstance: { "@type": "CourseInstance", courseMode: "online", courseWorkload: "PT180H" },
};

// Porte da landing oficial: seções na ordem do App.tsx dela, sem o cabeçalho e o rodapé
// (o site já tem os seus). A Ponte e os fios ligam a página de volta ao hub.
export default function CaminhosDaInclusao() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }} />
      <div className={`lp ${lexend.variable} ${youngSerif.variable}`}>
        <div className="page">
          <Hero />
          <Video />
          <Pain />
          <BigIdea />
          <Transformation />
          <Solution />
          <Pillars />
          <Benefits />
          <Audience />
          <Author />
          <Testimonials />
          <Study />
          <Curriculum />
          <Objections />
          <Offer />
          <Guarantee />
          <Faq />
          <Closing />
          <PageThread />
        </div>
      </div>

      <Ponte>
        O relatório defende o direito à educação de qualidade ao longo da vida, para todas as pessoas. Uma escola que
        inclui cumpre esse contrato.
      </Ponte>

      <FiosLigados slug="inclusao" />
    </>
  );
}
