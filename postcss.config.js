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
            browsers: ['last 2 versions', '> 5%'],
            autoprefixer: {
                grid: true
            }
        }
	}
};
