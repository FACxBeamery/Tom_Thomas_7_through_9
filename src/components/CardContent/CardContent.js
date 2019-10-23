import React from "react";
import styles from "./CardContent.module.css";

const truncateString = (stringToTruncate, chosenLength) => {
	return `${stringToTruncate.substring(0, chosenLength)}...`;
};

const CardContent = () => {
	const mock = {
		source: {
			id: "crypto-coins-news",
			name: "Crypto Coins News"
		},
		author: "Mark Emem",
		title:
			"Bitcoin Price Plunges $500 Within Minutes to 5-Month Low Below $7,500",
		description:
			"The bitcoin price has plunged by nearly 10% on Wednesday to fall near a 5-month low. After flirting with a move to the upside above $8,000, the leading cryptocurrency dropped sharply below to just under $7,500. Other major-cap cryptocurrencies also followed B…",
		url:
			"https://www.ccn.com/bitcoin-price-plunges-500-5-month-low-below-7500/",
		urlToImage:
			"https://www.ccn.com/wp-content/uploads/2019/10/Bitcoin-price-red-chart.jpg",
		publishedAt: "2019-10-23T13:42:51Z",
		content:
			"The bitcoin price has plunged by nearly 10%  on Wednesday to fall near a 5-month low.\r\nAfter flirting with a move to the upside above $8,000, the leading cryptocurrency dropped sharply below to just under $7,500.\r\nBitcoin price chart | Source: TradingView\r\nOt… [+581 chars]"
	};

	return (
		<div className={styles.cardContentContainer}>
			<h1>{truncateString(mock.title, 50)}</h1>
			<h2>{truncateString(mock.source.name, 50)}</h2>
			<p className={styles.cardStory}>
				{truncateString(mock.content, 140)}
			</p>
			<p className={styles.cardDate}>{mock.publishedAt}</p>
		</div>
	);
};

export default CardContent;
