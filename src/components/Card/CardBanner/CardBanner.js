import React from "react";
import styles from "./CardBanner.module.css";
import linkIconPath from "./link.svg";
const CardBanner = ({ mediaType, cardSourceURL }) => {
	return (
		<div
			className={
				styles.banner +
				" " +
				(mediaType === "tweet" ? styles.twitter : styles.news)
			}
		>
			{" "}
			<a href={cardSourceURL}>
				<img src={linkIconPath} className={styles.icon} />
			</a>
		</div>
	);
};

export default CardBanner;
