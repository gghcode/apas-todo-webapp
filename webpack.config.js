const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.min.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      favicon: path.join(__dirname, 'public', 'favicon.ico'),
      inject: true,
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    inline: true,
    hot: true,
    host: '0.0.0.0',
    port: 8081,
  },
};
