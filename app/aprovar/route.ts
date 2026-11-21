import { NextResponse, type NextRequest } from "next/server";
import { COOKIE_AVISO, COOKIE_SESSAO, codigoValido, valorSessao } from "../aprovacao/sessao";

const MES = 60 * 60 * 24 * 30;

/** Secret link: /aprovar?c=<code> turns approval mode on; /aprovar?sair turns it off. */
export function GET(req: NextRequest) {
  const token = process.env.APROVACAO_TOKEN;
  if (!token) return new NextResponse(null, { status: 404 });

  const url = req.nextUrl;
  // relative Location with its own empty query: Netlify otherwise carries ?c=<code> over to "/"
  const res = new NextResponse(null, { status: 307, headers: { Location: "/?" } });
  res.headers.set("X-Robots-Tag", "noindex");

  if (url.searchParams.has("sair")) {
    res.cookies.delete(COOKIE_SESSAO);
    res.cookies.delete(COOKIE_AVISO);
    return res;
  }
  // wrong code: plain redirect, no hint why
  if (!codigoValido(url.searchParams.get("c"), token)) return res;

  const base = { path: "/", sameSite: "lax" as const, secure: url.protocol === "https:", maxAge: MES };
  res.cookies.set(COOKIE_SESSAO, valorSessao(token), { ...base, httpOnly: true });
  res.cookies.set(COOKIE_AVISO, "1", base);
  return res;
}
