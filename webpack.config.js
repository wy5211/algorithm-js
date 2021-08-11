const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

exports.default = {
  // mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [[require.resolve('@babel/preset-env')]],
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  // 配置插件
  plugins: [
    new htmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
    }),
  ],
  // 本地开发服务
  devServer: {
    contentBase: '/',
    host: 'localhost',
    port: 8888,
    open: true,
    compress: true, // 启动gzip压缩
  },
};
