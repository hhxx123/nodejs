var foo = require('foo');
// foo 默认在目录下没有  nodejs 会默认在 node_module 找这个模块
console.log(foo.str);
