const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        bunle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js' // name of entry
    }
}