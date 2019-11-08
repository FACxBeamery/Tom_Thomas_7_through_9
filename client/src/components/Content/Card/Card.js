import React from "react";
import CardImage from "./CardImage/CardImage.js";
import { CardContent } from "./CardContent/CardContent.js";
import CardBanner from "./CardBanner/CardBanner.js";
import styles from "./Card.module.css";

const getHigherResTwitterImage = (imageURL) => {
	if (imageURL) {
		return imageURL.replace("_normal", "");
	}
	return null;
};

const Card = ({ cardData }) => {
	const [favourite, setFavourite] = React.useState(false);
	cardData.favourite = favourite;
	return (
		<article className={styles["card"]}>
			<CardImage
				imageURL={
					cardData.mediaType === "tweet"
						? getHigherResTwitterImage(cardData.imageUrl)
						: cardData.imageUrl
				}
				mediaType={cardData.mediaType}
			/>
			<CardContent
				cardTitle={cardData.title}
				cardHeading={cardData.heading}
				cardMainText={cardData.mainText}
				cardPublicationDate={cardData.publicationDate}
			/>
			<CardBanner
				mediaType={cardData.mediaType}
				cardSourceURL={cardData.sourceUrl}
				favourite={cardData.favourite}
				setFavourite={setFavourite}
				_id={cardData._id}
			/>
		</article>
	);
};

export { Card, getHigherResTwitterImage };
