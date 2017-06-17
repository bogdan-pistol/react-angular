var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './main.js',
    output: { path: __dirname, filename: 'bundle.js' },

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
