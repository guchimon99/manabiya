var path = require('path')

module.exports = {
    entry: [
        path.resolve(__dirname, 'client/js/babel-polyfill.js'),
        path.resolve(__dirname, 'client/js/entry.js')
    ],
    output: {
        path: path.resolve(__dirname, 'public/dist/js/entry.js')
    },
    resolve: {
        extensions: ['.js'],
        modules: [
            path.resolve(__dirname, 'client/js'),
            path.resolve(__dirname, 'node_modules')
        ],
    },
    devServer: {
        contentBase: 'public',
        port: 3000
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
};
