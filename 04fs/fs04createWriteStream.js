//写入流
const fs = require('fs');
var data = '要写入的数据';
var writeStream = fs.createWriteStream('index.txt');
writeStream.write(data,'utf-8');

//标记写入完成
writeStream.end();

writeStream.on('finish',function(){
    console.log("写入完成")
})

writeStream.on('error',function(){
    console.log("写入失败")
})


//管道流
pipe();
readerStream.pipe(writeStream);

