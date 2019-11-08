const {
    googleNewsApi,
    cleanGoogleNewsApiResponse
} = require("../api/googleAPI.js");
const addToDbQuery = require("../queries/addToDbQuery.js");
const getMediaArray = require("../queries/getMedia");
const { twitterApi, cleanTwitterApiResponse } = require("../api/twitterAPI.js");
const { initDB, getDB, closeDB } = require("../databaseConnection.js");

const mediaHandler = (req, res) => {
    const db = getDB();
    makeApiCalls(req, res, db);
};

async function makeApiCalls(req, res, db) {
    await addGoogleNewsToDb(db);
    await addTwitterToDb(db);
    getMediaArray(db, (error, result) => {
        if (error) {
            throw new Error("Couldn't retrieve media array");
        }
        return res.status(200).send(result);
    });
}

async function addGoogleNewsToDb(db) {
    try {
        const googleNewsApiResponse = await googleNewsApi();
        const cleanNews = cleanGoogleNewsApiResponse(googleNewsApiResponse);
        addToDbQuery(db, cleanNews);
    } catch (error) {
        console.error(error);
    }
}

async function addTwitterToDb(db) {
    try {
        const twitterApiResponse = await twitterApi();
        const cleanTweets = cleanTwitterApiResponse(twitterApiResponse);
        addToDbQuery(db, cleanTweets);
    } catch (error) {
        // throw new Error(error.message);
        console.error(error);
    }
}

module.exports = mediaHandler;
