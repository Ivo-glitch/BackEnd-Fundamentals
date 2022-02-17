const express = require("express")
const path = require("path")
const MusicController = require("../controllers/canciones")
const modificar = require("../static/js/modificar")
function views(document){
    return path.join(__dirname,"../", "views", document)
}

const router = express.Router()

const musicController = new MusicController()

router.get('/registro', function(req, res){
    return res.sendFile(views("registro-musica.html"))
})

router.post('/registro', async function(req,res){
    
    const song = req.body
    const musicSong = await musicController.create(song)

    if(musicSong.success){
        return res.redirect("/playlist")
    }else{
        return res.redirect("/registro")
    }
})

router.get("/playlist",(req,res)=>{
    return res.sendFile(views("canciones.html"))
})

router.get("/api/playlist",async(req,res)=>{
    var songs = await musicController.readAll()
    return res.json(songs)
})

router.delete("/api/songs/:id", async (req,res)=>{
    const id = req.params.id
    var song = await  musicController.del(id)
    var songs = await musicController.readAll()
    return res.json(songs)
})

 router.get("/songs/update/:id", async (req,res)=>{
    return res.sendFile(views("modificar-cancion.html"))
})

// router.get("/api/songs/update/:id"), async (req,res) =>{
//     const id = req.params.id
//     var song = await musicController.findById(id)
//     console.log(song)
//     return song
// }

// router.put("/api/songs/:id"), async (req, res)=>{
//     const id = req.params.id
//     var song = await musicController.findById(id)
//     console.log(song)
// }

module.exports = router