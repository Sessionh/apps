const SkeletonBuilder = require('./skeletonCore');
// const execPath = 'C:/Users/11974/AppData/Local/Google/Chrome/Application/chrome.exe'; // chrome 路径 
const execPath = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'

// test code
const fs = require('fs');
let skeletonBuilder = new SkeletonBuilder({
    preview: true, // 是否调出浏览器
    defer: 5000,
    isNext: false, // 预览 是否生成骨架屏
    device: 'iPhone 6',
    loading: 'shine',
    image: {
        shape: 'rect',
        color: '#EFEFEF',
        shapeOpposite: [],
        fixedSize: true
    },
    execPath
}, console.log);



(async () => {
    const detailPath = 'home' // 首页
    const skeletonPath = './src/assets/skeleton.js' // 骨架屏 除首页外 生成的 js文件路径
    const indexHtml = `./public/index.html` // webpack 引入html
        
    const baseUrl = 'http://172.17.35.98:8082/#/'
    const urlList = ['home', 'about']
       

    // const baseUrl = ' http://192.168.1.166:8090/?fMer=LYY2#/'
    // let urlList = ['index']

       
    let json = {}
      
    urlList.forEach(async (res, i) => {
            
        const result = await skeletonBuilder.build(baseUrl + res, res, detailPath);
        console.log('成功');
        let resultHtml = result.html
        resultHtml = resultHtml.replace(/\\"/g, "'")
        if (res === detailPath) {
            await fs.writeFileSync(indexHtml, result.html)

        } else {
            json[res] = resultHtml
            if (Object.keys(json).length === urlList.length - 1  || Object.keys(json).length === 1) {
                fs.writeFileSync(skeletonPath,`module.exports = ${JSON.stringify(json)}` );
            }

        }
           
            
            
    })

    
})();



module.exports = {
    SkeletonBuilder
};
