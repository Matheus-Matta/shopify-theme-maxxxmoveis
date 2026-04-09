# Maxxxmóveis — Tema Shopify Customizado

Tema Shopify desenvolvido sob medida para a [Maxxxmóveis](https://www.maxxxmoveis.com.br), loja especializada em móveis e decoração. Construído com Liquid, CSS e JavaScript vanilla, sem dependências externas de framework.

🌐 **Acesse a loja:** [maxxxmoveis.com.br](https://www.maxxxmoveis.com.br)

---

## Estrutura do projeto

```
├── assets/          # CSS e JS compilados (base, cart, carousel, plp, product-page, scheduling, theme)
├── config/          # Configurações do tema (settings_schema.json, settings_data.json)
├── layout/          # Layout principal (theme.liquid)
├── locales/         # Traduções (pt-BR)
├── scripts/         # Scripts de automação (sync page routes, fix settings JSON)
├── sections/        # Seções customizadas do tema
├── snippets/        # Snippets reutilizáveis (cards, badges, ratings)
└── templates/       # Templates de página (index, product, collection, cart, etc.)
```

## Seções principais

| Seção | Descrição |
|---|---|
| `header` | Cabeçalho com menu, busca e mini-cart |
| `home-hero` | Banner principal da home |
| `home-categories` | Grade de categorias em destaque |
| `collection-tabs-carousel` | Carrossel de produtos com abas por categoria |
| `product-page-main-custom` | Página de produto customizada |
| `cart-page-custom` | Carrinho com atualização dinâmica |
| `page-agendamento` | Página de agendamento de visita |
| `footer` | Rodapé com links, redes sociais e newsletter |

## Tecnologias

- **Shopify Liquid** — templating
- **Tailwind CSS** (via CDN) + CSS customizado com variáveis globais de design
- **JavaScript vanilla** — sem jQuery ou frameworks
- **Shopify CLI** — deploy e preview local
- **Material Symbols** — ícones

## Scripts de automação

```bash
# Sincronizar rotas de páginas do Shopify
node scripts/sync-shopify-page-routes.mjs

# Corrigir encoding do settings_data.json
node scripts/fix-settings-json.mjs
```

## Deploy

O deploy é feito via Shopify CLI. As tasks do VS Code (`.vscode/tasks.json`) facilitam o fluxo:

- **Shopify: Theme Push Live** — puxa configurações atuais e faz push para o tema publicado
- **Shopify: Theme Push Unpublished** — push para tema de homologação

---

© Maxxxmóveis — Todos os direitos reservados.
