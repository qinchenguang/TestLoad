#测试CSS的加载会不会阻塞js的执行

css的加载会阻塞js的执行，只有css解析完毕 才会执行js

index.html测试行为：

一个外联的css样式
一个内嵌的js
一个外联的js

index2.html测试行为：

一个内嵌的js
一个外联的css样式
一个外联的js样式

得出结论：css的解析能阻塞之后js脚本的执行。js的执行有可能依赖于样式表的代码。所有css的加载和解析能阻塞之后js的执行