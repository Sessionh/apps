// vue.config.js
const path = require('path');
const host = '192.168.1.166';
const url = 'http://api.douguo.net';

// const SkeletonPlugin = require('page-skeleton-webpack-plugin').SkeletonPlugin

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
    configureWebpack: {
        plugins: [

            // new SkeletonPlugin({
            //     pathname: path.resolve(__dirname, './shell'),
            //     staticDir: path.resolve(__dirname, './dist'),
            //     routes: ['/home'],
            //     port: '8082',
            //     loading: 'chiaroscuro',
            //     svg: {
            //         color: '#EFEFEF',
            //         shape: 'circle',
            //         shapeOpposite: ['.Rating-gray_1kpffd5_0 svg']
            //     },
            //     image: {
            //         shape: 'rect', // `rect` | `circle`
            //         color: '#EFEFEF',
            //         shapeOpposite: ['.mint-swipe-items-wrap img']
            //     },
            //     pseudo: {
            //         color: '#EFEFEF', // or transparent
            //         shape: 'circle', // circle | rect
            //         shapeOpposite: ['.delivery-icon-hollow_3q8_B5r_0', '.index-premium_39rl0v9']
            //     },
            //     button: {
            //         color: '#EFEFEF',
            //         excludes: ['.mint-swipe-items-wrap a']
            //     },
            //     defer: 5000,
            //     excludes: [],
            //     remove: [],
            //     hide: ['.index-dashedline_7B79b3W', '.Rating-actived_GBtiHkB_0'],
            //     grayBlock: ['#header'],
            //     cssUnit: 'rem',
            //     headless: true,
            //     // minify: false,
            //     cookies: [{
            //         name: 'SID',
            //         value: 'a495vvmEPEE4DZi083dr8yR3EAPYqW40HaWA',
            //         url: 'https://h5.ele.me'
            //     }, {
            //         name: 'USERID',
            //         value: '273745271',
            //         url: 'https://h5.ele.me'
            //     }],
            //     noInfo: false,
            //     // storagies: {
            //     //   test: '1234'
            //     // }
            // })
          
        ]
    },

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            // 需要通过less-loader自动引入的资源，集合类型
            patterns: [path.resolve(__dirname, './src/common/common.scss')]
        }
    }
}