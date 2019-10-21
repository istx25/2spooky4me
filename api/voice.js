const VoiceResponse = require("twilio").twiml.VoiceResponse;

module.exports = (req, res) => {
    let fileUrl = "https://api.twilio.com/cowbell.mp3";
    let response = new VoiceResponse();
    response.play(fileUrl);
    res.writeHead(200, { "Content-Type": "text/xml" });
    res.end(response.toString());
};
