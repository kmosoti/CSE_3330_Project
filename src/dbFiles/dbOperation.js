var Connection = require('tedious').Connection;
var Request = require('tedious').Request;  
var TYPES = require('tedious').TYPES;  
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
        database: 'Art Gallery',
        rowCollectionOnDone: true
    }
};

var connection = new Connection(config);  
// connection.on('connect', function(err) {  
//     // If no error, then good to proceed.
//     console.log("Connected");
//     executeStatement()
// });

connection.on('connect', function(err){
    //if no error, then we are good to go.
    if(err){
        console.log(err);
    }else{
        var request = new Request("SELECT * FROM ARTIST where aid = 1", function(err, rowCount, rows){
            console.log(rowCount + ' rows');
        })
    }
    requestResponse = []
    request.on('row', function(columns) {
        rowJson = []
        columns.forEach(function(column) {
          rowJson[column.metadata.colName] = column.value
        });
        requestResponse.push(rowJson)
        console.log(counter)
    });

    request.on("requestCompleted", function (rowCount, more) {
        connection.close();
    });
    connection.execSql(request);
});
connection.connect();



// function executeStatement() {  
//     request = new Request("SELECT * FROM ARTIST", function(err) {  
//         if (err) {console.log(err);}  
//     });  
//     var resultJson = [];
//     var counter = 0;  
//     var jsonArray = [];

//     // Register callback for row event
//     request.on('row', (columns)=>{
//       var rowObject = {};
//       columns.forEach(function(column){
//           rowObject[column.metadata.colName] = column.value
//           //console.log(column.metadata.colName)    
//       })
//       jsonArray.push(rowObject);
//       console.log(jsonArray)
//     });
//     console.log(jsonArray)
//     request.on('done', function(rowCount, more) {  
//         console.log(rowCount + ' rows returned');  
//     });  
    
//     // Close the connection after the final event emitted by the request, after the callback passes
//     request.on("requestCompleted", function (rowCount, more) {
//         connection.close();
//     });
//     connection.execSql(request);  
// }  