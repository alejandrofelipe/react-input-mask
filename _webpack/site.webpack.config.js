const path = require('path');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ProgressPlugin = require("webpack/lib/ProgressPlugin")

module.exports = function siteWebpack(env) {
	return { // SITE
		mode: "production",
		entry: path.resolve(__dirname + "/../src/ts/index.ts"),
		output: {
			path: path.resolve(__dirname + '/../site/'),
			filename: 'js/index.min.js',
			chunkFilename: '[id].[chunkhash].js'
		},
		module: {
			rules: [
				{
					test: /\.([tj])sx?$/,
					exclude: /node_modules/,
					use: 'swc-loader',
				},
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						{loader: MiniCssExtractPlugin.loader},
						'css-loader',
						'sass-loader',
						{
							loader: 'postcss-loader',
							options: {postcssOptions: {plugins: ['autoprefixer'],},}
						},
					],
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					type: 'asset/resource',
					generator: {
						filename: 'img/[name][ext]',
					}
				},
				{
					test: /\.(svg)$/i,
					type: 'asset/resource',
					generator: {
						filename: 'icons/[name][ext]',
					}
				},
			]
		},
		plugins: [
			new CleanWebpackPlugin(),
			new ProgressPlugin({entries: true}),
			new MiniCssExtractPlugin({filename: 'css/style.css'}),
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname + '/../src/index.html'),
				filename: 'index.html',
				inject: 'body',
				hash: true,
				minify: {
					collapseWhitespace: true,
					removeComments: true,
					removeRedundantAttributes: true,
					removeScriptTypeAttributes: true,
					removeStyleLinkTypeAttributes: true,
					useShortDoctype: true,
				}
			}),
		],
	};
}
