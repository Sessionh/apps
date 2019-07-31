// vue.config.js
const path = require('path');
const host = '192.168.1.166';
const url = 'http://api.douguo.net';

module.exports = {
    publicPath: './',
    devServer: {
        port: 8082,
        host: host,
        proxy: {
            '/personalized/': {
                target: url,
                changeOrigin: true,
            },
        }
    },

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            // 需要通过less-loader自动引入的资源，集合类型
            patterns: [path.resolve(__dirname, './src/common/common.scss')]
        }
    }
}