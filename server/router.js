const express = require("express");
const router = express();
const getMedia = require("./queries/getMedia");
const googleNewsApi = require("./utils/googleAPI.js");
const twitterApi = require("./utils/twitterAPI.js");

let lastReqTime;

router.get("/media", () => mediaHandler(lastReqTime));

router.patch("/media/:id", favouriteHandler);

module.exports = router;

const mediaHandler = (lastReqTime) => {
    if (Date.now() - lastReqTime > 60000) {// 1 minute
        const twitterApiResponse = twitterApi();
        const cleanTweets = cleanTwitterApiResponse(twitterApiResponse);

        const news = googleNewsApi();
        populateDBQuery([cleanTweets, news]);

    }
    return getMedia; // send this to front end
};



const populateDBQuery = (media) => {
    // check each unique ID in media against IDs currently in DB. Do not 
    // add any items already present. 
};