var http = require('http');
var url = require('url');
http.createServer(function(req,res){
    //路由 根据不同的url 处理不同的业务逻辑
    var pathname = url.parse(req.url).pathname;
    if(pathname == '/login'){
        res.end('login');
    }else if(pathname == 'register'){
        res.end('register');
    }else{
        res.end('index');
    }
}).listen(8000);