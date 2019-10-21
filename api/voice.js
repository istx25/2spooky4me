const VoiceResponse = require("twilio").twiml.VoiceResponse;

module.exports = (req, res) => {
  // https://dl.dropboxusercontent.com/s/j7fiqn8hi0akbzz/musical-skeletons.mp3
  let fileUrl = "https://api.twilio.com/cowbell.mp3";
  let response = new VoiceResponse();
  response.play(fileUrl);
  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(response.toString());
};
