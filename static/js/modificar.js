// var song = document.getElementById("modificar")

// function renderSong(){
//     song.innerHTML= songs.innerHTML + `
//         <label for="">Nombre de la banda</label>
//         <input type="text" text="${song.nombre_banda}" name="nombre_banda" id="">
//         <label for="">id de video de youtube</label>
//         <input type="text" text="${song.id_youtube}" name="id_youtube" id="">
//         <label for="">Ingrese nombre de la cancion</label>
//         <input type="text" text="${song.nombre_cancion}" name="nombre_cancion" id="">
//         <label for="">Ingrese fecha de creacion</label>
//         <input type="date" date="${song.fecha_creacion}"name="fecha_creacion" id="">
//         <button onClick="">Editar</button>
//     `
// }


//     // function modificar(id){
//     //     fetch("/api/songs/"+id,{
//     //         method:"PUT"
//     //     }).then((res)=>{
//     //         console.log(res.json())
//     //     }).then((data)=>{
            
//     //     })
//     // }
    


// fetch("/api/songs/",+id)
// .then(function(res){
//     return res.json()
// })
// .then(function(data){
//     songsData = data
//     renderSong()
// })