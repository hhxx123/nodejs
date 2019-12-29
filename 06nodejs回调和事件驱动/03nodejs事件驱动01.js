/*Nodejs 是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高
* nodejs的每一个api都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发
* nodejs有多个内置的事件，我们可以通过引入events模块，并通过实例化EventsEmitter类来绑定和监听事件
*/

var events= require('events');
var EventEmitter = new events.EventEmitter();

//广播和接收广播
EventEmitter.on('to_parent',function(data){
    console.log(data);
});

setTimeout(function(){
    //广播to_parent 事件
    EventEmitter.emit('to_parent','发送的数据');
},2000)

//事件驱动获取数据
var fs = require('fs');
//非阻塞io
function getMime(){
    fs.readFile('mime.json',function(err,data){
        EventEmitter.emit('from-mime',data);
    })
}
getMime();
EventEmitter.on('from-mime',function(data){
    console.log(data.toString());
})