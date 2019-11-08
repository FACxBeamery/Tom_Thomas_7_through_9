import React from "react";
import { Card } from "./Card/Card";

import styles from "./Content.module.css";

const Content = ({ contentChoice, tweetsSelected, newsSelected, data }) => {
	let filteredMedia = [];

	if (tweetsSelected) {
		filteredMedia = data.filter((elem) => elem.mediaType === "tweet");
	}

	if (newsSelected) {
		filteredMedia = [
			...filteredMedia,
			...data.filter((elem) => elem.mediaType === "news")
		];
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

	const cardsToRender =
		contentChoice === "most-recent"
			? filteredMedia.map((element) => {
					return <Card key={element._id} cardData={element} />;
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
