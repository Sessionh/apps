const SkeletonBuilder = require('./skeletonCore');

// test code
const fs = require('fs');
let skeletonBuilder = new SkeletonBuilder({
    preview: true, // 是否调出浏览器
    defer: 5000,
    isNext: true, // 预览 是否生成骨架屏
    device: 'iPhone 6',
    loading: 'shine',
    image: {
        shape: 'rect',
        color: '#EFEFEF',
        shapeOpposite: [],
        fixedSize: true
    }
}, console.log);



(async () => {
    let detailPath = 'home' // 首页
        
    const baseUrl = 'http://172.17.35.98:8082/#/'
    let urlList = ['home', 'about']
       

    // const baseUrl = ' http://192.168.1.166:8090/?fMer=LYY2#/'
    // let urlList = ['index']

       
    let json = {}
      
    urlList.forEach(async (res, i) => {
            
        const result = await skeletonBuilder.build(baseUrl + res, res, detailPath);
        console.log('成功');
        let resultHtml = result.html
        resultHtml = resultHtml.replace(/\\"/g, "'")
        if (res === detailPath) {
            await fs.writeFileSync(`./public/index.html`, result.html)

        } else {
            json[res] = resultHtml
            if (Object.keys(json).length === urlList.length - 1  || Object.keys(json).length === 1) {
                fs.writeFileSync('./src/assets/skeleton.js',`module.exports = ${JSON.stringify(json)}` );
            }

        }
           
            
            
    })

    
})();



module.exports = {
    SkeletonBuilder
};
