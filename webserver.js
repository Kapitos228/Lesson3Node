let http = require('http')
//use http library
http.createServer((req, res)=>{
    //http headers with 200 OK status code
    res.writeHead(200, {'Content-type': 'text-plain'})
    res.write('Hello - this is my first node page -1')
    res.end()
} ).listen(3000)


console.log('Node server running on port 3000')

    