const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'script.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader',
                {
                    loader: 'eslint-loader',
                    options: {
                        fix: true,
                    },
                }],
        }, {
            test: /\.pug$/,
            use: ['html-loader?attrs=false', 'pug-html-loader']
        },
        {
            test: /\.(css|scss)$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        minimize: true,
                    },
                },
                { loader: 'css-loader' },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            autoprefixer({
                                overrideBrowserslist: ['last 2 versions'],
                            }),
                        ],
                        sourceMap: true,
                    },
                },
                { loader: 'sass-loader' },
            ],
        }, {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]',
                    },
                },
            ],
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.pug',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'product.html',
            template: 'src/product.pug',
            inject: false
        })
    ]
};
module.exports = config;