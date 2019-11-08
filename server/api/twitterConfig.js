const Twitter = require("twitter");

const twitterClient = new Twitter({
    consumer_key: "G4tPW1DmGMY7gDwnBKBQiJNBU", // process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: "meW4ZQOkkWiCIvlvFtoYFhNpmZiSxU97rhpzrQYtd6tKnRf6tg", //process.env.TWITTER_CONSUMER_KEY_SECRET,
    access_token_key: "1164596432860602370-8eTIjzUK4k0yUh64boEJJeeZM7rGXz", //process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: "JkqIjh8xIn1bS1zDsTCk19SIsvoXIflV9bDwJ0WLGH0Lj" //process.env.TWITTER_ACCESS_TOKEN_SECRET
});

module.exports = twitterClient;
