// dependencies
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// define supported routes
app.get('/', function(req, res){
	res.set({
        'Content-Type': 'application/json',
    });
    res.status(200);
    var body = {
    	"success":true,
    	"message":"Hello world!"
    };
    res.send(JSON.stringify(body));
});

// start node app
app.listen(3000);
console.log("NodeJS Started on port 3000");
