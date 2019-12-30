var http = require('http');
var model = require('./model/model.js');
var url = require('url');



http.createServer(function (req,res) {
    //设置响应头
    var pathname = url.parse(req.url).pathname.replace('/','');
    if(pathname != 'favicon.ico'){
        try {
            model[pathname](req,res);
        }
        catch (e) {
          model.login(req,res);
        }
    }
    console.log(pathname);
}).listen(8001);