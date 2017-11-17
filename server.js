var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require("body-parser");

var app = express();
var portNum = 201;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(express.static('angular_assignment'));
app.use(express.static('unit_test'));

app.listen(portNum, function () {
    console.log('Example app listening on port ' + portNum + '!');
})
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/', '', 'index.html'));
});

app.get('/machine/trunk/unit_test/specRunner.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/unit_test/specRunner.html'));
});

app.get('/marcoPolo', function (req, res) {
    res.sendFile(path.join(__dirname, '/', '', 'index.html'));
});

app.get('/userStory', function (req, res) {
    res.sendFile(path.join(__dirname, '/', '', 'index.html'));
});
app.get('/directiveAnswere', function (req, res) {
    res.sendFile(path.join(__dirname, '/', '', 'index.html'));
});
