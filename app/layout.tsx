import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Header, Motion } from "./interactive";
import { Footer } from "./ui";
import { BarraAprovacao } from "./aprovacao/barra";

const manrope = Manrope({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });

import { SITE_URL } from "./content";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Teia de Saberes – Mentoria e formação para redes de ensino",
    template: "%s | Teia de Saberes",
  },
  description:
    "Hub de soluções educacionais: assessoria, mentoria e formação para Secretarias de Educação, a partir do Novo Contrato Social da Educação (UNESCO).",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Teia de Saberes",
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = { themeColor: "#153A62" };

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Teia de Saberes",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  sameAs: ["https://www.instagram.com/teia.de.saberes/"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${manrope.variable} ${inter.variable}`}>
      <head>
        {/* hide reveal targets before first paint only when motion is allowed */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion')`,
          }}
        />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <Header />
        <Motion />
        <main id="conteudo">{children}</main>
        <Footer />
        <BarraAprovacao />
      </body>
    </html>
  );
}
