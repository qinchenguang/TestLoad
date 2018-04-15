var express = require('express');
var delay = require('express-delay');

var app = express();

app.use('/static', function(req, res, next) {
    var delay = 0;
    var  strNumFirst = req.path.indexOf('delay');
    var  strNumLast = req.path.lastIndexOf('s.');
    // 从 delay1s.* 中截取出来具体的延时时间
    if(strNumFirst != -1 && strNumLast != -1){
        var time = req.path.slice(strNumFirst + 5,strNumLast);
        try{
            delay = Number(time) * 1000;
        } catch (e){
            delay = 0;
        }
    }
    setTimeout(function () {
        next();
    },delay)
});
app.use('/static',express.static('static'))

app.get('/',function (req,res) {
   res.send('hello world');
});

var server = app.listen(5000,function () {
    console.log('express listening port 5000')
})