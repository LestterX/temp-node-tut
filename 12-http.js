const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('here is our short history')
    }
    // res.end(`                    // ESTÁ CAUSANDO ERRO
    // <h1> Error </h1>
    // <p> Not Found </p>
    // <a href = "/"> Back Home </a>
    // `)
})

server.listen(5000)