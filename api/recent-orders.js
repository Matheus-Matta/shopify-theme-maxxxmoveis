/**
 * Vercel Serverless Function — /api/recent-orders
 * Busca pedidos PAGOS das últimas 48h via Shopify Admin GraphQL.
 * Todos os dados são reais: cliente, produto, preço, imagem, localização.
 *
 * Env vars no Vercel:
 *   SHOPIFY_STORE_DOMAIN  = totvsrj-maxxxmoveis-dc.myshopify.com
 *   SHOPIFY_ADMIN_TOKEN   = shpat_...
 *   SHOPIFY_API_VERSION   = 2025-01
 */
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET')    return res.status(405).json({ error: 'Method not allowed' });

  const store   = process.env.SHOPIFY_STORE_DOMAIN;
  const token   = process.env.SHOPIFY_ADMIN_TOKEN;
  const version = process.env.SHOPIFY_API_VERSION || '2025-01';
  if (!store || !token) return res.status(500).json({ error: 'Missing credentials' });

  // Últimas 48 horas
  const cutoff = new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString();
  const queryFilter = `financial_status:paid created_at:>${cutoff}`;

  const gql = `
    query($q: String!) {
      orders(first: 30, sortKey: CREATED_AT, reverse: true, query: $q) {
        edges {
          node {
            createdAt
            totalPriceSet { shopMoney { amount currencyCode } }
            billingAddress { firstName lastName city province country countryCode }
            lineItems(first: 1) {
              edges {
                node {
                  title
                  variant {
                    image { url }
                    product { handle }
                  }
                }
              }
            }
          }
        }
      }
    }`;

  try {
    const r = await fetch(`https://${store}/admin/api/${version}/graphql.json`, {
      method: 'POST',
      headers: { 'X-Shopify-Access-Token': token, 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: gql, variables: { q: queryFilter } }),
    });

    if (!r.ok) return res.status(502).json({ error: 'Shopify API error', status: r.status });

    const json = await r.json();
    if (json.errors) return res.status(502).json({ error: 'GraphQL error', details: json.errors });

    const edges = json?.data?.orders?.edges || [];

    const orders = edges
      .filter(({ node }) => node.lineItems?.edges?.length > 0 && node.billingAddress?.firstName)
      .map(({ node }) => {
        const b = node.billingAddress || {};
        const li = node.lineItems.edges[0].node;
        const v  = li.variant || {};
        const m  = node.totalPriceSet?.shopMoney || {};

        // Nome real: Primeiro nome + inicial sobrenome
        const last = (b.lastName || '').trim();
        const customerName = b.firstName.trim() + (last ? ' ' + last.charAt(0) + '.' : '');

        // Localização real
        const city = (b.city || '').trim();
        const prov = (b.province || '').trim();
        const ctry = (b.country || '').trim();
        let location = null;
        if (city && prov)       location = `${city}, ${prov}`;
        else if (city && ctry)  location = `${city}, ${ctry}`;
        else if (city)          location = city;

        return {
          customerName,
          location,
          productTitle:  li.title || 'Produto',
          productHandle: v?.product?.handle || null,
          imageUrl:      v?.image?.url || null,
          price:         parseFloat(m.amount || 0),
          currency:      m.currencyCode || 'BRL',
          createdAt:     node.createdAt,
        };
      });

    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=60');
    return res.status(200).json({ orders });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal error' });
  }
}
