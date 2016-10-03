# 2spooky4me

A spooky [Twilio](https://www.twilio.com) app that will scare you to bits. Made for Hacktoberfest.

## Development

Clone, install dependencies, run.

```bash
# Clone repository and install babel (globally)
$ git clone https://github.com/istx25/2spooky4me
$ npm install --global babel-cli
$ cd 2spooky4me/

# Install the dependencies from our package.json
$ npm install

# Start a server with babel
$ babel-node main.js

# Post a request to `/voice` for testing
$ curl -X POST http://localhost:5794/voice

# Link babel-node server to ngrok
$ ngrok http 5794
```

## Calling

Check out [this awesome guide](https://www.twilio.com/blog/2015/08/playing-tunes-over-the-phone-with-the-twilio-nodejs-library-in-es6.html) for instructions on how to setup Twilio. It was the basis for this code! Once everything is configured in the Twilio console, set your environment variables in terminal:

```bash
$ export TWILIO_ACCOUNT_SID='your_account_sid_here'
$ export TWILIO_AUTH_TOKEN='your_auth_token_here'
```

And update `call.js` with the necessary information to process the call:

```javascript
client.makeCall({
  to: 'your_target_number_here',
  from: 'your_twilio_number_here',
  url: 'http://your_ngrok_server_id_here.ngrok.io/voice'
});
```

# Licensing

See [`LICENSE`](LICENSE) for more details.
