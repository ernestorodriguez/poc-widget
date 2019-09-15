const config =  require('./config').config.server;

module.exports = {
    entry: {
        demo: './app/client/demo.js',
        vendor: 'react-dom'
    },
    output: {
        path: __dirname + '/' + config.staticsFolder,
    },
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
        ]
    }
};
