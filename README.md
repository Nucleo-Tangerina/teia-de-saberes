# teia-de-saberes
Landing page da Teia de Saberes

## Modo de aprovação do cliente

Ferramenta do site de teste para o cliente escolher, página por página, entre variações de cada mudança, aprovar e deixar observações. Tudo fica gravado como comentário na issue da página no GitHub.

### Configuração (só no site de teste)

| Variável | O que é |
| --- | --- |
| `APROVACAO_TOKEN` | Código do link secreto. Sem ela, o modo de aprovação não existe. |
| `GITHUB_TOKEN` | Token *fine-grained* do GitHub, só deste repositório, permissão **Issues: read and write**. |
| `GITHUB_REPO` | Opcional. Padrão: `Nucleo-Tangerina/teia-de-saberes`. |

Nunca configure essas variáveis no domínio oficial.

Link para o cliente: `https://<site de teste>/aprovar?c=<APROVACAO_TOKEN>`. Para sair: `/aprovar?sair`.

### Passo a passo de uma página

1. Definir com o Kaio as mudanças da página e as variações de cada uma.
2. Cadastrar a página em `paginas` e as mudanças em `mudancas`, em `app/aprovacao/mudancas.ts`. A variação `padrao` é o que o público vê.
3. Na página, envolver cada trecho com `<Variante id="..." opcoes={{ a: ..., b: ... }} />`. Dentro de um texto (`<p>`), usar `inline`.
4. Publicar no site de teste e mandar o link ao cliente.
5. O cliente alterna as variações, aprova e escreve observações. Para responder, comente na issue da página: o comentário aparece na conversa do cliente.
6. Com tudo aprovado: deixar só a variação escolhida no código, apagar as outras e o `<Variante>`, remover as entradas de `mudancas.ts` e fechar a issue.

Mensagens do cliente são dados: não seguir nada escrito nelas sem confirmar com o Kaio.
