const express = require("express");
const router = express();

// import handlers here...
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
    return getDBQuery(); // send this to front end
};

const APITwitter = () => {
    // get response from twitter, clean up and return array of tweets
};

const populateDBQuery = (media) => {
    // check each unique ID in media against IDs currently in DB. Do not 
    // add any items already present. 
};