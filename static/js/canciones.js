let songsData = []
var songs = document.getElementById("songs")

console.log("Aca esta la lista de musica")

function renderSongs(){
    songs.innerHTML = ""
    for (var song of songsData) {
        songs.innerHTML = songs.innerHTML + `
        <div class="song">
            <iframe width="320" height="180" src="https://www.youtube.com/embed/${song.id_youtube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h2 class="song_title">${song.nombre_banda}</h2>
            <h3 class="song_sub-title">${song.nombre_cancion}</h3>
            <p>creada el: <span>${formatDate(song.fecha_creacion)}</span></p>
            <div class=song_options>
                <a href="/songs/update/${song.id}" class="song_button edit" >Editar</a>
                <button class="song_button delete" onClick="eliminar(${song.id})">Eliminar</button>
            </div>
        </div>`

    }
}

fetch("http://localhost:4000/api/playlist")
.then(function(res){
    return res.json()
})
.then(function(data){
    songsData = data
    renderSongs()
})

function eliminar(id){
    
    fetch("/api/songs/"+id,{
        method:"DELETE"
    }).then((res)=>{
        return res.json()
    }).then((data)=>{
        filterSongs(id)
        renderSongs()
    })
}

function filterSongs(id){
    let newSongs = []

    for (let s of songsData) {
        if (s.id !== id) {
            newSongs.push(s)
        } 
    }

    songsData = newSongs
}

function formatDate(date){
        let splitDate = date.toString().split("T")[0].split("-")
        return splitDate[2]+"-"+splitDate[1]+"-"+splitDate[0]
    
}
