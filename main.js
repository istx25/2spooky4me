'use strict';

var express = require('express');
var twilio = require('twilio');
var path = require('path');

let app = express();
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/voice', (req, res) => {

  let fileUrl = 'https://dl.dropboxusercontent.com/u/162794740/hacktoberfest/2spooky4me.mp3';
  let twiml = new twilio.TwimlResponse();
  twiml.play(fileUrl);

  res.header('Content-Type', 'text/xml');
  res.send(twiml.toString());

});

app.listen(5794, () => {
  console.log('Listening at http://localhost:5794');
});
