const path = require('path');

module.exports = {
	entry: './src/index.js',
	mode: 'production',
	output: {
		filename: 'moecounter.min.js',
		path: path.resolve(__dirname, 'dist'),
		library: 'moecounter',
		libraryTarget: 'window',
	},
	devtool: 'source-map',
};