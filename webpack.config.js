const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // html-webpack-plugin add as plugins to module.exports then dist can be deleted

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'), // index js will be resolved
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js' // name of entry as an output generated js
    },
    module: {
        rules: [
            {
                // any file with extension scss
                test: /\.scss$/,
                use: [
                    'style-loader', 
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack-App',
            filename: 'index.html',
            template: 'src/template.html'
        })
    ]
}