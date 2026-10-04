# Avaliações de produto — contrato tema ↔ StarHub

O tema envia a avaliação ao StarHub, que modera e publica as aprovadas na Shopify.
A página do produto só lê da Shopify (Liquid), nunca do hub.

Arquivos do tema: `sections/product-reviews.liquid`, `snippets/product-review-item.liquid`,
`assets/product-reviews.js`.

## 1. Configuração na Shopify (Admin)

**Metafield da loja** `custom.reviews_secret` (texto de uma linha)
- Valor: segredo aleatório longo, o mesmo de `segredo_avaliacoes` da configuração no hub (já configurado em 2026-10-03).
- Desligar o acesso pela Storefront API nessa definição. O Liquid lê o segredo no servidor e só a assinatura vai para o HTML.

**Metaobject** `avaliacao_produto` (publicado pelo hub)

| Chave | Tipo | Observação |
|---|---|---|
| `product` | Referência de produto | |
| `author` | Texto de uma linha | "Matheus S." |
| `rating` | Inteiro (1–5) | |
| `body` | Texto multilinha | texto puro; o tema escapa o HTML |
| `photos` | Lista de arquivos (imagens) | até 3 |
| `verified` | Verdadeiro/falso | compra verificada |
| `date` | Data | data do envio |

Criada pelo hub (`apps/shopify/consultas_avaliacoes.py`) no primeiro envio; só aprovadas são publicadas.
Habilitar "Storefronts" (acesso pelo Liquid) na definição.

**Metafields do produto**
- `custom.reviews`: lista de referências a `avaliacao_produto`, com as mais recentes primeiro. O hub inclui o metaobject ao aprovar e remove ao rejeitar ou despublicar.
- `custom.rating_value` (decimal) e `custom.review_count` (inteiro): já existem. O hub recalcula os dois ao aprovar ou rejeitar. Eles alimentam as estrelas dos cards, o topo da PDP e o JSON-LD.

**No tema:** em Personalizar → Produto → "Avaliações do produto", preencher a **URL da API**.

## 2. API do StarHub

Base: `{hub}/integracoes/shopify/avaliacoes/{configuracao_id}/`. Em dev: `https://j4b52cnr-8000.brs.devtunnels.ms/integracoes/shopify/avaliacoes/1/`.
O segredo é `ConfiguracaoIntegracao.segredo_avaliacoes` no hub e deve ser igual a `shop.metafields.custom.reviews_secret`.

**Token:** `payload = "{customer.id}:{product.id}:{unix_ts}"` e `sig = hex(HMAC_SHA256(segredo, payload))`.
O token vale 2 h, com folga de 5 min para o futuro. O hub tira cliente e produto só do payload assinado.

**`GET ?payload=…&sig=…`** devolve `{"avaliou": bool, "status": "pendente"|"aprovada"|…}`.
O tema chama ao abrir a página e, se `avaliou` for verdadeiro, troca o formulário por "Você já avaliou este produto".

**`POST` multipart** com: `payload`, `sig`, `nota` (1–5), `comentario` (10–1500 caracteres, já com `trim`), `fotos` (0–3 arquivos; JPEG comprimido no navegador para ≤1600px, ou PNG/WebP/GIF/HEIC original) e `product_handle` (só para debug).

| Status | Corpo | Tema |
|---|---|---|
| 201 | `{"id", "status", "compra_verificada", "mensagem"}` | "Obrigado pela sua avaliação!" |
| 400 com `campo` | `{"erro", "mensagem", "campo"}` | mostra `mensagem` (erro do formulário) |
| 409 `avaliacao_existente` | idem | "Você já avaliou este produto" |
| 413 | | "As fotos ficaram grandes demais..." |
| qualquer outro (401, 404, outros 409, 429, 5xx, rede) | | "Algo inesperado ocorreu..." — detalhes do hub não vão para o cliente |

Rejeitada ou excluída no hub não conta como "já avaliou": o GET responde `avaliou: false` e o cliente pode enviar de novo.

## 3. Cache no navegador

Depois de um 201, de um 409 `avaliacao_existente` ou de um GET com `avaliou: true`, o tema grava `rv-sent:{product_id}:{customer_id}` no localStorage só para não piscar o formulário; a cada visita o GET do hub decide e, se `avaliou` for falso, a marca é apagada e o formulário volta. A regra que vale de verdade é a constraint de unicidade no hub (que ignora rejeitadas).
