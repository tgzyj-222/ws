// 服务器

const ws = require('ws')
const host = '10.31.160.25'
const port = 8888
const server = new ws.Server({
    host,
    port
})

let count = 100000
const clients =[]

server.on('connection',client=>{
    client.name = ++count
    clients[client.name] = client
    client.on('message',msg=>{
        msg.name=client.name
        console.log(msg.toString())
        boradcast(client,msg)
    })
})

function boradcast(client,msg){
    for(let key in clients){
       
        clients[key].send(msg.toString())
    }
}

server.on('listening',()=>{
    console.log(`服务器启动  at: ws://${host}:${port}`)
})