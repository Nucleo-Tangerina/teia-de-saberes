// Pure validation for the institutional contact form (shared by the server
// action and its test). Messages are shown to the visitor as-is.

export const interests = [
  "Mentoria para Gestão Pública",
  "Mentoria para Transformação Escolar",
  "Palestras e Formações",
  "Pós-graduação",
  "Outras soluções",
] as const;

export const UFS = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA",
  "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO",
] as const;

export const fields = ["nome", "email", "telefone", "municipio", "estado", "cargo", "interesse", "mensagem"] as const;
export type Field = (typeof fields)[number];
export type ContactData = Record<Field, string>;

const max: Record<Field, number> = {
  nome: 120, email: 160, telefone: 30, municipio: 120, estado: 2, cargo: 120, interesse: 60, mensagem: 3000,
};

export function validateContact(form: FormData): { data: ContactData; errors: Partial<Record<Field | "consentimento", string>> } {
  const data = Object.fromEntries(fields.map((f) => [f, String(form.get(f) ?? "").trim()])) as ContactData;
  const errors: Partial<Record<Field | "consentimento", string>> = {};

  for (const f of fields) if (data[f].length > max[f]) errors[f] = "Texto muito longo.";
  if (data.nome.length < 3) errors.nome = "Informe seu nome completo.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) errors.email = "Informe um e-mail válido.";
  if (data.telefone.replace(/\D/g, "").length < 10) errors.telefone = "Informe telefone com DDD.";
  if (data.municipio.length < 2) errors.municipio = "Informe o município.";
  if (!(UFS as readonly string[]).includes(data.estado)) errors.estado = "Selecione o estado.";
  if (data.cargo.length < 2) errors.cargo = "Informe seu cargo ou função.";
  if (!(interests as readonly string[]).includes(data.interesse)) errors.interesse = "Selecione uma área de interesse.";
  if (data.mensagem.length < 10) errors.mensagem = "Conte um pouco sobre a sua rede (mínimo de 10 caracteres).";
  if (form.get("consentimento") !== "on") errors.consentimento = "É preciso concordar com a Política de Privacidade.";

  return { data, errors };
}

/** Bots fill hidden fields and submit instantly; humans do neither. */
export function looksLikeSpam(form: FormData, now = Date.now()): boolean {
  const started = Number(form.get("inicio"));
  return String(form.get("empresa") ?? "") !== "" || !started || now - started < 3000;
}
