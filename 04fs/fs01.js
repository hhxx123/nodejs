var fs = require('fs');
//fs.readFile 读取文件
fs.readFile('index.txt',function(err,data){
    console.log(data);//默认转出的是 buffer 类型
    //data.toString()
});

//fs.rmdir 删除(删的是目录,只能删除目录)
fs.rmdir('css',function(){

});

//fs.unlink 删除文件
fs.unlink('why.txt',function(err){

})

//fs.rename 重命名
//用途：改名；剪切文件（更换路径）
fs.rename('html/index.html','html/newIndex.html',function(){

})

//fs.readdir 读取目录 把目录下边的文件和文件夹都获取到
fs.readdir('html',function(err,data){
    console.log(data);
})

//fs.stat  检测是文件还是目录
fs.stat('index.txt',(err,stats)=>{
    if(err){
       console.log(err);
       return false;
    }
    console.log(stats.isFile());
    console.log(stats.isDirectory());
})
//fs.mkdir 创建目录
//接收参数：
//path 将创建的目录路径
//mode 目录权限（读写权限），默认0777
//callback 回调 传递异常参数error
// fs.mkdir('css',function(err){
//     if(err){
//         console.log(err);
//         return false;
//     }
//     console.log('成功')
// });

//fs.writeFile  创建写入文件
//接收参数
//filename (string) 文件名称
//data (String \Buffer) 将要写入的内容
//options (object) option 数组对象
//. encodeing (string) 可选值 默认'utf-8'
//。mode (Number) 文件读写权限，默认值 438
//. flag (string) 默认值 ‘w’
//callback {function} 回调 传递个异常参数 error

fs.writeFile('t.txt','hello',function(err){//如果文件已经存在，内容会覆盖
    if(err){
        return false;
    }
});

//fs.appendFile 追加文件(如果文件已经存在 内容会累加)
fs.appendFile('t1.txt','this is content\n',function(err){
    if(err){

    }
})

