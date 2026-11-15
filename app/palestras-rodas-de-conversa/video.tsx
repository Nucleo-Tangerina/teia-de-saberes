"use client";

import { useState } from "react";
import { Play } from "lucide-react";

const ID = "B-_0lCoTYqM";

/** YouTube facade: only a thumbnail until clicked, so the player's scripts never load on page view. */
export function Video() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="video-frame" data-reveal>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${ID}?autoplay=1`}
          title="Vídeo: palestra do idealizador da Teia de Saberes"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" className="video-facade" onClick={() => setPlaying(true)} aria-label="Assistir ao vídeo da palestra">
          {/* eslint-disable-next-line @next/next/no-img-element -- external thumbnail; next.config has no remote pattern for it */}
          <img
            src={`https://i.ytimg.com/vi/${ID}/hqdefault.jpg`}
            alt="Miniatura do vídeo da palestra do idealizador da Teia de Saberes"
            loading="lazy"
          />
          <span className="video-play" aria-hidden>
            <Play size={28} fill="currentColor" />
          </span>
        </button>
      )}
    </div>
  );
}
