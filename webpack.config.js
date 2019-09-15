const config =  require('./config').config.server;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        demo: './app/client/demo.js',
    },
    output: {
        path: __dirname + '/' + config.staticsFolder,
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: './app/assets/images', to: 'images'}
        ])
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name(file) {
                                const bundleName = file.match(/\/(\w+)\/\w+\./)[1];

                                return `${bundleName}.css`;
                            },
                        }
                    },

                    'extract-loader',
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader: 'postcss-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader: 'sass-loader',
                        options: {sourceMap: true}
                    },
                ]
            }
        ],
    }
};
