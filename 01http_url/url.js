var http = require("http");
var url = require("url");
http.createServer(function(req,res){
    var query = url.parse(req.url,true);//第一个参数是地址，第二个参数是true 表示把get传值转换为对象
    console.log(query);
    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
    res.write("444");
    res.end();
}).listen(8001);