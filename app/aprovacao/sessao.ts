import { createHmac, timingSafeEqual } from "node:crypto";

// Client approval mode (issue #48). Only exists where APROVACAO_TOKEN is set: the test site, never the official domain.

export const COOKIE_SESSAO = "aprovacao_sessao"; // httpOnly proof, checked on the server
export const COOKIE_AVISO = "aprovacao"; // readable hint so static pages know to show the bar; grants nothing

const iguais = (a: string, b: string) => {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
};

/** The secret link's code matches the token. */
export function codigoValido(codigo: string | null | undefined, token: string | undefined): boolean {
  return Boolean(token && codigo) && iguais(codigo!, token!);
}

/** Cookie value derived from the token, so the token itself never sits in the browser. */
export function valorSessao(token: string): string {
  return createHmac("sha256", token).update("teia-aprovacao").digest("hex");
}

export function sessaoValida(cookie: string | undefined, token: string | undefined): boolean {
  return Boolean(token && cookie) && iguais(cookie!, valorSessao(token!));
}
