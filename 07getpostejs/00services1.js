var http = require('http');
var router = require('./model/route.js');
http.createServer(function(req,res){
    router.statics(req,res,'static');
}).listen(8001);