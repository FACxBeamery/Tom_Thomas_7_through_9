import React from "react";
import styles from "./CardBanner.module.css";
const CardBanner = ({ mediaType, cardSourceURL }) => {
	return (
		<div
			className={
				styles.banner +
				" " +
				(mediaType === "tweet" ? styles.twitter : styles.news)
			}
		></div>
	);
};

export default CardBanner;
