import config from './graphql.config.json';

const shopify = config.generates['models/shopify.model.ts'].schema[0];
const url = Object.keys(shopify)[0];
const { headers } = shopify[url];

export default {
  client: {
    service: {
      name: 'shopify',
      url,
      headers,
    },
    excludes: ['**/node_modules/**/*'],
    includes: ['**/*.{ts,tsx}'],
  },
};
