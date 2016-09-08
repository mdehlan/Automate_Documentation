/**
 * Created by Martin on 06.09.2016.
 */

var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db =mongojs('AD', ['AD']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/AD', function (req, res){
    console.log('resived a request')

    db.AD.find(function (err, docs) {
        console.log(docs);
        res.json(docs);

    });
});

app.post('/AD', function (req, res) {
    console.log(req.body);
    db.AD.insert(req.body, function(err, doc){
        res.json(doc);
    })
});



app.listen(3000);
console.log("Server running on port 3000");