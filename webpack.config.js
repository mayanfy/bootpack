const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const config = {

    entry: './src/app.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },

    watch: true,

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader: 'css-loader', 
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|otf)$/,
                include: path.join(__dirname, "node_modules"),
                exclude(path) {
                    // You can perform more complicated checks  as well.
                    return path.match(/src/);
                },
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                        publicPath: "../fonts" // definimos la ruta que se pondra en el css de salida
                    }
                }]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                include: path.join(__dirname, "src"),
                exclude(path) {
                    // You can perform more complicated checks  as well.
                    return path.match(/node_modules/);
                },
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/',
                        publicPath: "../images" // definimos la ruta que se pondra en el css de salida
                    }
                }]
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            publicPath: "./images"
                        }
                    },
                    {
                        loader: 'pug-html-loader', 
                        options: { 
                            pretty: "    " 
                        }
                    }
                ]
            }
        ]
    }
    ,
    plugins: [
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['dist'] }
        }),
        new MiniCssExtractPlugin({
            filename: "css/bootstrap.css"
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.pug'
        })
    ]
};

module.exports = config;