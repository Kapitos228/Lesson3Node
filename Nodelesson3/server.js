//create instance of connection
let connect = require('connect')

let app = connect()
//handle request
let index = ((req, res) => {
    if (req.url === '/'){
        res.writeHead(200)
        res.write('Hello home page')
        res.end()
    }
    else{
        res.writeHead(404)
        res.write('Page not found')
        res.end()
    }
})

let goodbye = ((req, res) => {
    res.writeHead(200)
    res.write('Goodbye page')
    res.end()
})

let hello = ((req, res) => {
    res.writeHead(200)
    res.write('Hello world')
    res.end()
}) 

//url mapping
app.use('/hello', hello)
app.use('/goodbye', goodbye)
app.use("/", index)
app.listen(3000)
//start the web server on port 3000
console.log('Connect server running on port 3000')