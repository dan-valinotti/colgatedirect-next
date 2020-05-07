require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withOptimizedImages = require('next-optimized-images');

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");


const configureWebpack = (config, { dev, isServer }) => {
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
		test: /\.(eot|woff|woff2|otf|ttf)$/,
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
		test: /\.(jpe?g|png|svg|gif)$/,
		use: [
			{
				loader: "file-loader",
				options: {
					emitFile: isServer,
					publicPath: `/_next/static/`,
					outputPath: `${isServer ? '../' : ''}static/`,
					name: "[name]-[hash].[ext]"
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

	// Set absolute import path for components folder
	// ie: './components/ui' becomse 'components/ui'
	config.resolve.alias['components'] = path.join(__dirname, 'components');

  return config;
};


module.exports = withOptimizedImages(
	withFonts({
		webpack: configureWebpack
	})
);
