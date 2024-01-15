// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var fs = require('fs');
var cors = require('cors');
app.use(cors());

// Get comments
app.get('/comments', function (req, res) {
    console.log("GET comments");
    fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
})

// Post comments
app.post('/comments', function (req, res) {
    console.log("POST comments");
    fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["comment" + req.body.id] = req.body;
        console.log( data );
        res.end( JSON.stringify(data));
    });
})

// Put comments
app.put('/comments/:id', function (req, res) {
    console.log("PUT comments");
    fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["comment" + req.body.id] = req.body;
        console.log( data );
        res.end( JSON.stringify(data));
    });
})

// Delete comments
app.delete('/comments/:id', function (req, res) {
    console.log("DELETE comments");
    fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        delete data["comment" + req.body.id];
        console.log( data );
        res.end( JSON.stringify(data));
    });
})

// Create server
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
})