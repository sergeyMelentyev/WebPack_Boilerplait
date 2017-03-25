var webpack = require("webpack");
var path = require("path");

module.exports = {
	entry: {
		about: "./src/about",
		contact: "./src/contact"
	},
	output: {
		path: path.join(__dirname, "build"),
		filename: "[name].bundle.js"
	},
	devServer: {
		inline: true,
		contentBase: "./build",
		port: 3000
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				query: {
					presets: ["es2015", "react"]
				}
			},
			{
				test: /\.(png|jpg)$/,
				loader: "url-loader"
			},
			{
				test: /\.css$/,
				exclude: /(node_modules)/,
				loader: "style-loader!css-loader",
			}
		]
	}
};
