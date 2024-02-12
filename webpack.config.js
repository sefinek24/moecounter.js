const path = require('path');

module.exports = {
	entry: './src/index.js',
	mode: 'production',
	output: {
		filename: 'browser.min.js',
		path: path.resolve(__dirname, 'dist'),
		library: 'emailValidator',
		libraryTarget: 'window',
	},
	devtool: 'source-map',
};