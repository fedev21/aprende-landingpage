const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].[contenthash].js",
        publicPath: ""
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /.(js)$/,
                exclude: /node_modules/
            },
            {
                type: "asset",
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json"],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}