//https://github.com/tediousjs/node-mssql#configuration-1
const express     = require('express'),
      Artist      = require('./dbFiles/artist')
      dbOperation = require('./dbFiles/dbOperation'),
      cors        = require('cors');

dbOperation.getArtist().then(res => {
    console.log(res);
})