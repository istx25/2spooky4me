'use strict';

var twilio = require('twilio')
var client = new twilio.RestClient(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

module.exports = {
  callTwilio: function callTwilio(twilio, recipient) {
    client.makeCall({
      to: recipient,
      from: twilio,
      url: process.env.HEROKU_SERVER_URL + '/voice'
    })
  }
}
