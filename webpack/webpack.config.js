const PATH = require('path'); // 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: PATH.resolve(__dirname, 'dist'), 
    filename: "main.js"
  },
  resolve: {
    extensions: ['.js']
  },
  module: { // recursos clave para que webpack funcione
    rules: [
      {
        test: /\.js?$/, // expresion regular para identificar los archivos js
        exclude: /node_modules/, // excluye la carpeta node_modules
        use: {
          loader: "babel-loader" // usa el loader de babel
        }
      }
    ]
  },
  plugins: [ 
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    })
  ]
};