//npm install ModuleName
//npm uninstall ModuleName
// npm list 查看当前目录下安装的包
//npm info ModuleName  查看包的版本
//指定版本安装  npm install jquery@1.8.0
//引入模块
//jq 不能在node js 使用
//注意：以后安装模块的时候要把这个模块 写入到package.json这个文件
//npm install -- save 会写入到 package.json 的dependencies
//npm install -- save-dev 会写入到 package.json 的devDependencies
//有时候 npm installl 下载不下来或者很慢，用淘宝镜像
//首先要安装淘宝镜像就可以用 cnpm install 模块

var sd = require('silly-datetime');
var md5 = require('md5-node');
//sd.format(new Date(), 'YYYY-MM-DD HH:mm');
var http = require("http");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
    var date = sd.format(new Date(), 'YYYY-MM-DD HH:mm');;
    res.write(date);
    var md = md5('hello world');
    res.write(md);
    res.end();
}).listen(8001);