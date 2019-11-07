const twitterClient = require("./twitterConfig.js");

const twitterApi = (mostRecentTweetId) => {
	// let tweets;
	const twitterSearchParams = {
		q: "beamery",
		count: 100,
		result_type: "recent",
		lang: "en",
		// search from max ID in database onwards
		since_id: mostRecentTweetId
	};

	// twitterClient.get(
	//     "search/tweets",
	//     twitterSearchParams,
	//     (error, tweetsReceived, response) => {
	//         if (!error) {
	//             tweets = tweetsReceived;
	//         } else {
	//             console.error(error);
	//         }
	//         return tweets;
	//     }
	// );

	return twitterClient.get("search/tweets", twitterSearchParams);
};

const cleanTwitterApiResponse = (twitterApiResponse) => {
	console.log(twitterApiResponse);
	const cleanedTwitterApiResponse = twitterApiResponse.statuses.map(
		(element) => {
			const cleanedTweet = {};
			cleanedTweet.title = element.title;
			cleanedTweet.heading = `@${element.source.name}`;
			cleanedTweet.mainText = element.description;
			cleanedTweet.publicationDate = new Date(
				element.publishedAt
			).toUTCString();
			cleanedTweet.mediaType = "tweet";
			cleanedTweet.favourite = false;
			cleanedTweet.imageUrl = element.urlToImage;
			cleanedTweet.sourceUrl = element.url;

			return cleanedTweet;
		}
	);

	return cleanedTwitterApiResponse;
};
module.exports = { twitterApi, cleanTwitterApiResponse };
