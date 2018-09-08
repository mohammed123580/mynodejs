var http=require('http');
var fs=require('fs');

var mys=http.createServer((req,res)=>{

    if (req.url==='/'){

        fs.readFile('./test/a.html','utf-8',(e,d)=>{
            
            if (e)console.log('not working');

            res.writeHead(200,{'Content-Type':'text/html'});
        res.end(d);});
    }
    
});


mys.listen(3000);
console.log('im running');