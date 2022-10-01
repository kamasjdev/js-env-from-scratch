const path = require('path')

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
    }
}