const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 哪些文件需要引入,绝对路径
      patterns: [
        path.join(__dirname, './src/assets/styles/variables.less'),
        path.join(__dirname, './src/assets/styles/mixins.less')
      ]
    }
  }
}
