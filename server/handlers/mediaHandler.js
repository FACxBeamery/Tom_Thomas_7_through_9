const {
	googleNewsApi,
	cleanGoogleNewsApiResponse
} = require("../api/googleAPI.js");
const addToDbQuery = require("../queries/addToDbQuery.js");
const getMedia = require("../queries/getMedia");
const { twitterApi, cleanTwitterApiResponse } = require("../api/twitterAPI.js");

const mediaHandler = () => {
	console.log("inside media handler");
	if (true) {
		// 1 minute
		// const twitterApiResponse = twitterApi();
		// const cleanTweets = cleanTwitterApiResponse(twitterApiResponse);
		// addToDbQuery(cleanTweets);

		addGoogleNewsToDb();
		// addTwitterToDb();
	}
	return getMedia; // send this to front end
};

async function addGoogleNewsToDb() {
	try {
		const googleNewsApiResponse = await googleNewsApi();
		const cleanNews = cleanGoogleNewsApiResponse(googleNewsApiResponse);
		addToDbQuery(cleanNews);
	} catch (error) {
		throw new Error(error.message);
	}
}

async function addTwitterToDb() {
	try {
		const twitterApiResponse = await twitterApi();
		const cleanTweets = cleanTwitterApiResponse(twitterApiResponse);
		addToDbQuery(cleanTweets);
	} catch (error) {
		throw new Error(error.message);
	}
}

module.exports = mediaHandler;
