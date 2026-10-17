import type { MetadataRoute } from "next";
import { SITE_URL, articles } from "./content";

const routes = [
  "",
  "/quem-somos",
  "/solucoes-educacionais",
  "/mentoria-gestao-publica",
  "/mentoria-transformacao-escolar",
  "/palestras-formacoes",
  "/pos-graduacao",
  "/nossa-equipe",
  "/projetos",
  "/blog",
  "/contato",
  "/politica-de-privacidade",
  ...articles.map((a) => `/blog/${a.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: SITE_URL + r, priority: r ? 0.7 : 1 }));
}
