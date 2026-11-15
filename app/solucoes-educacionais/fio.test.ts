// Run: node --test app/solucoes-educacionais/fio.test.ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { solutions } from "../content.ts";
import { filterByFio, parseFio } from "./fio.ts";

const titles = (key: ReturnType<typeof parseFio>) => filterByFio(solutions, key).map((s) => s.title).sort();

test("cada fio mostra exatamente os nós da tabela", () => {
  assert.deepEqual(titles("rede"), ["Mentoria para Gestão Pública Educacional", "Tear: Plano Municipal de Educação"]);
  assert.deepEqual(titles("escola"), ["Mentoria para Transformação Escolar", "Olimpíada Pocket ODS"]);
  assert.deepEqual(titles("pessoas"), ["Caminhos da Inclusão", "Palestras e Rodas de Conversa", "Pós-graduação"]);
  assert.deepEqual(titles("trama"), ["Assessoria técnica e Caixa Escolar"]);
});

test("sem fio mostra todas, na ordem original", () => {
  assert.deepEqual(filterByFio(solutions, null), solutions);
});

test("parseFio aceita só as quatro chaves", () => {
  assert.equal(parseFio("rede"), "rede");
  assert.equal(parseFio("trama"), "trama");
  assert.equal(parseFio(null), null);
  assert.equal(parseFio(""), null);
  assert.equal(parseFio("Rede"), null);
  assert.equal(parseFio("toString"), null);
});
