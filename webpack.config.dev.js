var path = require('path');


module.exports = {
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname, "assets"),
        filename: "bundle.js",
        publicPath: "/assets/",
        headers: { 'Access-Control-Allow-Origin': '*' } //eliminate in live config
        

    },

    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }

    
};


