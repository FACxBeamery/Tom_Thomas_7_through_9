import React from "react";
import styles from "./CardImage.module.css";
import imagePath from "./question.svg";
const CardImage = ({ imageURL }) => {
	return (
		<div className={styles.imageContainer}>
			<img
				src={imageURL ? imageURL : imagePath}
				className={styles.cardImage}
				alt={imageURL ? "related to tweet" : "image not found"}
			/>
		</div>
	);
};

export default CardImage;
