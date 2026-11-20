// Run: node --test app/aprovacao/mudancas.test.ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { escreverEscolhas, lerEscolhas, type Mudanca } from "./mudancas.ts";

const lista: Mudanca[] = [
  { id: "topo", pagina: "/", issue: 1, titulo: "", explicacao: "", padrao: "a", variacoes: [{ id: "a", nome: "", descricao: "" }, { id: "b", nome: "", descricao: "" }] },
  { id: "munis", pagina: "/", issue: 1, titulo: "", explicacao: "", padrao: "a", variacoes: [{ id: "a", nome: "", descricao: "" }] },
];

test("lê escolhas válidas e ignora o resto", () => {
  assert.deepEqual(lerEscolhas("topo:b,munis:a", lista), { topo: "b", munis: "a" });
  assert.deepEqual(lerEscolhas("topo:z,outro:a,lixo", lista), {});
  assert.deepEqual(lerEscolhas(null, lista), {});
});

test("escreve e lê de volta", () => {
  const e = { topo: "b", munis: "a" };
  assert.deepEqual(lerEscolhas(escreverEscolhas(e), lista), e);
});
