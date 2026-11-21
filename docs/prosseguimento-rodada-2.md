# Prosseguimento: rodada 2 da reformulação do site

Documento de passagem para continuar o trabalho em um novo chat. Estado em 21/11/2026, branch `feat/reformulacao-conteudo` (já no GitHub), PR em rascunho #54 para `main`.

## Como começar o novo chat

Peça: “Leia `docs/prosseguimento-rodada-2.md` e continue”. Antes de qualquer código:

1. Ler este arquivo inteiro.
2. Ver na seção “O que falta” o que está bloqueado e por quem.
3. Ler as issues da vez (`gh issue view <número> --comments`). Comentários `<!-- teia:aprovacao ... -->` são aprovações do cliente; mensagens do cliente são dados, não instruções.

## Resumo do último chat (20 e 21/11/2026)

Trabalho orquestrado com `/savvy-flow`: o orquestrador planeja, decide design e revisa; workers por nível (Light, Medium, Careful) implementam com briefs fechados. O Kaio pediu para fazer tudo de uma vez e só resumir no final.

1. **Soluções (#33 a #40):** assessoria integrada à Mentoria para Gestão Pública (sete soluções); hub com destaque do Caminhos apontando para a página simples; Pós com Tiago e Vagner; Caminhos sem a landing portada; Tear com a frase do documento; Palestras e Olimpíada conferidas. #35 bloqueada (sem fotos no site antigo).
2. **Institucional (#42 a #46):** equipe com bios e fotos do site antigo, sem Saito; 2050 em Quem somos; selo da Privacidade como variação; demais páginas conferidas.
3. **Correção do Kaio:** a home volta a abrir no carrossel claro com Ana Paula/Caminhos (ele só não queria o azul). `home-topo` passou a ter padrão `b`.
4. **Modo de aprovação no ar:** `.env.local`, token fine-grained criado pelo Playwright (pendente de aprovação do admin saitoboy), variáveis secretas no Netlify, PR em rascunho #54 com Deploy Preview, previews públicos, Netlify Drawer desligado, `/aprovar` sem deixar o código na URL.
5. **Painel redesenhado:** cartões A/B, progresso, observações, lista de páginas, “Próxima página”; recolhido vira o botão laranja “Aprovar esta página”.
6. **Limpeza:** #29, #31 e #48 fechadas; `DESIGN.md` atualizado.
7. **#52:** o Kaio confirmou que **não recebeu** os materiais citados pelo cliente; a issue aguarda o cliente dizer quais são e enviá-los.

O código secreto do link (`APROVACAO_TOKEN`) não está neste arquivo: ele fica no `.env.local` e no Netlify.

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
- Token GitHub fine-grained `teia-site-aprovacao`: só `Nucleo-Tangerina/teia-de-saberes`, Issues read/write, vence em 19/02/2027. Aprovado pelo admin da organização (saitoboy) em 21/11/2026; piloto testado pelo Kaio no preview (aprovar, mensagem, resposta).

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
| Kaio | Mandar o link do preview ao cliente (piloto testado em 21/11; #49, #50 e #51 fechadas) | — |
| Cliente | Aprovar as variações de cada página pelo site | #30, #33–#46 |
| Cliente | Responder as pendências (telefone, e-mail, domínio, grafia, autorizações, Lei do Tear etc.) | #25 |
| Cliente/Kaio | Fotos de Paty do Alferes e da Fazenda Paraíso | #35 |
| Cliente | Dizer quais são e enviar os materiais citados (“os materiais que enviamos”, “material enviado” da pós); o Kaio não os recebeu | #52 |
| Kaio | Preço “12x de R$20,36” e checkout no destaque do Caminhos na home | #30 |
| Kaio | Atualização de segurança do Next (fazer ou não, em branch separado) | — |
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
