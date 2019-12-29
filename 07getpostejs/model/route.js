var fs = require('fs');
var path = require('path');
var url = require('url');
function getMime(extname){
  fs.readFile('./mime.json',function(err,data){
      console.log(data);;
  })
}
exports.statics = function(req,res,staticPath){
    var pathname = req.url;
    pathname = url.parse(pathname).pathname;
    if(pathname == '/'){
        pathname = '/index.html';
    }
    var extname = path.extname(pathname);
    if(pathname != '/favicon.ico'){
        fs.readFile(staticPath + '/' + pathname,function(err,data){
            if(err){
                fs.readFile(staticPath+'/404.html',function(err,data){
                    res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'});
                    res.write(data);
                    res.end();
                })
            }else{
                var mime = getMime(extname);
                console.log(mime);
                res.writeHead(200,{"Content-Type":""+mime+";charset='utf-8'"});
                res.write(data);
                res.end();
            }
        })
    }
}