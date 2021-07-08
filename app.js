const fs = require('fs')
const http  = require('http')
const files = fs.readdirSync('./')

console.log(files)

const server = http.createServer((req,res) => {
    if(req.url === '/files'){
        res.write(fs.readdirSync('./'))
        res.end()
    }
    else if(req.url === '/images'){
        res.write('Images')
        res.end()
    }
})

server.listen(3001)