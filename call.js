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

document.getElementById("recipient-text-field").addEventListener("keypress", function (e) {
let allowedChars = '0123456789+ '; 
function contains(stringValue, charValue) { 
  return stringValue.indexOf(charValue) > -1 
} 
let invalidKey = e.key.length === 1 && !contains(allowedChars, e.key) || e.key === '.' && contains(e.target.value, '.') invalidKey && e.preventDefault() });
