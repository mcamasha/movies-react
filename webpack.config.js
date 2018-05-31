const HtmlWebPackPlugin = require("html-webpack-plugin");

// Плагин, который генерирует итоговый index.html с подключенным бандлом на основе вашего template.
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }          
        ]
    },
    plugins: [htmlPlugin]
}
