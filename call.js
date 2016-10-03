'use strict';

var twilio = require('twilio')
let client = new twilio.RestClient(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

module.exports = {
  callTwilio: function callTwilio(twilio, recipient) {
    client.makeCall({
      to: recipient,
      from: twilio,
      url: 'https://two-spooky-four-me.herokuapp.com/voice'
    })
  }
}
