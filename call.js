'use strict';

var twilio = require('twilio')
let client = twilio()

module.exports = {
  callTwilio: function callTwilio(twilio, recipient) {
    client.makeCall({
      to: recipient,
      from: twilio,
      url: 'http://8372a2fb.ngrok.io/voice'
    })
  }
}
