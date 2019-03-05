const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

var config = {
    entry: {
        app: './src/app.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                },
                    "css-loader"
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?name=images/[name].[ext]&limit=1'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: '新闻管理后台'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash:8].css',
            chunkFilename: '[id].[hash:8].css',
        })
    ]
};
  
module.exports = (env, argv) => {  
    if (argv.mode === 'development') {
        config.devtool = 'source-map';
        config.devServer = {
            contentBase: './dist',
            hot: true,
            historyApiFallback: true,
        };
    }
  
    if (argv.mode === 'production') {
    }

    return config;
};