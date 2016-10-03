'use strict';

var twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
let client = twilio()

module.exports = {
  callTwilio: function callTwilio(twilio, recipient) {
    client.makeCall({
      to: recipient,
      from: twilio,
      url: 'https://two-spooky-four-me.herokuapp.com/voice'
    })
  }
}
