const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 8001,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			},
			{
				test: /\.vue$/,
				use: [
					'vue-loader',
				],
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
				}
			},
		],
	},
};

