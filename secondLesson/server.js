const fs = require("fs") //file system for html
const http = require("http");

const readFile =  (path)=>{
    return new Promise((resolve, reject)=> {
        fs.readFile(path, (err,data)=>{
            if(err) reject(err)
            else resolve(data)
        })
    })
}

const server = http.createServer(async (req,res)=>{
    switch (req.url){
        case "/home":{
            try{
                const data =  await readFile("pages/home.html").then
                res.write(data)
                res.end()
                break
            }catch(err){
                res.write("500 server error")
                res.end()
            }
            break
        }
        case "/about":{
            fs.readFile("pages/about.html", (err,data)=>{
                err? res.write("500 , some error"):res.write(data)
                res.end()

            })
            break
        }
        default:{
            res.write("Error 404 not found ")
            res.end()
        }
    }

    console.log("server working")
})

server.listen(3000)