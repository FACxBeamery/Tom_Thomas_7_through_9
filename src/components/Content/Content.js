import React from "react";
import Card from "../Card/Card";
import mockTweet from "./mockTweet.js";
import mockNews from "./mockNews.js";

const Content = ({ contentChoice, tweetsSelected, newsSelected }) => {
	mockNews.articles.forEach((elem) => {
		elem.mediaType = "news";
		elem.dateStandard = new Date(elem.publishedAt).toUTCString();
	});

	mockTweet.statuses.forEach((elem) => {
		elem.mediaType = "tweet";
		elem.dateStandard = new Date(elem.created_at).toUTCString();
	});

	const allMedia = [...mockNews.articles, ...mockTweet.statuses];

	allMedia.sort((a, b) => {
		return b.dateStandard - a.dateStandard;
	});

	const test = allMedia.map((element) => {
		return <Card cardData={element} />;
	});

	return [test];
};

export default Content;
