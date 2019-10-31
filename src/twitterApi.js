const Twitter = require("twitter");

const client = new Twitter({
	consumer_key: "AdGVrXZCrw8gp05hxx4K7rdtR",
	consumer_secret: "QMH770w0ds4nvVQtkPoXAcn3TYPGNoXDyHhSUnzGPlSNXANbfE",
	access_token_key: "1164596432860602370-fXQ8We0GhH97Zuvnhz6lsi1nM5Yg3j",
	access_token_secret: "A9CAl0fw5IDcFtEARDa8NRfGQJMlgooObVLS9KN8mVkWw"
});

const params = {
	q: "beamery",
	count: 10,
	result_type: "recent",
	lang: "en"
};

client.get("search/tweets", params, (error, data, response) => {
	if (!error) {
		console.log(JSON.parse(response.body));
	} else {
		console.error(error);
	}
});
