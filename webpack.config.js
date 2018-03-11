const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';
const isProd = env === 'production';

module.exports = {
    entry: {
        bundle: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html'
        })
    ],
    module: {
        rules: [{
            test: /\.js/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },{
            test: /(\.css|\.scss)$/,
            exclude: /node_modules/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                { loader: 'sass-loader' }
            ]
        }]
    }
};