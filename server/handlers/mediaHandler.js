const {
    googleNewsApi,
    cleanGoogleNewsApiResponse
} = require("../api/googleAPI.js");


const getMedia = require("./queries/getMedia");


const { twitterApi, cleanTwitterApiResponse } = require("../api/twitterAPI.js");

const mediaHandler = (lastReqTime) => {
    if (Date.now() - lastReqTime > 60000) {
        // 1 minute
        const twitterApiResponse = twitterApi();
        const cleanTweets = cleanTwitterApiResponse(twitterApiResponse);
        // populateDb(cleanTweets)
        addGoogleNewsToDb();
    }
    return getMedia; // send this to front end
};

async function addGoogleNewsToDb() {
    try {
        const googleNewsApiResponse = await googleNewsApi();
        const cleanNews = cleanGoogleNewsApiResponse(googleNewsApiResponse);
        // populateDb(cleanNews)
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = mediaHandler;

