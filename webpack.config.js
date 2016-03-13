var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'app/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            
            loaders: ['react-hot', 'babel']
        }]
    }
}