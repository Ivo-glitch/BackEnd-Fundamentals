const database = require ("../database")

class MusicController{

    async create( song ){
        const res = await database.insert('playlist',song)
        console.log(res)
        return res
    }

    async readAll(){
        const playlist = await database.query("SELECT * FROM playlist")
        return playlist
    }


    
    async del(id){
        const song = await database.del("playlist",id)
        return song
    }

    async findById(id){
        const song = await database.findOne("playlist",id)
        return song
    }
    
    async mod(id){
        const song =await database.mod("playlist",id)
        return song
    }
    
}

module.exports = MusicController