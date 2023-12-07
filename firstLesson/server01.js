const http = require("http")

let count = 0

const  server = http.createServer((req,res)=>{
    count++

    switch (req.url){
        case"/api":
            res.write("I`m api")
            break
        case"/api/name":
            res.write("backend")
            break;
        default:
            res.write("404")
    }

    res.write("Hello! " + count)
    res.end()
})

server.listen(3000)