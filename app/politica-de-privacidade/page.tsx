import type { Metadata } from "next";
import Link from "next/link";
import { Badge, PageHero } from "../ui";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como a Teia de Saberes trata os dados pessoais enviados pelo site, em conformidade com a LGPD.",
  alternates: { canonical: "/politica-de-privacidade" },
};

// Draft structure only: the final text must come from the organization's legal advice.
export default function Privacidade() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Política de Privacidade" }]}
        eyebrow="PRIVACIDADE"
        title="Política de Privacidade"
        lead="Como tratamos os dados pessoais que você envia pelo site, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)."
      />
      <section className="section container">
        <div className="prose">
          <Badge>RASCUNHO · TEXTO A VALIDAR COM ASSESSORIA JURÍDICA ANTES DA PUBLICAÇÃO</Badge>

          <h2>Quais dados coletamos</h2>
          <p>
            Pelo formulário de contato coletamos: nome completo, e-mail profissional, telefone/WhatsApp, município,
            estado, cargo ou função, área de interesse e a mensagem enviada.
          </p>

          <h2>Para que usamos</h2>
          <p>
            Os dados são usados exclusivamente para responder à sua solicitação e apresentar possibilidades de atuação
            da Teia de Saberes para a sua rede de ensino.
          </p>

          <h2>Base legal</h2>
          <p>
            O tratamento se baseia no seu consentimento, registrado no envio do formulário, e pode ser revogado a
            qualquer momento.
          </p>

          <h2>Com quem compartilhamos</h2>
          <p>
            As mensagens são encaminhadas à equipe responsável por meio de um provedor de envio de e-mails. Não vendemos
            nem compartilhamos seus dados para fins de publicidade.
          </p>

          <h2>Por quanto tempo guardamos</h2>
          <p>Pelo tempo necessário para atender à solicitação e cumprir obrigações legais. Prazo a definir.</p>

          <h2>Seus direitos</h2>
          <p>
            Você pode solicitar acesso, correção, anonimização, portabilidade ou exclusão dos seus dados, além de
            informações sobre o compartilhamento, nos termos do art. 18 da LGPD.
          </p>

          <h2>Como falar conosco</h2>
          <p>
            Pelos canais oficiais indicados na página de <Link href="/contato">contato</Link>. Encarregado pelo tratamento
            de dados (DPO): a definir.
          </p>
        </div>
      </section>
    </>
  );
}
