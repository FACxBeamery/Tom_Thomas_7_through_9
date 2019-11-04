import React from "react";
import { Card } from "./Card/Card";
import mockTweet from "./mockTweet.js";
import mockNews from "./mockNews.js";
import styles from "./Content.module.css";
// import twitterClient from "./twitterConfig.js";

const Content = ({ contentChoice, tweetsSelected, newsSelected }) => {
	// const [newsArticles, setNewsArticles] = React.useState(null);

	// const twitterSearchParams = {
	// 	q: "beamery",
	// 	count: 10,
	// 	result_type: "recent",
	// 	lang: "en"
	// };

	// twitterClient.get(
	// 	"search/tweets",
	// 	twitterSearchParams,
	// 	(error, data, response) => {
	// 		if (!error) {
	// 			console.log(JSON.parse(response.body));
	// 		} else {
	// 			console.error(error);
	// 		}
	// 	}
	// );

	// const googleNewsApiKey = process.env.REACT_APP_GOOGLE_NEWS_API_KEY;

	// const getGoogleNews = () => {
	// 	fetch(
	// 		`https://newsapi.org/v2/everything?q=beamery&language=en&sortBy=publishedAt&apiKey=${googleNewsApiKey}`
	// 	)
	// 		.then((response) => {
	// 			if (response.status !== 200) {
	// 				throw new Error(
	// 					"An error occurred when retrieving articles relating to Beamery, using the Google News API."
	// 				);
	// 			}
	// 			return response.json();
	// 		})
	// 		.then((response) => response.articles)
	// 		.then((articles) => {
	// 			const cleanedNewsArticles = articles.map((elem) => {
	// 				const cleanedArticle = {};
	// 				cleanedArticle.imageUrl = elem.urlToImage;
	// 				cleanedArticle.title = elem.title;
	// 				cleanedArticle.heading = elem.source.name;
	// 				cleanedArticle.mainText = elem.description;
	// 				cleanedArticle.sourceUrl = elem.url;
	// 				cleanedArticle.mediaType = "news";
	// 				cleanedArticle.dateStandard = new Date(
	// 					elem.publishedAt
	// 				).toUTCString();

	// 				return cleanedArticle;
	// 			});
	// 			setNewsArticles(cleanedNewsArticles);
	// 			// console.log("cleanArt: ", cleanedNewsArticles);
	// 		})
	// 		.catch((error) => {
	// 			throw new Error(error.message);
	// 		});
	// };

	// React.useEffect(() => {
	// 	getGoogleNews();
	// }, []);

	mockNews.articles.forEach((elem) => {
		elem.mediaType = "news";
		elem.dateStandard = new Date(elem.publishedAt).toUTCString();
	});

	mockTweet.statuses.forEach((elem) => {
		elem.mediaType = "tweet";
		elem.dateStandard = new Date(elem.created_at).toUTCString();
	});

	const filteredMedia = [];

	if (tweetsSelected) {
		filteredMedia.push(...mockTweet.statuses);
	}
	if (newsSelected) {
		filteredMedia.push(...mockNews.articles);
	}

	if (filteredMedia.length === 0) {
		return (
			<>
				<p className={styles["no-content"]}>
					Please select the content you'd like to see
				</p>
			</>
		);
	}

	filteredMedia.sort((a, b) => {
		const dateA = new Date(a.dateStandard);
		const dateB = new Date(b.dateStandard);
		return dateB - dateA;
	});

	// const cardsToRender = filteredMedia.map((element) => {
	// 	console.log("inside cardsToRender, logging each card: ", element);
	// 	return <Card cardData={element} />;
	// });

	const cardsToRender =
		contentChoice === "most-recent"
			? filteredMedia.map((element) => {
					return (
						<Card
							key={Date.parse(element.dateStandard)}
							cardData={element}
						/>
					);
			  })
			: filteredMedia
					.filter((element) => element.favourite === true)
					.map((element) => {
						return (
							<Card
								key={Date.parse(element.dateStandard)}
								cardData={element}
							/>
						);
					});

	return (
		<div className={styles["content"]} data-testid="content-container">
			{[cardsToRender]}
		</div>
	);
};

export default Content;
