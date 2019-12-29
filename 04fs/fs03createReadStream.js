//文件流 读取数据
//r如果数据量过大 就用这个方法  他会分次取数据
const fs = require('fs');
var readStream = fs.createReadStream('index.txt');
var str = "";
readStream.on('data',function(chunk){
    str += chunk;
});
readStream.on('end',function(chunk){
    console.log(str);
});
readStream.on('error',function(){

})