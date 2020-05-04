const merge = require('webpack-merge');
const webpack = require('webpack');
const base = require('./webpack.base.config');
const config = require('./env.config');

module.exports = merge(base, {
    mode: 'development',
    devServer: {
        inline: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.DefinePlugin({
            process: {
                env: {
                    'API_URL': JSON.stringify(config.DEVELOPMENT.API_URL)
                }
            }
        })
    ],
    devtool: '#eval-source-map', // To show console output from original file instead of showing from bundle file
});