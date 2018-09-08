var http = require('http');
var fs = require('fs');

var mys = http.createServer((req, res) => {
    var body = '';
    if (req.url === '/' && req.method === 'GET') {

        fs.readFile('./test/a.html', 'utf-8', (e, d) => {

            if (e) console.log('not working');

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(d);
            res.end();
        });
    }
    if (req.url === '/' && req.method === 'POST') {
        req.on('data', data => {

            body += data;
            console.log('formchecked');
        });

        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(body,()=>{res.end();});
        })
    }
});


mys.listen(3000);
console.log('im running');