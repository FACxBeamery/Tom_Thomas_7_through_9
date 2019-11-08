const fetch = require("node-fetch");
const googleNewsApiKey = "203de1291f84406b882eb621494b4b6c"; //process.env.REACT_APP_GOOGLE_NEWS_API_KEY;

const googleNewsApi = () => {
	return fetch(
		`https://newsapi.org/v2/everything?q=beamery&language=en&sortBy=publishedAt&apiKey=${googleNewsApiKey}`
	)
		.then((response) => {
			if (response.status !== 200) {
				throw new Error(
					"An error occurred when retrieving articles relating to Beamery, using the Google News API."
				);
			}
			return response.json();
		})
		.then((response) => response.articles)
		.catch((error) => {
			throw new Error(error.message);
		});
};

const cleanGoogleNewsApiResponse = (articles) => {
	const cleanedNewsArticles = articles.map((elem) => {
		const cleanedArticle = {};
		cleanedArticle.imageUrl = elem.urlToImage;
		cleanedArticle.title = elem.title;
		cleanedArticle.heading = elem.source.name;
		cleanedArticle.mainText = elem.description;
		cleanedArticle.sourceUrl = elem.url;
		cleanedArticle.mediaType = "news";
		cleanedArticle.publicationDate = new Date(
			elem.publishedAt
		).toUTCString();
		cleanedArticle.dateStandard = new Date(elem.publishedAt);
		cleanedArticle.favourite = false;
		return cleanedArticle;
	});
	return cleanedNewsArticles;
};

module.exports = { googleNewsApi, cleanGoogleNewsApiResponse };
