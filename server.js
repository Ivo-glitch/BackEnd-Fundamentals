const express = require('express')
const path = require("path")
const musicRoutes = require("./routes/playList")

function views(document){
    return path.join(__dirname,"views",document)
}

const app = express()

app.use(express.static(path.join(__dirname,"static")))

app.use(express.text())

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(musicRoutes)

app.get('/',function(req,res){
    return res.sendFile(views("index.html"))
})

app.listen(4000,function(){
    console.log("Funcionando")
})