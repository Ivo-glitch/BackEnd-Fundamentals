const database = require ("../database")

class MusicController{

    async create( music ){
        const res = await database.insert('music',music)
        console.log(res)
        return res
    }

    async readAll(){
        const playlist = await database.query("SELECT * FROM playlist")
        return playlist
    }


    //TODO ver video de delete y hacer la modificacion necesaria
    // async delete(id){
    //     const song = await database.delete("music",id)
    // }
    
}

module.exports = MusicController