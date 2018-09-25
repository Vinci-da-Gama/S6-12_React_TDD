module.exports = {
	plugins: {
		'postcss-import': {},
		'cssnano': {
			preset: ['default', {
				discardComments: {
					removeAll: true,
				}
			}]
		},
		'postcss-preset-env': {
            // stage: 3,
            browsers: [
                'last 4 versions',
                '> 2%',
                'Firefox ESR',
                'not ie < 9'
            ],
            autoprefixer: {
                grid: true
            },
            flexbox: 'no-2009'
        }
	}
};
