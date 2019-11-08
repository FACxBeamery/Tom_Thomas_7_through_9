const Twitter = require("twitter");

const twitterClient = new Twitter({
    consumer_key: "pHk7rp7J0sZK99CavAZs9fe6o", // process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: "hn0bWg9DvVtuHOl8lT0qLHmnMbMPKhoSE4qCiA7IDyuzafSmfO", //process.env.TWITTER_CONSUMER_KEY_SECRET,
    access_token_key: "1164596432860602370-U6bsnduOROemRkhPpBLK1kEZecmRgA", //process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: "UaDJYO7vGFgfAuWdimlsthxPm0qSLjSVcJip6RpRmEKZC" //process.env.TWITTER_ACCESS_TOKEN_SECRET
});

module.exports = twitterClient;
