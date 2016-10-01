'use strict';

var twilio = require('twilio');
let client = twilio();

client.makeCall({
  to: '+4916095632678',
  from: '+4922289674542',
  url: 'http://87b81cb4.ngrok.io/voice'
});
