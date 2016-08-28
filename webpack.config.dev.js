var path = require('path');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "/build/",
        headers: { 'Access-Control-Allow-Origin': '*' } //eliminate in live config
        

    },

    plugins: [
        new BundleTracker({filename: './webpack-stats.json'})
    ],

    resolve: {
        alias: {
            contactImg: path.resolve(__dirname, 'assets/icons')
        }
    },


    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.(jpg|svg|png)$/, exclude: /node_modules/, loader: "url-loader" }
        ]
    }

    
};


