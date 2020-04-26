const path = require('path');
module.exports = {
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  sections: [
    {
      name: 'Components',
      components: 'components/*/index.{ts,tsx}',
      exampleMode: 'expand',
      usageMode: 'expand'
    }, {
      name: 'Page Sections',
      components: 'components/sections/*/index.tsx',
      exampleMode: 'expand',
      usageMode: 'expand'
    }, {
      name: 'Custom PDP Components',
      components: 'components/pdp/*/index.tsx',
      exampleMode: 'expand',
      usageMode: 'expand'
    }
  ],
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json'
  ).parse,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader'
        },
        {
          test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000,
              name: '[name].[ext]'
            }
          }
        },
      ]
    }
  },
  theme: {
    spaceFactor: 2
  }
}
