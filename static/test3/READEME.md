#测试js阻塞页面

测试js阻塞页面的呈现还是已有dom的渲染

##index.html测试行为：

未延时的css
8s延时的js（放在页面头部）

##index2.html测试行为：
未延时的css
8s延时的js（放在页面中间）


得出结论：js的加载和执行会阻塞dom的解析，加载执行完毕之后不会执行dom