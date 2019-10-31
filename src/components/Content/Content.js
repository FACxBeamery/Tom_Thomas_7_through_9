import React from "react";
import Card from "./Card/Card";
import mockTweet from "./mockTweet.js";
import mockNews from "./mockNews.js";
import styles from "./Content.module.css";

const Content = ({ contentChoice, tweetsSelected, newsSelected }) => {
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
				<p className={styles.noContent}>
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

	const cardsToRender = filteredMedia.map((element) => {
		return <Card cardData={element} />;
	});

	return [cardsToRender];
};

export default Content;
