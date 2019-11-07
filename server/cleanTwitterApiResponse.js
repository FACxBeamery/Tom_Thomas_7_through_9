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
            cleanedTweet.mediaType = "news";
            cleanedTweet.favourite = false;
            cleanedTweet.imageUrl = element.urlToImage;
            cleanedTweet.sourceUrl = element.url;

            return cleanedTweet;
        }
    );

    return cleanedTwitterApiResponse;
};

module.exports = cleanTwitterApiResponse;
