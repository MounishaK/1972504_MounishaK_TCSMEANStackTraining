let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
 })

 io.on("connection",(socket)=>{
     console.log("client connected to application......")
     socket.on("name",(msg)=>{
        console.log(msg);
     })
     socket.on("message",(text)=>{
        console.log(text);
     })

 })
 http.listen(9090,()=>console.log('server running on port 9090'));



 
