module.exports = {
	entry: "./src/main.js",
	output: {
		path: "/Users/olgarezchikova/WebstormProjects/webpackStarter/build",
		filename: "bundle.js"
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
				test: /\.css$/,
				exclude: /(node_modules)/,
				loader: "style-loader!css-loader",
			}
		]
	}
};
