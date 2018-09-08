var http = require('http');
var https = require('https');

var fs = require('fs');
var url = 'https://jsonplaceholder.typicode.com/posts';
var mys = http.createServer((req, res) => {
  
        https.get(url, (r) => {

            r.on('data', (data) => {

                r.setEncoding('utf8');
                console.log(data);
                res.write(data);

            });

            r.on('end', () => {
                res.end();
                console.log('im done')
            });
        });
    

});


mys.listen(3000);
console.log('im running');