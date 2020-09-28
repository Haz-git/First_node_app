
//Grabbing HTML module
const http = require('http');
const url = require('url');
const fs = require('fs');
//Creating Server:

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename = '.' + q.pathname + '.html';
    console.log(filename);

    if (q.pathname === '/' || q.pathname === '') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(404, {
                    'Content-Type': 'text/html'
                })
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            res.write(data);
            return res.end();
        });

    } else {

        fs.readFile(filename, (err, data) => {
            if (err) {
                res.writeHead(404, {
                    'Content-Type': 'text/html'
                });

                return res.end('404 Not Found');
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            return res.end();
        });
    }
}).listen(8080);


//If the pathname is '/' or if it is empty, then we'll access index.html and write the data within on the page. If it isn't empty, we'll access the file according to the URL, and write the data within on the page. For both, we'll set the server to listen on port 8080.