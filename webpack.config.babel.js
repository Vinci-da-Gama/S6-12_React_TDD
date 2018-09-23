import nPath              from 'path';
import wpk                from 'webpack';
import WriteFilePlugin    from 'write-file-webpack-plugin';
import UglifyJsPlugin     from 'uglifyjs-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin  from 'html-webpack-plugin';
import OptimizeCSSAssetsPlugin  from "optimize-css-assets-webpack-plugin";
// faviconWebpackPlugin is for application, donot use it for website.
// import FavcWpkPlugin      from 'favicons-webpack-plugin';
import wpkMerge           from 'webpack-merge';


const ast = './_asserts', distDir = `${ast}/dist`, 
    communal = './communal', devSrc = `${communal}/src/`;
const entryIdx = `${devSrc}index.js`;
const npmLifecycle = process.env.npm_lifecycle_event;
console.log('19 -- npmLifecycle: ', npmLifecycle);
const isProduction = npmLifecycle === 'build:prod';

const extractSCSS = new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true
});

/* const miniExtractSCSS = new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: '[name].css',
    chunkFilename: isProduction ? '[id].css' : '[id].[hash:3].css',
}); */

const pathsToClean = [
    `${distDir}/js/`,
    `${distDir}/*.json`,
    `${distDir}/*.js`/* ,
    `${distDir}/*.css` */
];

const cleanOptions = {
    watch: true
};

const commonConfig = {
    // for development.
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    entry: {
        testApp: [
            'babel-polyfill',
            'webpack/hot/only-dev-server',
            entryIdx
        ]
    },
    output: {
        path: nPath.resolve(__dirname, `${distDir}`),
        // publicPath: '/',
        // filename: `/js/[name]-[hash:6]_bundle.js`,
        filename: 'js/[name]_bundle.js',
        pathinfo: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: { presets: ['env', 'react', 'stage-3'] }
                    }/* ,
                    { loader: 'eslint-loader' } */
                ]
            },
            {   
                test: /\.(sa|sc|c)ss$/,
                use: ExtractTextPlugin.extract({
                    // fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader',
                            options: { minimize: true, sourceMap: true }
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
                /* use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    { 
                        loader: 'css-loader',
                        options: { minimize: true, sourceMap: true, importLoaders: 1 }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ] */
            },
            {
                test: /\.(ttf|otf|eot|svg|woff|jpe?g$|gif|png|ico|xml|json)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 10000,
                            fallback: 'file-loader',
                            name: '[name].[ext]',
                            // useRelativePath: true
                            // publicPath: `${ast}`,
                            outputPath: '../img'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss', 'less']
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js($|\?)/i,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        /* new FavcWpkPlugin({
            logo: nPath.resolve(__dirname, `${communal}/img/favicon.ico`),
            emitStats: false,
            prefix: '../dist/icons-[hash:5]/',
            // persistentCache: true,
            inject: true, // inject into HtmlWebpackPlugin, when favicon is not used in HtmlWebpackPlugin.
            background: '#7ec0ee',
            // title: 'only use it when it is not html(native code), thus no title tag',
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: false,
                favicons: true,
                firefox: true,
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: false
            }
        }), */
        new wpk.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebpackPlugin({
            title: 'Test_ShowCase',
            template : nPath.resolve(__dirname, `${communal}/index.html`),
            filename: '../index.html',
            // when it is website, then use favicon here, due to it only requires one favicon.
            favicon: nPath.resolve(__dirname, `${communal}/img/favicon_0.ico`),
            // js and css insertd into template already, do inject again, otherwise, it cause use babel-polyfill twice.
            inject: false,
            minify: true
        }),
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new wpk.HotModuleReplacementPlugin(),
        new wpk.optimize.OccurrenceOrderPlugin(),
        new wpk.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        /*when you use webpack-dev-server and you also want to output bundle.js*/
        new WriteFilePlugin(),
        extractSCSS
        // miniExtractSCSS
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: nPath.resolve(__dirname, `${ast}`),
        publicPath: `${ast}`,
        stats: {
            colors: true,
            timings: true,
            cached: false
        },
        quiet: false,
        noInfo: false
    }
};

// you also can define customized host and port here.
/* const processHostAndPort = {
    host: process.env.HOST,
    port: process.env.PORT
}; */

let wpkConfig;

// Detect how npm is run and branch based on that
switch(npmLifecycle) {
    case 'build:dev':
        console.log('186 -- development configutation...');
        wpkConfig = wpkMerge(commonConfig, {});
        break;
    default:
        console.log('190 -- default wpk configutation...');
        wpkConfig = wpkMerge(commonConfig, {});
        break;
}

module.exports = wpkConfig;