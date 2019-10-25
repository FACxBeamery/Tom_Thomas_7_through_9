import React from "react";
import CardImage from "../CardImage/CardImage.js";
import CardContent from "../CardContent/CardContent.js";
import CardBanner from "../CardBanner/CardBanner.js";
import styles from "./Card.module.css";

const getHigherResTwitterImage = (imageURL) => {
	if (imageURL) {
		return imageURL.replace("_normal", "");
	} else {
		return null;
	}
};

const Card = ({ cardData, mediaType }) => {
	return mediaType === "tweet" ? (
		<article className={styles.cardContainer}>
			<CardImage
				imageURL={getHigherResTwitterImage(
					cardData.user.profile_image_url_https
				)}
			/>
			<CardContent
				cardTitle={cardData.user.name}
				cardHeading={"@" + cardData.user.screen_name}
				cardMainText={cardData.text}
				cardPublicationDate={cardData.created_at}
			/>
			<CardBanner
				mediaType={mediaType}
				cardSourceURL={cardData.entities.urls[0].expanded_url}
			/>
		</article>
	) : (
		<article className={styles.cardContainer}>
			<CardImage imageURL={cardData.urlToImage} />
			<CardContent
				cardTitle={cardData.title}
				cardHeading={cardData.source.name}
				cardMainText={cardData.description}
				cardPublicationDate={cardData.publishedAt}
			/>
			<CardBanner mediaType={mediaType} cardSourceURL={cardData.url} />
		</article>
	);
};

export default Card;
