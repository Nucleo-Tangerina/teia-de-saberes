// Run: node --test app/aprovacao/comentarios.test.ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { corpoAprovacao, corpoMensagem, lerAprovacoes, lerConversa, LIMITE_MENSAGEM } from "./comentarios.ts";

const c = (body: string, created_at = "2026-11-20T12:00:00Z") => ({ body, created_at });

test("a última aprovação de cada mudança vale", () => {
  const cs = [
    c(corpoAprovacao("topo", "Topo", "a", "Atual", new Date()), "1"),
    c(corpoAprovacao("munis", "Municípios", "b", "Faixa", new Date()), "2"),
    c(corpoAprovacao("topo", "Topo", "b", "Antigo", new Date()), "3"),
  ];
  assert.deepEqual(lerAprovacoes(cs), { topo: { variacao: "b", data: "3" }, munis: { variacao: "b", data: "2" } });
});

test("mensagem do cliente volta igual, sem quebrar a cerca", () => {
  const texto = "Prefiro o azul.\n````\n@alguem **negrito**";
  const [fala] = lerConversa([c(corpoMensagem("Início", texto))]);
  assert.equal(fala.autor, "cliente");
  assert.equal(fala.texto, "Prefiro o azul.\n```\n@alguem **negrito**");
});

test("mensagem longa é cortada no limite", () => {
  const [fala] = lerConversa([c(corpoMensagem("Início", "x".repeat(LIMITE_MENSAGEM + 50)))]);
  assert.equal(fala.texto.length, LIMITE_MENSAGEM);
});

test("conversa ignora comentários de planejamento e aprovações", () => {
  const cs = [
    c("Plano da issue, antes do cliente"),
    c(corpoMensagem("Início", "Oi")),
    c(corpoAprovacao("topo", "Topo", "a", "Atual", new Date())),
    c("Resposta do Kaio"),
  ];
  assert.deepEqual(
    lerConversa(cs).map((f) => [f.autor, f.texto]),
    [
      ["cliente", "Oi"],
      ["equipe", "Resposta do Kaio"],
    ],
  );
});
