# 2spooky4me

A spooky [Twilio](https://www.twilio.com) app that will scare you to bits. Made for Hacktoberfest.

[Give it a whirl.](https://two-spooky-four-me.herokuapp.com)

## Development

Clone, install dependencies, run.

```bash
$ git clone https://github.com/istx25/2spooky4me && cd 2spooky4me/
$ npm install && node index.js
```

In `call.js` update the `url` parameter in the `client.makeCall` function.

```javascript
client.makeCall({
  to: recipient,
  from: twilio,
  url: 'https://your_server_url_goes_here/voice'
})
```

## Acknowledgements

- Thank you [@slapresta](https://github.com/slapresta), [@soops](https://github.com/soops), [@brennanMKE](https://github.com/brennanMKE) and [@jakecraige](https://github.com/jakecraige) for help along the way. 
- The [Gloria Hallelujah](https://fonts.google.com/specimen/Gloria+Hallelujah) font for making the `<h4>` tag look spooky.
- [Skeleton](http://getskeleton.com) for the HTML form.
- [FreeFavicon](http://www.freefavicon.com) for the cute [Pumpkin](http://www.freefavicon.com/freefavicons/food/iconinfo/pumpkin-152-242063.html) icon.
- [Hacktoberfest](https://hacktoberfest.digitalocean.com) for the colour scheme (and giving me the motivation to build this).
- The [Playing tunes over the phone with Twilio Node.js](https://www.twilio.com/blog/2015/08/playing-tunes-over-the-phone-with-the-twilio-nodejs-library-in-es6.html) guide from [Twilio](https://www.twilio.com).

# Licensing

See [`LICENSE`](LICENSE) for more details.
