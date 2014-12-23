var express = require('express');
var app = express();
var request = require('request');

app.get('/', function(req, res){
	res.sendfile('./index.html');
});

app.listen(80,function(){
	consol.log('server is listening on port 80');
});