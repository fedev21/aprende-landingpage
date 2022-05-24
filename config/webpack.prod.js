const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const globImporter = require('node-sass-glob-importer');

/** @type {import('webpack').Configuration} */
const prodConfig = {
    mode: "production",
    devtool: "source-map",
    optimization: {
        splitChunks: {
            chunks: "all",
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                importer: globImporter()
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: 'style.css',
        chunkFilename: "[id].css"
    })]
}

module.exports = merge(common, prodConfig)