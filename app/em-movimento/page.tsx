import type { Metadata } from "next";
import Link from "next/link";
import { INSTAGRAM } from "../content";
import { MovimentoBlocks, hasMovimento } from "../movimento-blocks";
import { CtaBlock, PageHero } from "../ui";

export const metadata: Metadata = {
  title: "Em movimento",
  description: "Próximas palestras e rodas, turmas abertas, novidades das redes parceiras e artigos da Teia de Saberes.",
  alternates: { canonical: "/em-movimento" },
};

export default function EmMovimento() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Em movimento" }]}
        eyebrow="EM MOVIMENTO"
        title="Em movimento"
        lead="Agenda, turmas e conversas"
      />
      <MovimentoBlocks />
      {!hasMovimento() && (
        <section className="section container" aria-label="Agenda">
          <div className="empty" data-reveal>
            <p>As próximas palestras, turmas e conversas aparecem aqui assim que forem confirmadas.</p>
            <div className="actions">
              <a href={INSTAGRAM} className="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer">
                Acompanhe no Instagram
              </a>
              <Link href="/contato" className="btn btn-outline btn-sm">
                Fale com a equipe
              </Link>
            </div>
          </div>
        </section>
      )}
      <CtaBlock />
    </>
  );
}
