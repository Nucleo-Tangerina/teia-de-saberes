"use client";

import { useSyncExternalStore } from "react";
import { escreverEscolhas, lerEscolhas } from "./mudancas";

// Client stores for approval mode. Server snapshot is "off", so static HTML always renders the default variation.

const nada = () => () => {};
const temAviso = () => /(?:^|;\s*)aprovacao=1/.test(document.cookie);

export const useModoAprovacao = () => useSyncExternalStore(nada, temAviso, () => false);

// Choices live in memory across client navigations and mirror into ?v= so a combination can be shared by link.
let escolhas: Record<string, string> | null = null;
const ouvintes = new Set<() => void>();
const vazio: Record<string, string> = {};

function atual() {
  if (!escolhas) escolhas = lerEscolhas(new URLSearchParams(location.search).get("v"));
  return escolhas;
}

function assinar(fn: () => void) {
  ouvintes.add(fn);
  return () => ouvintes.delete(fn);
}

export function escolher(id: string, variacao: string) {
  escolhas = { ...atual(), [id]: variacao };
  const url = new URL(location.href);
  url.searchParams.set("v", escreverEscolhas(escolhas));
  history.replaceState(history.state, "", url); // Next's router keeps native replaceState in sync
  ouvintes.forEach((f) => f());
}

export const useEscolhas = () => useSyncExternalStore(assinar, atual, () => vazio);
