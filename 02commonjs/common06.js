var nav = require('nav');
//直接这样引入是引入不到，我们可以通过生成 package.json,
//nav在根目录不存在，会去node_modules  然后找到了 nav 文件夹，然后找到了package.json
//然后找 package.json 文件里的main 也就是入口文件
console.log(nav.str);


//生成package.json  npm init --yes 需要进入到这个目录下运行这个命令
