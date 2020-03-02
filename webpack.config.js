const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'css', '.scss'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.min.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.(scss|sass|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      favicon: path.join(__dirname, 'public', 'favicon.ico'),
      inject: true,
    }),
    new CopyPlugin([{ from: 'public/images', to: 'images/' }]),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    inline: true,
    hot: true,
    host: '0.0.0.0',
    port: 8081,
    historyApiFallback: true,
  },
  devtool: 'cheap-eval-source-map',
};
