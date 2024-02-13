const path = require('path');

module.exports = {
	entry: './src/index.js',
	mode: 'production',
	output: {
		filename: 'browser/moecounter.min.js',
		path: path.resolve(__dirname, 'dist'),
		library: 'moecounter',
		libraryTarget: 'umd',
		globalObject: 'this',
	},
	devtool: 'source-map',
};