const express = require('express');
const app = express();

app.get('/', function (req, res){
    res.send('<h1>Hwllo Web Server</h1>');
});

const sql = require("mssql");

const config = {
    user: 'UTAStudent05',
    password: '3asy-123',
    server: 'art-gallery.cphddxev4bq9.us-east-2.rds.amazonaws.com',
    database: 'Art Gallery',
    port: 1433
};

sql.connect(config, function(err){
    if(err) console.log(err);
    let sqlRequest = new. sql.Request();
    let sqlQuery = 'SELECT * FROM ARTIST'

    sqlRequest.query(sqlQuery, function (err,data) {
        if(err) console.log(err)
        
        console.log(data);
        console.log(data.recordset);
        console.log(data.rowsAffected);
        console.log(data.recordset);
        sql.close()
    });
});

const webserver = app.listen(5000, function () {
    console.log('Web Server is running..');
});