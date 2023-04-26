

const http = require('http');

const hostname = '127.0.0.1'; //ip local

const port = 3000; // porta padrão

const url = `http://${hostname}:${port}/` // criando url

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1>Bem Vindo<br/>Node.JS<h1>');
});

server.listen(port, hostname, ()=>{
    console.log(`Servidor rodando em ${url}`);
});

//abrindo o browser
const open = (process.platform == 'darwin'? 'open':
process.platform == 'win32'? 'start':'xdg-open');

//chamando o browser
require('child_process').exec(open + ' ' + url);
