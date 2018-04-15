# TestLoad
测试js、css、图片等资源加载对页面的影响

#探寻DOMcontentload之后进行什么样的操作才能使页面的性能最优

app.js中定义了延时的函数的时间

例如 delay1s.js 代表 js延时1s

例如 delay2s.css 代表 css延时加载2s

node app 启动服务

输入 localhost:5000/static/index.html 访问。里面有跳转到各个页面的链接
