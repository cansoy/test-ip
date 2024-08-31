const express =require("express")
const colors =require("colors")

const server=express()
const PORT =process.env.PORT || 3000

server.set("etag",false)
// server.set("trust proxy",false)
server.set("trust proxy",(ip)=>{
    console.log(ip)
    return true
})

server.get("/",(req,res)=>{
    const remoteAddress =req.socket.remoteAddress
    const hostname=req.hostname
    const protocol =req.protocol
    const ip =req.ip
    const rnd =Math.floor(Math.random()*999)
    const html =`
                <hr/>
                remoteAddress:${remoteAddress}
                <hr/>
                hostname:${hostname}
                <hr/>
                protocol:${protocol}
                <hr/>
                 ip:${ip}
                <hr/>
                rnd-new:${rnd}
                <hr/>
    `
    res.send(html)
})

server.listen(PORT,()=>{
    console.log("*********************************")
})


