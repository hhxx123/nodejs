var http =  require("http");//node js 的内置模块

var config = require("./config.js")
var app = http.createServer(function(req,res){
    //设置响应头
    res.writeHead(200,{"Content-Type":"text/html;charset:utf-8"});
    res.write('你好 nodejs');
    res.write(config.str);
    res.end();
});
app.listen(8002,'127.0.0.1');
