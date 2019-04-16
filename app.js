var express=require('express')
var socket=require('socket.io')


// app 
var app=express()
var server=app.listen(4500,()=>{
    console.log('Listening 4500')
})

app.use(express.static('public'))

//socket setup
var io=socket(server)
io.on('connection',(socket)=>{
    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data)
    })
    socket.on('typing',(data)=>{
            socket.broadcast.emit('typing',data)
    })
})