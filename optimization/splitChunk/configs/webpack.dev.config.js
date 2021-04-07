const {HotModuleReplacementPlugin} = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const base = require('./webpack.base.config');
const {merge} = require('webpack-merge');

const dev = {
  mode: 'development',
  plugins: [
    new HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",               // 분석결과를 파일로 저장
      reportFilename: "docs/size_dev.html", // 분설결과 파일을 저장할 경로와 파일명 지정
      defaultSizes: "parsed",
      openAnalyzer: true,                   // 웹팩 빌드 후 보고서파일을 자동으로 열지 여부
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 3000,
    hot: true,
    open: true
  },
  devtool: 'source-map'
};

module.exports = merge(base, dev);
