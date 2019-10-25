import React from "react";
import styles from "./CardContent.module.css";

const truncateString = (stringToTruncate, chosenLength) => {
	if (stringToTruncate.length > chosenLength) {
		return `${stringToTruncate.substring(0, chosenLength)}...`;
	}
	return stringToTruncate;
};

const CardContent = ({
	cardTitle,
	cardHeading,
	cardMainText,
	cardPublicationDate
}) => {
	return (
		<div className={styles.cardContentContainer}>
			<h2>{truncateString(cardTitle, 50)}</h2>
			<h3>{truncateString(cardHeading, 50)}</h3>
			<p className={styles.cardStory}>
				{truncateString(cardMainText, 140)}
			</p>
			<p className={styles.cardDate}>{cardPublicationDate}</p>
		</div>
	);
};

export default CardContent;
