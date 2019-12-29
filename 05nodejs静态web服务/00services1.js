var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    var pathname = req.url;
//引入文件模块
    var fs = require('fs');
    //fs.resdFileSync() 同步执行  readFile()异步执行
//引入path模块
    var path = require('path');
//引入url模块 eg xx.html?54679gh
    var url = require('url');
    pathname = url.parse(pathname).pathname;
//引入文件类型方法
    var getMimeMode = require('./model/getMime.js');
    //过滤无效请求
    if(pathname == '/'){
        pathname = '/index.html';
    }
    //获取文件的后缀名
    var extname = path.extname(pathname);

    if(pathname != '/favicon.ico'){
        //文件操作获取 static下的index。html        fs.
        fs.readFile('static/' + pathname,function(err,data){
            if(err){//找不到就加载404
                fs.readFile('static/404.html',function(err,data){
                    res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'});
                    res.write(data);
                    res.end();
                })
            }else{
                var mime = getMimeMode.getMime(extname);
                console.log(mime);
                res.writeHead(200,{"Content-Type":""+mime+";charset='utf-8'"});
                res.write(data);
                res.end();
            }
        })
    }



}).listen(8001);