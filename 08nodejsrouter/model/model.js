var ejs = require('ejs');
var app = {
    login:function(req,res){
        console.log('login');
        ejs.renderFile('views/form.ejs',{},function(err,data){
            res.end(data);
        })
    }
};
module.exports = app;
