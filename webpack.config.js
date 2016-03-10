var path = require('path');

module.exports = {
    devtool: 'eval',
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        publicPath: '',
        path: path.join(__dirname, 'public')
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'app')
        }]
    }
}