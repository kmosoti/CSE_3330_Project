var Connection = require('tedious').Connection;
const config = {
    server: "art-gallery.cphddxev4bq9.us-east-2.rds.amazonaws.com",
    authentication: {
        type: 'default',
        options: {
            userName: 'UTAStudent05',
            password: '3asy-123'
        }
    },
    options: {
        database: 'Art Gallery'
    }
};

var connection = new Connection(config);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.
    console.log("Connected");
    executeStatement()
});

connection.connect();

var Request = require('tedious').Request;  
var TYPES = require('tedious').TYPES;  

function executeStatement() {  
    request = new Request("SELECT * FROM ARTIST WHERE aid = 1", function(err) {  
        if (err) {console.log(err);}  
    });  
    var result = "";  
    request.on('row', function(columns) {  
        columns.forEach(function(column) {  
          if (column.value === null) {  
            console.log('NULL');  
          } else {  
            result+= column.value + " ";  
          }  
        });  
        console.log(result);  
        result ="";  
    });  

    request.on('done', function(rowCount, more) {  
    console.log(rowCount + ' rows returned');  
    });  
    
    // Close the connection after the final event emitted by the request, after the callback passes
    request.on("requestCompleted", function (rowCount, more) {
        connection.close();
    });
    connection.execSql(request);  
}  