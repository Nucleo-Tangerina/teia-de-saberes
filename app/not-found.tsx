import Link from "next/link";
import { HeroThreads } from "./ui";

export default function NotFound() {
  return (
    <section className="hero page-hero no-media" aria-labelledby="page-title">
      <HeroThreads />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-in">PÁGINA NÃO ENCONTRADA</p>
          <h1 id="page-title" className="hero-in">
            Este fio da teia não leva a lugar nenhum.
          </h1>
          <p className="lead hero-in">O endereço pode ter mudado ou ainda não existir.</p>
          <div className="actions hero-in">
            <Link href="/" className="btn btn-orange">
              Voltar ao início
            </Link>
            <Link href="/contato" className="btn btn-outline">
              Fale com nossa equipe
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
