import React from "react";
import styles from "./CardImage.module.css";

const CardImage = ({ imageURL }) => {
	return (
		<div className={styles.imageContainer}>
			<img
				src={imageURL}
				className={styles.cardImage}
				alt="related to tweet"
			></img>
		</div>
	);
};

export default CardImage;
