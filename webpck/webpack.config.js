const path = require('path');

module.exports = {
  // mode: 'development',
  entry: './main.js',
  output: {
    // 所有依赖文件的模块合并输出到一个bundle.js
    filename: 'bundle.js',
    // 将输出文件到放到dist目录下
    path: path.resolve(__dirname, './dist')
  },
  // 引入Loader
  module: {
    rules: [
      {
      // 正则匹配css文件
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};
