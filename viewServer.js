const express =require('express')
const path = require('path')
const app = express()
const PORT = 5050
const HOST_NAME = '10.31.160.25'


app.use(express.static(path.join(__dirname,'./client')))

app.listen(PORT,HOST_NAME,()=>{
    console.log(`网页url:http://${HOST_NAME}:${PORT}`)
})