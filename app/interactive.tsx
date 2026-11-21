"use client";

import { useActionState, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CircleAlert, CircleCheck, Menu, Send, X } from "lucide-react";
import { nav } from "./content";
import { sendContact, type ContactState } from "./contato/actions";
import { interests, UFS, type Field } from "./contato/validate";

// Sub-pages that light up their parent menu item.
const sectionOf = (path: string) =>
  /^\/(mentoria-|palestras-|pos-graduacao|tear|olimpiada-|caminhos-)/.test(path)
    ? "/solucoes-educacionais"
    : path.startsWith("/blog")
      ? "/em-movimento"
      : path;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const current = sectionOf(usePathname());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Teia de Saberes, página inicial">
          <Image src="/logo.png" alt="Teia de Saberes" width={681} height={289} priority />
        </Link>
        <nav aria-label="Principal" id="menu-principal" className="main-nav">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={current === n.href ? "page" : undefined} onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <Link href="/contato" className="btn btn-dark nav-cta-mobile" onClick={() => setOpen(false)}>
            Fale com nossa equipe
          </Link>
        </nav>
        <Link href="/contato" className="btn btn-dark btn-sm header-cta">
          Fale com nossa equipe
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

/** Scroll reveals + methodology threads that draw with scroll. Re-arms per route. */
export function Motion() {
  const path = usePathname();
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.in)");
    const threads = Array.from(document.querySelectorAll<HTMLElement>("[data-thread]")).map((el) => ({
      el,
      nodes: Array.from(el.querySelectorAll<HTMLElement>("[data-node]")),
    }));

    if (reduced) {
      targets.forEach((t) => t.classList.add("in"));
      threads.forEach(({ el, nodes }) => {
        el.style.setProperty("--p", "1");
        nodes.forEach((n) => n.classList.add("lit"));
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          // also release anything skipped above the viewport (anchor jumps)
          if (!e.isIntersecting && e.boundingClientRect.bottom > 0) return;
          e.target.classList.add("in");
          io.unobserve(e.target);
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    targets.forEach((t) => io.observe(t));

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      for (const { el, nodes } of threads) {
        const r = el.getBoundingClientRect();
        // 0 when the steps enter the lower third, 1 when they reach the upper third
        const p = Math.min(1, Math.max(0, (vh * 0.8 - r.top) / (r.height + vh * 0.35)));
        el.style.setProperty("--p", p.toFixed(3));
        nodes.forEach((n, i) => n.classList.toggle("lit", p >= i / nodes.length + 0.02));
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [path]);
  return null;
}

const initial: ContactState = { status: "idle" };

export function ContactForm({ defaultInterest }: { defaultInterest?: string }) {
  const [state, action, pending] = useActionState(sendContact, initial);
  const [startedAt] = useState(() => Date.now());
  const v = state.values ?? {};
  const err = (f: Field | "consentimento") => state.errors?.[f];
  const describe = (f: Field | "consentimento") => (err(f) ? { "aria-invalid": true, "aria-describedby": `${f}-erro` } : {});
  const Err = ({ f }: { f: Field | "consentimento" }) =>
    err(f) ? (
      <span className="field-error" id={`${f}-erro`}>
        {err(f)}
      </span>
    ) : null;

  if (state.status === "sent") {
    return (
      <div className="form-card form-done" role="status">
        <CircleCheck size={40} aria-hidden />
        <h2>Mensagem enviada.</h2>
        <p>Obrigado pelo contato. Nossa equipe vai analisar sua mensagem e retornar pelos dados informados.</p>
        <Link href="/" className="btn btn-outline">
          Voltar ao início
        </Link>
      </div>
    );
  }

  return (
    // key remounts the form so React's post-submit reset shows the kept values
    <form key={JSON.stringify(v)} action={action} className="form-card" noValidate>
      {state.status === "error" && (
        <p className="form-alert" role="alert">
          <CircleAlert size={20} aria-hidden />
          {state.message}
        </p>
      )}
      <div className="form-grid">
        <label className="field span-2">
          <span>Nome completo</span>
          <input name="nome" autoComplete="name" required defaultValue={v.nome} {...describe("nome")} />
          <Err f="nome" />
        </label>
        <label className="field">
          <span>E-mail profissional</span>
          <input name="email" type="email" autoComplete="email" required defaultValue={v.email} {...describe("email")} />
          <Err f="email" />
        </label>
        <label className="field">
          <span>Telefone/WhatsApp</span>
          <input name="telefone" type="tel" autoComplete="tel" required defaultValue={v.telefone} {...describe("telefone")} />
          <Err f="telefone" />
        </label>
        <label className="field">
          <span>Município ou instituição</span>
          <input name="municipio" autoComplete="address-level2" required defaultValue={v.municipio} {...describe("municipio")} />
          <Err f="municipio" />
        </label>
        <label className="field">
          <span>Estado</span>
          <select name="estado" defaultValue={v.estado ?? ""} {...describe("estado")}>
            <option value="">Selecione (opcional)</option>
            {UFS.map((uf) => (
              <option key={uf}>{uf}</option>
            ))}
          </select>
          <Err f="estado" />
        </label>
        <label className="field span-2">
          <span>Cargo ou função</span>
          <input name="cargo" autoComplete="organization-title" required defaultValue={v.cargo} {...describe("cargo")} />
          <Err f="cargo" />
        </label>
        <label className="field span-2">
          <span>Área de interesse</span>
          <select name="interesse" required defaultValue={v.interesse ?? defaultInterest ?? ""} {...describe("interesse")}>
            <option value="" disabled>
              Selecione
            </option>
            {interests.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
          <Err f="interesse" />
        </label>
        <label className="field span-2">
          <span>Mensagem</span>
          <textarea name="mensagem" rows={5} required defaultValue={v.mensagem} {...describe("mensagem")} />
          <Err f="mensagem" />
        </label>
      </div>
      {/* honeypot + start time, read by looksLikeSpam */}
      <div className="hp" aria-hidden>
        <label>
          Empresa
          <input name="empresa" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <input type="hidden" name="inicio" value={startedAt} />
      <label className="consent">
        <input type="checkbox" name="consentimento" required {...describe("consentimento")} />
        <span>
          Concordo com o uso dos meus dados para retorno deste contato, conforme a{" "}
          <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
        </span>
      </label>
      <Err f="consentimento" />
      <button type="submit" className="btn btn-orange" disabled={pending}>
        {pending ? "Enviando…" : "Enviar mensagem"}
        <Send size={18} aria-hidden />
      </button>
    </form>
  );
}
