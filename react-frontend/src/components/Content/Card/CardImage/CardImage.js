import React from "react";
import styles from "./CardImage.module.css";
import imagePath from "./question.svg";
import newsIconPath from "./newspaper.svg";
import twitterIconPath from "./twitter.svg";

const CardImage = ({ imageURL, mediaType }) => {
	return (
		<div className={styles["image"]} data-testid="cardimage">
			<img
				src={imageURL ? imageURL : imagePath}
				className={styles["card__image"]}
				alt={imageURL ? "related to tweet" : "image not found"}
				data-testid="newspaper-icon"
			/>
			<img
				src={mediaType === "tweet" ? twitterIconPath : newsIconPath}
				className={styles["icon"]}
				data-testid="twitter-icon"
				alt="twitter icon"
			/>
		</div>
	);
};

export default CardImage;
