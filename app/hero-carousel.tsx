"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

type Cta = { label: string; href: string; external?: boolean };

export type Slide = {
  /** The page's h1 lives in one slide, wherever it sits in the rotation; the rest are h2. */
  heading?: "h1" | "h2";
  eyebrow: string;
  title: string;
  text: string;
  cta: Cta;
  /** Orange button; otherwise a white outline button. */
  primary?: boolean;
  /** Optional second button, always a white outline. */
  secondary?: Cta;
  img: string;
  imgAlt?: string;
  fit?: "contain";
};

function CtaLink({ cta, className }: { cta: Cta; className: string }) {
  return cta.external ? (
    <a href={cta.href} target="_blank" rel="noopener" className={className}>
      {cta.label}
    </a>
  ) : (
    <Link href={cta.href} className={className}>
      {cta.label}
    </Link>
  );
}

const DELAY = 6000;
const SWIPE = 50;

export function HeroCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const startX = useRef<number | null>(null);
  const n = slides.length;
  const go = (i: number) => setIndex((i + n) % n);

  // No autoplay for people who asked for less motion; they can still press play.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
  }, []);

  const running = playing && !hovered && !focused;
  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % n), DELAY);
    return () => clearTimeout(t);
  }, [running, index, n]);

  return (
    <section
      className="carousel"
      aria-roledescription="carrossel"
      aria-label="Soluções da Teia de Saberes"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setFocused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(index - 1);
        else if (e.key === "ArrowRight") go(index + 1);
      }}
    >
      <div
        className="carousel-track"
        aria-live={playing ? "off" : "polite"}
        onPointerDown={(e) => {
          if (e.pointerType !== "mouse") startX.current = e.clientX;
        }}
        onPointerUp={(e) => {
          if (startX.current === null) return;
          const dx = e.clientX - startX.current;
          startX.current = null;
          if (Math.abs(dx) >= SWIPE) go(dx < 0 ? index + 1 : index - 1);
        }}
        onPointerCancel={() => (startX.current = null)}
      >
        {slides.map((s, i) => {
          const H = s.heading ?? "h2";
          const active = i === index;
          const btn = `btn ${s.primary ? "btn-orange" : "btn-outline-light"}`;
          return (
            <div
              key={s.title}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${n}`}
              className={`slide${active ? " is-active" : ""}${s.fit === "contain" ? " is-contain" : ""}`}
              inert={!active}
            >
              <div className="slide-media">
                <Image
                  src={s.img}
                  alt={s.imgAlt ?? ""}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 720px) 100vw, 60vw"
                />
              </div>
              <div className="container slide-copy">
                <p className="eyebrow slide-eyebrow">{s.eyebrow}</p>
                <H className="slide-title">{s.title}</H>
                <p className="slide-text">{s.text}</p>
                <div className="slide-actions">
                  <CtaLink cta={s.cta} className={btn} />
                  {s.secondary && <CtaLink cta={s.secondary} className="btn btn-outline-light" />}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button type="button" className="carousel-arrow is-prev" aria-label="Slide anterior" onClick={() => go(index - 1)}>
        <ChevronLeft size={24} aria-hidden />
      </button>
      <button type="button" className="carousel-arrow is-next" aria-label="Próximo slide" onClick={() => go(index + 1)}>
        <ChevronRight size={24} aria-hidden />
      </button>

      <div className="carousel-controls">
        <button
          type="button"
          className="carousel-pause"
          aria-label={playing ? "Pausar carrossel" : "Retomar carrossel"}
          onClick={() => setPlaying(!playing)}
        >
          {playing ? <Pause size={16} aria-hidden /> : <Play size={16} aria-hidden />}
        </button>
        <div className="carousel-dots">
          {slides.map((s, i) => (
            <button
              key={s.title}
              type="button"
              aria-label={`Ir para o slide ${i + 1}: ${s.title}`}
              aria-current={i === index ? "true" : undefined}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
