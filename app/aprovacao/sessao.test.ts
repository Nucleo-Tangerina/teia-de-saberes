// Run: node --test app/aprovacao/sessao.test.ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { codigoValido, sessaoValida, valorSessao } from "./sessao.ts";

test("sem token, nada dá acesso", () => {
  assert.equal(codigoValido("qualquer", undefined), false);
  assert.equal(codigoValido("", ""), false);
  assert.equal(sessaoValida("qualquer", undefined), false);
});

test("código certo entra, errado ou ausente não", () => {
  assert.equal(codigoValido("s3gredo", "s3gredo"), true);
  assert.equal(codigoValido("s3gred", "s3gredo"), false);
  assert.equal(codigoValido(null, "s3gredo"), false);
});

test("cookie de sessão vale só para o token que o gerou", () => {
  const v = valorSessao("s3gredo");
  assert.notEqual(v, "s3gredo");
  assert.equal(sessaoValida(v, "s3gredo"), true);
  assert.equal(sessaoValida(v, "outro"), false);
  assert.equal(sessaoValida(undefined, "s3gredo"), false);
});
