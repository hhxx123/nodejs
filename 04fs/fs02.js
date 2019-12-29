//判断服务器上面有没有upload 目录
var fs = require('fs');
//判断服务器上面有没有目录，没有就创建目录，eg:图片上传场景
fs.stat('upload',function(err,stats){
    if(err){
        //表示米有这个目录 就创建目录
        fs.mkdir('upload',function(error){

        })
    }else{
        console.log(stats.isDirectory());
    }
})

//找出html 下面的所有目录 并且打印
fs.readdir('html',function(err,files){
    if(err){
         return false;
    }
    else{//判断是目录还是文件夹
        // for 循环 异步  这是错误写法
        // for(var i=0;i<1;i++){
        //     fs.stat(files[i],function(){
        //         console.log(i);
        //     })
        // }

        //匿名自执行函数
        var filesArr = [];
        (function getFile(i){
            if(i == files.length){
                console.log(filesArr);
                return false;
            }
            //注意文件目录
            fs.stat('html/'+files[i],function(arr,stats){
                console.log(files[i]);
                if(stats.isDirectory()){
                    filesArr.push(files[i]);
                }
                getFile(i+1);//递归调用
            })
        })(0)

    }
})

for(var i=0;i<1;i++){
    setTimeout(function(){
        console.log(i);//异步
    },100)
}