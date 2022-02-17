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
                <button class="song_button edit">Editar</button>
                <button class="song_button delete">Eliminar</button>
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

function formatDate(date){
    if (date.toString.size === 0){
        return "Fecha no asignada"
    }else{
        let splitDate = date.toString().split("T")[0].split("-")
        return splitDate[2]+"-"+splitDate[1]+"-"+splitDate[0]
    }
}
