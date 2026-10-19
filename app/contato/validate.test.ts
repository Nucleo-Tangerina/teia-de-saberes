// Run: node --test app/contato/validate.test.ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { looksLikeSpam, validateContact } from "./validate.ts";

const valid = {
  nome: "Maria da Silva",
  email: "maria@educacao.mg.gov.br",
  telefone: "(31) 99999-0000",
  municipio: "Belo Vale",
  estado: "MG",
  cargo: "Secretária de Educação",
  interesse: "Pós-graduação",
  mensagem: "Gostaríamos de conhecer a proposta para nossa rede.",
  consentimento: "on",
};
const form = (over: Record<string, string> = {}) => {
  const f = new FormData();
  for (const [k, v] of Object.entries({ ...valid, ...over })) if (v !== "") f.set(k, v);
  return f;
};

test("accepts a complete submission", () => {
  assert.deepEqual(validateContact(form()).errors, {});
});

test("rejects bad fields and missing consent", () => {
  const { errors } = validateContact(form({ email: "x@", telefone: "123", estado: "XX", interesse: "Outro", consentimento: "" }));
  assert.deepEqual(Object.keys(errors).sort(), ["consentimento", "email", "estado", "interesse", "telefone"]);
});

test("flags honeypot and instant submits as spam", () => {
  const now = 1_000_000;
  assert.equal(looksLikeSpam(form({ inicio: String(now - 10_000) }), now), false);
  assert.equal(looksLikeSpam(form({ inicio: String(now - 500) }), now), true);
  assert.equal(looksLikeSpam(form({ inicio: String(now - 10_000), empresa: "bot" }), now), true);
});
