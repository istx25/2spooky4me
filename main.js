'use strict';

var express = require('express');
var twilio = require('twilio');

let app = express();
app.post('/voice', (req, res) => {

  let fileUrl = 'https://dl.dropboxusercontent.com/u/162794740/hacktoberfest/2spooky4me.mp3';
  let twiml = new twilio.TwimlResponse();
  twiml.play(fileUrl);

  res.header('Content-Type', 'text/xml');
  res.send(twiml.toString());

});

app.listen(3000, () => {
  console.log('Listening at http://localhost:3000');
});
