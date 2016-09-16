var path = require('path');

module.exports = {
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "/build/",
        headers: { 'Access-Control-Allow-Origin': '.sanjuro.net' } //eliminate in live config
        

    },

    resolve: {
        alias: {
            contactImg: path.resolve(__dirname, 'assets/icons')
        }
    },


    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.(jpg|svg|png)$/, exclude: /node_modules/, loader: "url-loader" },
            { test: /\.json$/, loader: "json" }
        ]
    }

    
};


