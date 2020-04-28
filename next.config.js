require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withFonts = require('next-fonts');

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");


const configureWebpack = (config, { dev }) => {
	config.plugins = config.plugins || [];

	config.plugins.push(
		// Read the .env file
		new Dotenv({
			path: path.join(__dirname, '.env'),
			systemvars: true
		})
  );
	
	
	if (config.resolve.plugins) {
		config.resolve.plugins.push(new TsconfigPathsPlugin());
	} else {
		config.resolve.plugins = [new TsconfigPathsPlugin()];
	}
	
	config.module.rules.push({
		test: /\.(eot|woff|woff2|otf|ttf|svg|png|jpg|gif)$/,
		use: [
			{
				loader: 'emit-file-loader',
				options: {
					name: 'dist/[path][name].[ext]',
				},
			}, {
			loader: 'url-loader',
				options: {
					limit: 100000,
					outputPath: 'static/',
					publicPath: '/_next/',
					name: '[name].[ext]'
				}
			}
		]
	});
	
	config.module.rules.push({
		test: /\.(graphql|gql)$/,
		exclude: /node_modules/,
		loader: 'graphql-tag/loader'
	});

	if (dev) {
		config.module.rules.push({
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'eslint-loader',
		})
	}

  return config;
};


module.exports = withImages(
	withSass(
		withCSS(
			withFonts({
				assetPrefix: 'http://localhost:3000',
				webpack: configureWebpack
			})
		)
	)
);
