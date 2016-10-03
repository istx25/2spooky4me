'use strict';

var bodyParser = require('body-parser')
var express = require('express')
var path = require('path')
var call = require('./call.js')

var twilio = require('twilio')
var client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
var twiml = twilio.TwimlResponse();

let app = express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.post('/voice', (req, res) => {

  let fileUrl = 'https://dl.dropboxusercontent.com/u/162794740/hacktoberfest/2spooky4me.mp3'
  let twiml = new client.TwimlResponse()
  twiml.play(fileUrl)

  res.header('Content-Type', 'text/xml')
  res.send(twiml.toString())

})

app.post('/form', (req, res) => {
	call.callTwilio(req.body.twilio, req.body.recipient)
  res.redirect('/')
})

app.listen(process.env.PORT, () => {
  console.log('Listening on *:' + process.env.PORT)
})
