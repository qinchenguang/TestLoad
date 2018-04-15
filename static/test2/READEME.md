#测试Domcontentload之后插入css影响load吗

##index.html测试行为：

一个内联的js

1个延时1s的js,延时1s的js在DOmcontentload之后1s插入一条延时2s的css

##index2.html测试行为：

一条立即的内嵌js
延时1s的js（DOMcontentload之后1后插入延时2s的css
延时8s的css

##index3.html测试行为

内嵌的js
延时0s的js（DOMcontentload之后插入1s插入延时8s的css延时2s的css

##index4.html测试行为：
内嵌js
延时0s的js（DOMcontentload之后1s插入延时8s的css）
延时0s的css

得出结论：DOMContentload是指的domready，load是指的外部资源加载完毕。如果在插入外部资源链接之前 load事件已经触发，那么无效果。如果插入外部资源链接之前load事件还未触发，那么插入的的资源会计算到load事件的事件中去