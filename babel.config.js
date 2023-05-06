module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					extensions: [
						'.ios.js',
						'.android.js',
						'.ios.jsx',
						'.android.jsx',
						'.js',
						'.jsx',
						'.json',
						'.ts',
						'.tsx',
					],
					root: ['.'],
					alias: {
						'~assets': './src/assets',
						'~components': './src/components',
						'~fonts': './src/assets/fonts',
						'~hooks': './src/hooks',
						'~helpers': './src/helpers',
						'~imgs': './src/assets/img',
						'~screens': ['./src/screens'],
						'~store': './src/store',
						'~styles': './src/assets/ts/styles',
					},
				},
			],
		],
	};
};
