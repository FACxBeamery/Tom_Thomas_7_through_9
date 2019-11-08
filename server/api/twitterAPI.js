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

	return twitterClient.get("search/tweets", twitterSearchParams);
};

const cleanTwitterApiResponse = (twitterApiResponse) => {
	const cleanedTwitterApiResponse = twitterApiResponse.statuses.map(
		(element) => {
			const cleanedTweet = {};
			cleanedTweet.title = element.user.name;
			cleanedTweet.heading = `@${element.user.screen_name}`;
			cleanedTweet.mainText = element.text;
			cleanedTweet.publicationDate = new Date(
				element.created_at
			).toUTCString();
			cleanedTweet.dateStandard = new Date(element.created_at);
			cleanedTweet.mediaType = "tweet";
			cleanedTweet.favourite = false;
			cleanedTweet.imageUrl = element.user.profile_image_url_https;
			cleanedTweet.sourceUrl = element.entities.urls[0]
				? element.entities.urls[0].expanded_url
				: "not available";

			return cleanedTweet;
		}
	);
	return cleanedTwitterApiResponse;
};
module.exports = { twitterApi, cleanTwitterApiResponse };
