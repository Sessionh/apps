// vue.config.js
const path = require('path')

module.exports = {

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            // 需要通过less-loader自动引入的资源，集合类型
            patterns: [path.resolve(__dirname, './src/common/commom.scss')]
        }
    }
}