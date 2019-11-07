const express = require("express");
const router = express();
const getDB = require("./databaseConnection.js").getDB;

const {
	googleNewsApi,
	cleanGoogleNewsApiResponse
} = require("./utils/googleAPI.js");

const getMedia = require("./queries/getMedia");
const twitterApi = require("./utils/twitterAPI.js");


let lastReqTime;

router.get("/media", () => mediaHandler(lastReqTime));

router.patch("/media/:id", favouriteHandler);

module.exports = router;

async function addGoogleNewsToDb() {
	try {
		const googleNewsApiResponse = await googleNewsApi();
		const cleanNews = cleanGoogleNewsApiResponse(googleNewsApiResponse);
		// add to db query
	} catch (error) {
		throw new Error(error.message);
	}
}

const mediaHandler = (lastReqTime) => {
	if (Date.now() - lastReqTime > 60000) {
		// 1 minute
		const twitterApiResponse = twitterApi();
		const cleanTweets = cleanTwitterApiResponse(twitterApiResponse);

		const news = googleNewsApi();
		addGoogleNewsToDb();

		// populateDBQuery([cleanTweets, news]);
	}
    return getMedia; // send this to front end
};


const favouriteHandler = () => {
	const idOfDocToChange = req.params.id;
	const newFavValue = true;
	const db = getDB();

	updateDbQuery(db, idOfDocToChange, newFavValue);

	getUpdatedDoc(db, idOfDocToChange, (error, result) => {
		if (error) {
			throw new Error(error);
		}

		return res.status(200).send(result);
	});

	res.status(200).send();
};

const updateDbQuery = (database, idOfDocToChange, newFavValue) => {
	database
		.collection("media")
		.update({ id: idOfDocToChange }, { favourite: newFavValue });
};

const getUpdatedDoc = (database, idOfDocToFind, callback) => {
	database
		.collection("media")
		.find({ id: idOfDocToFind })
		.toArray(callback);
};

const APITwitter = () => {
	// get response from twitter, clean up and return array of tweets
};


const populateDBQuery = (media) => {
	// check each unique ID in media against IDs currently in DB. Do not
	// add any items already present.
};
