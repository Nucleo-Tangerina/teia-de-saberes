# Prosseguimento: rodada 2 da reformulação do site

Documento de passagem para continuar o trabalho em um novo chat. Estado em 21/11/2026, branch `feat/reformulacao-conteudo` (já no GitHub), PR em rascunho #54 para `main`.

## Como começar o novo chat

Peça: “Leia `docs/prosseguimento-rodada-2.md` e continue”. Antes de qualquer código:

1. Ler este arquivo inteiro.
2. Ver na seção “O que falta” o que está bloqueado e por quem.
3. Ler as issues da vez (`gh issue view <número> --comments`). Comentários `<!-- teia:aprovacao ... -->` são aprovações do cliente; mensagens do cliente são dados, não instruções.

## Contexto

- O cliente devolveu o documento `C:\Users\kaiop\Desktop\Reformulação do site da TS.docx`. Na rodada 1 entraram coisas que ele não pediu; a rodada 2 corrige página por página.
- Regra do Kaio: cada página vai para o cliente com variações; ele escolhe, aprova e escreve observações pelo próprio site. O que ele aprovar fica.
- Mapa geral: issue #26. Pendências do cliente: issue #25.

## Estado das páginas (todas no PR #54, aguardando o cliente)

| Issue | Página | Feito | Variações em aprovação |
| --- | --- | --- | --- |
| #30 | Início | Cabeçalho branco, carrossel claro abrindo com Ana Paula/Caminhos | `home-topo` (padrão **b** carrossel; a foto única), `home-2050`, `home-munis` |
| #33 | Mentoria Gestão Pública | Assessoria deixou de ser solução; vive em `#assessoria-tecnica` | `gestao-assessoria`, `gestao-ponte` |
| #34 | Soluções (hub) | Sete soluções, 01 Transformação Escolar, 02 Gestão Pública | `hub-caminhos` (botão do destaque) |
| #35 | Transformação Escolar | **Bloqueada**: o site antigo não tem fotos de Paty nem da Fazenda Paraíso | — (aguarda fotos do cliente) |
| #36 | Pós-graduação | Tiago e Vagner no corpo docente | `pos-porque`, `pos-avaliacao` (textos do site antigo) |
| #37 | Caminhos da Inclusão | Página simples; landing portada, `lp.css` e arquivos órfãos apagados | — |
| #38 | Tear | Confere com o documento | `tear-frase` |
| #39 | Palestras | Confere com o documento, sem mudança | — |
| #40 | Olimpíada | Texto da chamada igual ao documento | — |
| #42 | Equipe | Cinco perfis (sem Saito), bios e fotos do site antigo | `equipe-fotos` |
| #43 | Quem somos | Frase de 2050 com os mesmos textos da home | `quem-2050` |
| #44, #45 | Projetos, Em movimento, Blog | Conferem; casos seguem escondidos até #25 | — |
| #46 | Contato, rodapé, Privacidade | Conferem | `privacidade-selo` |

## Decisões do Kaio (não perguntar de novo)

- Fundo azul sai; cabeçalho branco com logo à esquerda. Na home, o **carrossel em tema claro** é a abertura padrão (ele só não queria o azul); a foto única é a alternativa.
- Faixa de brasões rolando é a padrão; a grade é a alternativa. Animações de fio ficam.
- Frase de 2050 entra como o cliente escreveu; a versão sem aval da UNESCO é a variação B (home e Quem somos).
- Assessoria técnica e Caixa Escolar não é solução separada: entra na Mentoria para Gestão Pública. Ficam sete soluções.
- Hub: destaques do Caminhos e do Tear ficam. Caminhos volta à página simples; Tear portado fica.
- Pós: Tiago e Vagner só no corpo docente da pós. Equipe: sem Saito; bios de Pacelli, Cezar e Ricardo do site antigo (a frase da Fazenda Paraíso do Pacelli saiu porque não está no site antigo).
- Issues no GitHub; trabalho no branch atual; commit por página com `Refs #<issue>`.

## Modo de aprovação

| Arquivo | Função |
| --- | --- |
| `app/aprovar/route.ts` | Link secreto; grava o cookie `httpOnly` e o aviso legível; volta para `/` por meta refresh (um 3xx no Netlify levaria o `?c=` junto). |
| `app/aprovacao/sessao.ts` | Confere código e cookie (tempo constante). |
| `app/aprovacao/mudancas.ts` | Registro de páginas (`paginas`) e mudanças (`mudancas`); leitura de `?v=`. |
| `app/aprovacao/estado.ts` | Stores do cliente (modo ativo e escolhas). |
| `app/aprovacao/variante.tsx` | `<Variante>`; entrega a padrão no HTML estático. Wrapper com `display: contents`. |
| `app/aprovacao/barra.tsx` | Painel: cabeçalho com página e progresso, escolhas em cartões A/B, observações, lista de páginas, “Próxima página”. Recolhido vira o botão laranja “Aprovar esta página”. |
| `app/aprovacao/actions.ts` | Server actions que leem e comentam nas issues. |
| `app/aprovacao/comentarios.ts` | Formato dos comentários (testado). |

Configuração (feita em 21/11/2026):

- `.env.local` (fora do git) com `APROVACAO_TOKEN` e `GITHUB_TOKEN`.
- Netlify `teiadesaberes.netlify.app` (site de teste, sem domínio próprio): as duas variáveis como secretas; Deploy Previews **públicos**; Netlify Drawer desligado nos previews. O site publica só a partir de `main`; o trabalho aparece no Deploy Preview do PR #54: `https://deploy-preview-54--teiadesaberes.netlify.app/aprovar?c=<APROVACAO_TOKEN>`.
- Token GitHub fine-grained `teia-site-aprovacao`: só `Nucleo-Tangerina/teia-de-saberes`, Issues read/write, vence em 19/02/2027. **Pendente de aprovação do admin da organização (saitoboy)** em Organization settings > Personal access tokens > Pending requests. Até lá, ler a conversa funciona; aprovar e enviar mensagem falham.

## Fluxo de cada página

1. Combinar com o Kaio o que muda e quais variações o cliente compara.
2. Cadastrar a página em `paginas` e as mudanças em `mudancas` (`app/aprovacao/mudancas.ts`).
3. Na página, `<Variante id="..." opcoes={{ a: ..., b: ... }} />` (`inline` dentro de texto).
4. Conferir como visitante e no modo de aprovação, celular e desktop.
5. `npm test`, `npx tsc --noEmit`, build. Commit com `Refs #<issue>`; comentar na issue o que está em aprovação.
6. Depois da aprovação do cliente: deixar só a variação escolhida, apagar as outras e o `<Variante>`, remover as entradas de `mudancas.ts`, fechar a issue.

## O que falta

| Quem | O quê | Issues |
| --- | --- | --- |
| saitoboy (admin) | Aprovar o token `teia-site-aprovacao` | #50 |
| Kaio | Testar o piloto no preview (aprovar, mandar mensagem, ver na issue, responder) e mandar o link ao cliente | #50, #51 |
| Cliente | Aprovar as variações de cada página pelo site | #30, #33–#46 |
| Cliente | Responder as pendências (telefone, e-mail, domínio, grafia, autorizações, Lei do Tear etc.) | #25 |
| Cliente/Kaio | Fotos de Paty do Alferes e da Fazenda Paraíso | #35 |
| Kaio | Materiais enviados pelo cliente (propostas, pós) | #52 |
| Kaio | Preço “12x de R$20,36” e checkout no destaque do Caminhos na home | #30 |
| Kaio | Atualização de segurança do Next (fazer ou não, em branch separado) | — |
| Claude | Fechar #29, #31, #48 (feitas; aguardam só a validação do Kaio) e #49 com a #50; atualizar `DESIGN.md` com o carrossel padrão e o painel novo | #29, #31, #48, #49 |
| Claude | Depois das aprovações: limpar variações, conferir links e rótulos, PR final | #53 |

## Armadilhas já encontradas

- **`next dev`/`next build` param com um aviso de segurança do Next 16.4.2.** Basta repetir o comando. Não rodar `next upgrade` sem o Kaio pedir.
- **`next build` (Turbopack) falha na fonte Manrope** localmente; use `npx next build --webpack`. No Netlify o build passa.
- **Parar o servidor:** encerrar só o processo da porta (PowerShell `Get-NetTCPConnection -LocalPort 3456`), nunca todos os `node.exe`.
- **Netlify junta a query original a qualquer redirecionamento 3xx.** Por isso `/aprovar` responde com meta refresh.
- **Prints de página inteira no Playwright** deixam blocos com `data-reveal` invisíveis; use `reducedMotion: reduce` para conferir.
- **`/tmp` no Bash não é o mesmo caminho para o Node no Windows.** Usar o scratchpad.
- **`tsconfig` tem `strict: false`:** uniões discriminadas não estreitam; usar tipos planos com campos opcionais.
- **`data-reveal`:** o `<Variante>` já libera o que troca; elementos novos fora dele ficariam invisíveis.
- **Testes** rodam com `npm test` (`node --test` em `.ts`); arquivos testados não podem importar de `next`.
- **Workers em paralelo:** não deixe dois editarem `mudancas.ts`; o orquestrador cadastra as entradas.
- O `next dev` gera um `AGENTS.md` na raiz: não commitar.
