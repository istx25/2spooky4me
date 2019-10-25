const VoiceResponse = require("twilio").twiml.VoiceResponse;

module.exports = (req, res) => {
  // https://dl.dropboxusercontent.com/s/j7fiqn8hi0akbzz/musical-skeletons.mp3
  let fileUrl = "https://api.twilio.com/cowbell.mp3";
  let audioResponse = new VoiceResponse();
  audioResponse.play(fileUrl);
  res.set("Content-Type", "text/xml");
  res.send(audioResponse.toString());
};
