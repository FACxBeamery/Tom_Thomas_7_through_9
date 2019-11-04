import React from "react";
import CardImage from "./CardImage/CardImage.js";
import { CardContent } from "./CardContent/CardContent.js";
import CardBanner from "./CardBanner/CardBanner.js";
import styles from "./Card.module.css";

const getHigherResTwitterImage = (imageURL) => {
	if (imageURL) {
		return imageURL.replace("_normal", "");
	} else {
		return null;
	}
};

const Card = ({ cardData }) => {
	const [favourite, setFavourite] = React.useState(false);
	cardData.favourite = favourite;
	return cardData.mediaType === "tweet" ? (
		<article className={styles["card"]}>
			<CardImage
				imageURL={getHigherResTwitterImage(
					cardData.user.profile_image_url_https
				)}
				mediaType="tweet"
			/>
			<CardContent
				cardTitle={cardData.user.name}
				cardHeading={"@" + cardData.user.screen_name}
				cardMainText={cardData.text}
				cardPublicationDate={cardData.dateStandard}
			/>
			<CardBanner
				mediaType={cardData.mediaType}
				// cardSourceURL={cardData.entities.urls[0].expanded_url}
				favourite={cardData.favourite}
				setFavourite={setFavourite}
			/>
		</article>
	) : (
		<article className={styles["card"]}>
			<CardImage imageURL={cardData.urlToImage} mediaType="news" />
			<CardContent
				cardTitle={cardData.title}
				cardHeading={cardData.source.name}
				cardMainText={cardData.description}
				cardPublicationDate={cardData.dateStandard}
			/>
			<CardBanner
				mediaType={cardData.mediaType}
				cardSourceURL={cardData.url}
				favourite={cardData.favourite}
				setFavourite={setFavourite}
			/>
		</article>
	);
};

export { Card, getHigherResTwitterImage };
