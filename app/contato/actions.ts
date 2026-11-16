"use server";

import { fields, looksLikeSpam, validateContact, type ContactData, type Field } from "./validate";

export type ContactState = {
  status: "idle" | "error" | "sent";
  message?: string;
  errors?: Partial<Record<Field | "consentimento", string>>;
  values?: Partial<ContactData>;
};

const labels: Record<Field, string> = {
  nome: "Nome",
  email: "E-mail",
  telefone: "Telefone/WhatsApp",
  municipio: "Município ou instituição",
  estado: "Estado",
  cargo: "Cargo ou função",
  interesse: "Área de interesse",
  mensagem: "Mensagem",
};

/**
 * Sends the request by e-mail through Resend's HTTP API. Needs RESEND_API_KEY,
 * CONTACT_TO (team inbox) and CONTACT_FROM (verified sender). Without them the
 * form says so instead of pretending to send.
 */
export async function sendContact(_prev: ContactState, form: FormData): Promise<ContactState> {
  // Quietly drop bots without telling them why.
  if (looksLikeSpam(form)) return { status: "sent" };

  const { data, errors } = validateContact(form);
  if (Object.keys(errors).length) {
    return { status: "error", message: "Revise os campos destacados.", errors, values: data };
  }

  const { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM) {
    console.error("contato: RESEND_API_KEY, CONTACT_TO or CONTACT_FROM not set");
    return {
      status: "error",
      message: "O envio pelo site está indisponível no momento. Fale conosco pelo WhatsApp (13) 99208-1120.",
      values: data,
    };
  }

  const text = fields.map((f) => `${labels[f]}: ${data[f]}`).join("\n") + "\n\nConsentimento LGPD: sim";
  // ponytail: no rate limit beyond honeypot + timing; add one if spam gets through
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: CONTACT_FROM,
      to: CONTACT_TO.split(",").map((s) => s.trim()),
      reply_to: data.email,
      subject: `Contato pelo site: ${data.interesse} · ${data.municipio}${data.estado ? `/${data.estado}` : ""}`,
      text,
    }),
  }).catch(() => null);

  if (!res?.ok) {
    console.error("contato: send failed", res?.status, await res?.text().catch(() => ""));
    return {
      status: "error",
      message: "Não conseguimos enviar sua mensagem agora. Tente novamente em instantes ou fale conosco pelo WhatsApp (13) 99208-1120.",
      values: data,
    };
  }
  return { status: "sent" };
}
