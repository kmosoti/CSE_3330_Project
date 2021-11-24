const config = require('./dbConfig'),
sql = require('mssql');

const getArtist = async() => {
    try{
        let pool = await sql.connect(config);
        let artists = pool.request().query("SELECT * FROM ARTIST");
        console.log(artists);
        return artists
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    getArtist
}