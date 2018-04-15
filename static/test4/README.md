#测试js css img的加载阻塞


##index.html测试行为：

延时4s的css
延时0s 1s 4s 7s的图片
4s延时的js（放在页面底部）

##index2.html测试行为：
延时0s的css
延时0s 1s 4s 7s的图片
延时0s的js（动态加载延时7s的js 和延时4s的css）


得出结论：chrome 中css和js是按照顺序加载。js 和css 的加载顺序 优先于图片（看最大链接数，如果刚开始都在链接中那就直接下载。如果有其他请求在队列中。js和css的会优先）