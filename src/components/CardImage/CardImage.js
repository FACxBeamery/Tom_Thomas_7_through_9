import React from "react";
import styles from "./CardImage.module.css";

const CardImage = ({ url }) => {
	return (
		<div className={styles.imageContainer}>
			<img
				src="
https://cdn.cnn.com/cnnnext/dam/assets/190924132558-01-trump-file-lead-image-super-tease.jpg"
				className={styles.cardImage}
			></img>
		</div>
	);
};

export default CardImage;
