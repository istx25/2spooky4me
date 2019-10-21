var twilio = require("twilio");

module.exports = (req, res) => {
  var client = new twilio.RestClient(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
  let url = "https://" + req.headers["x-now-deployment-url"] + "/api/voice";
  client.makeCall({
    to: req.body.recipient,
    from: req.body.twilio,
    url: url
  });
};
