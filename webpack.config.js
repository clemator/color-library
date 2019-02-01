const path = require('path')
const env = process.env.WEBPACK_ENV
const libraryName = 'color-library'

let outputFile = ''

if (env === 'build') {
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

module.exports = {
  devtool: 'source-map',
  entry: './index.js',
  output: {
    filename: outputFile,
    path: path.resolve(__dirname, 'dist')
  },
  mode: (env === 'build' ? 'production' : 'development'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer:{
    port: 3000,
    contentBase: __dirname + '/dist',
    inline: true
  }
};