var express = require('express');
var app =  express();
var fs = require("fs");

app.use(express.static(process.argv[3]));
app.get('/books', function(req, res){
 var object;
 fs.readFile(process.argv[3], function(err, data){
  res.json(JSON.parse(data));
 });
});
app.listen(process.argv[2]);