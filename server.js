/**
 * Created by Martin on 06.09.2016.
 */

var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.listen(3000);
console.log("Server running on port 3000");