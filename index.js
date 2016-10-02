'use strict';

var bodyParser = require('body-parser')
var express = require('express')
var twilio = require('twilio')
var path = require('path')
var call = require('./call.js')

let app = express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.post('/voice', (req, res) => {

  let fileUrl = 'https://dl.dropboxusercontent.com/u/162794740/hacktoberfest/2spooky4me.mp3'
  let twiml = new twilio.TwimlResponse()
  twiml.play(fileUrl)

  res.header('Content-Type', 'text/xml')
  res.send(twiml.toString())

})

app.post('/form', (req, res) => {
	call.callTwilio(req.body.twilio, req.body.recipient)
  res.redirect('/')
})

app.listen(5794, () => {
  console.log('Listening at http://localhost:5794')
})
