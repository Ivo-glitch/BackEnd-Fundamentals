const mysql = require ('mysql2')

//CONEXIÓN
const connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password: 'root',
    database:'proyectobackend1'
})

//FUNCION QUERY
function query ( sql, data ){
    return new Promise ((resolve,reject)=>{
        connection.query( sql, data, function(e,result){
            if(e){
                reject(e.sqlMessage)
            }else{
                resolve(result)
            }
        })
    })
}

//Funcion INSERT
async function insert(tableName, data){
    try{
        await query(`INSERT INTO ${tableName}(??) VALUES(?)`,[Object.keys(data), Object.values(data)])
        return {data, success:true}
    }catch(e){
        return {e,success:false}
    }
}

module.exports = {query,insert}
