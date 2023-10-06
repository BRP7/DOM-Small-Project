var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'})
    res.write("hello world");
    res.end();
    //res.end("welcome back Alien......");
}).listen(8080);