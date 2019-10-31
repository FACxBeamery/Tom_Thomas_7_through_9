import Twitter from "twitter";

const twitterClient = new Twitter({
	consumer_key: process.env.REACT_APP_TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.REACT_APP_TWITTER_CONSUMER_KEY_SECRET,
	access_token_key: process.env.REACT_APP_TWITTER_ACCESS_TOKEN_KEY,
	access_token_secret: process.env.REACT_APP_TWITTER_ACCESS_TOKEN_SECRET,
	request_options: {
		proxy: "https://cors-anywhere.herokuapp.com"
	}
});

export default twitterClient;
