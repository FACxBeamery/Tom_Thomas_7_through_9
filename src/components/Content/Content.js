import React from "react";
import Card from "../Card/Card";
import mockTweet from "./mockTweet.js";
import mockNews from "./mockNews.js";

const Content = ({ contentChoice, tweetsSelected, newsSelected }) => {
	mockNews.articles.forEach((elem) => {
		elem.mediaType = "news";
	});

	mockTweet.statuses.forEach((elem) => {
		elem.mediaType = "tweet";
	});

	const allMedia = [...mockNews.articles, ...mockTweet.statuses];

	const test = allMedia.map((element) => {
		return <Card cardData={element} />;
	});

	return [test];

	// return (
	// 	<>
	// 		{allMedia.forEach((element) => {
	// 			console.log("element: ", element);
	// 			return <Card cardData={element} mediaType="news" />;
	// 		})}
	// 	</>
	// );

	// return (
	// 	<>
	// 		<Card cardData={mockNews} mediaType="news" />
	// 		<Card cardData={mockTweet} mediaType="tweet" />
	// 	</>
	// );
};

export default Content;
