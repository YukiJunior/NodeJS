// Servidor WEB

const http = require("http")
const host = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res)=> {
    res.statusCode = 200;
    res.setHeader('Content -Type', 'text/plain');
    res.end('Olá Mundo \n Meu Primeiro Script em NodeJs');

})

server.listen(port, host, ()=>{
    console.log('Sever running at http: //${host}:${port}')
})