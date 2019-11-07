const twitterClient = require("./twitterConfig.js");


const twitterAPI = (mostRecentTweetId) => {
    let tweets;
    const twitterSearchParams = {
        q: "beamery",
        count: 100,
        result_type: "recent",
        lang: "en",
        // search from max ID in database onwards
        since_id: mostRecentTweetId
    };

    twitterClient.get(
        "search/tweets",
        twitterSearchParams,
        (error, tweetsReceived, response) => {
            if (!error) {
                tweets = tweetsReceived;
            } else {
                console.error(error);
            }
            return tweets;
        }
    );
};

module.exports = twitterApi;