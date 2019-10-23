import React from "react";
import CardImage from "../CardImage/CardImage.js";
import CardContent from "../CardContent/CardContent.js";
import CardBanner from "../CardBanner/CardBanner.js";
import styles from "./Card.module.css";

const Card = ({ cardData }) => {
	return (
		<article className={styles.cardContainer}>
			<CardImage />
			<CardContent />
			<CardBanner type="news" />
		</article>
	);
};

export default Card;
