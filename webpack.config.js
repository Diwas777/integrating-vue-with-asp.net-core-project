module.exports = {
    entry: {
        app: ['./scripts/index.js']
    },
    output: {
        path: __dirname + "/wwwroot/js/dist/",
        filename: '[name].js'
    },
    devtool: 'source-map',
    module: {
         rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
             { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
             {
                 test: /\.css$/,
                 use: [
                     { loader: "css-loader" }
                 ]
             }
        ]
    }
};