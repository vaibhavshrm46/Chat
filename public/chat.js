var socket=io.connect('http://localhost:4500')

var message=document.getElementById('message'),
handle=document.getElementById('handle'),
feedback=document.getElementById('feedback'),
output=document.getElementById('output'),
btn=document.getElementById('send')

btn.addEventListener('click',()=>{
    socket.emit('chat',{
        handle:handle.value,
        message:message.value
    })
})
message.addEventListener('keypress',()=>{
    socket.emit('typing',handle.value)
})

socket.on('chat',(data)=>{
    feedback.innerHTML=''
    output.innerHTML+='<p><strong>'+data.handle+':</strong>'+data.message+'</p>'
})
socket.on('typing',(data)=>{
    feedback.innerHTML='<p><em>'+data+' is typing ...</em><p>'
})