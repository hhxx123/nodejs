var http = require('http');
var url = require('url');
var ejs = require('ejs');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'});
    var pathname = url.parse(req.url).pathname;
    if(pathname == '/login'){
        //把数据库的数据渲染
        var data = '我是后台收据';
        var list = [
            '1',
            '2'
        ];
        ejs.renderFile('views/login.ejs',{msg:data,list:list},function(err,data){
            res.end(data);
        })
    }else if(pathname == 'register'){
        res.end('register');
    }else{
        res.end('index');
    }
}).listen(8002);