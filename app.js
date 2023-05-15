const http = require('http')
http.createServer(function (req,res) {
    let text =''
    if (req.url==='/login'){
        text = 'login success'
    }else {
        text = 'login fail'
    }
    res.end(text)
}).listen(8080,'localhost')