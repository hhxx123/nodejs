var http = require('http');
var url = require('url');
var ejs = require('ejs');
var fs=require('fs');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'});
    //req里面包含很多信息，可以获取到请求是get还是post
    //console.log(req.method);
    var pathname = url.parse(req.url,true).pathname;
    if(pathname == '/login'){//显示登陆页面
        ejs.renderFile('views/form.ejs',{},function(err,data){
            res.end(data);
        });
    }else if(pathname == '/dologin'){//执行登录操作
        if(req.method.toLowerCase() == 'get'){
            //get获取数据,在url上获取
            console.log(url.parse(req.url, true).query);
        }else if(req.method.toLowerCase() == 'post'){
            var poststr = '';
             req.on('data',function(chunk){
                 poststr+=chunk;
             });
            req.on('end',function (err,chunk) {
                console.log(poststr);
                fs.appendFile('login.txt',poststr +'\n',function(){
                    console.log("写入数据成功");
                })
                res.end('<script>alert("success");history.back();</script>');

            });
        }
    }else{
        res.end('index');
    }
}).listen(8002);