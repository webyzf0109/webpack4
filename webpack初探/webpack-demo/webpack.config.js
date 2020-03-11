const path=require('path');

module.exports={
    // mode:'production',//默认模式是production,打包的文件会压缩
    mode:'development',
    // entry:"./src/index.js",//入口
    entry:{                //入口详细
        main:"./src/index.js"
    },
    output:{           //打包目录以及文件信息
        filename:"bundle.js",
        path:path.resolve(__dirname,'dist')  //绝对路径
    }
}


//设置webpack的启动文件
// npx webpack --config newname.js