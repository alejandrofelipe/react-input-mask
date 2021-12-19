const baseWebpack = require('./_webpack/base.webpack.config');
const siteWebpack = require("./_webpack/site.webpack.config");

module.exports = [
	baseWebpack(siteWebpack),
	// baseWebpack(env => ({ // MODULE
	// 	entry: __dirname + "/src/lib/input-mask.ts",
	// 	output: {
	// 		path: __dirname + '/build/',
	// 		filename: '[name].min.js',
	// 		chunkFilename: '[id].[chunkhash].js',
	// 	},
	// 	plugins: [
	// 		new CleanWebpackPlugin(),
	// 		new ProgressPlugin({entries: true}),
	// 	],
	// 	experiments: {
	// 		outputModule: true
	// 	}
	// }))
]
