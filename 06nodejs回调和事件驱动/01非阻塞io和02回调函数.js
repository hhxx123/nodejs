var fs = require('fs');
//非阻塞io
function getMime(callback){
    //  1
    fs.readFile('mime.json',function(err,data){
        callback(data);
        //return data;
        //用return data 这样会返回一个 undefined,并不能拿到 mime.json数据里面的值
        //首先回去执行1，然后1遇到大括号，就直接结束了
    })
    //2
}

//console.log(getMime());
//用回调函数可以解决

getMime(function (result) {
    console.log(result);
});
