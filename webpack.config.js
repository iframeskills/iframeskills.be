var path = require('path');
var webpack = require('webpack');

module.exports = {
	cache: true,
	context: path.join(__dirname, 'js'),
	entry: {
		equotecar: './equotecar'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: 'dist/',
		filename: '[name].js',
		chunkFilename: '[chunkhash].js'
	},
	resolve: {
		modulesDirectories : ['node_modules', 'libs/'],
		alias: {
			// Bind version of jquery
			'jquery': 'jquery.min',
			'scrollReveal': 'scrollReveal.min',
			'moment': 'moment/moment.min',
			'jquery-ui': 'jquery-ui/jquery-ui.min'
		}
	},
	plugins: [
		new webpack.ProvidePlugin({
			// Automatically detect jQuery and $ as free var in modules
			// and inject the jquery library
			// This is required by many jquery plugins
			'jQuery': 'jquery',
			'$': 'jquery',
			'window.jQuery': 'jquery',
			'moment': 'moment'
		}),
		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/) /* ignore the locale require in moment library */
		/* new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en|no|hu/) */ /* alternatively, only include needed locales... */
	]
};
