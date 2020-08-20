
var express = require('express');
var index = express();
//var path = require("path");
//var fs = require("fs");


//var http = require('http').Server(index);

//index.use('/libraries', express.static('node_modules'));
//index.use(express.static(__dirname + '/public'));

index.get('/', function (req, res) {
  res.sendFile(__dirname + '/src/formulario.html');
});

index.listen(3000, function () {
  console.log('Example index listening on port 3000!');
});

