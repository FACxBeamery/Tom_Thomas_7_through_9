import React from "react";
import styles from "./CardBanner.module.css";
const CardBanner = ({ type }) => {
	return (
		<div
			className={
				styles.banner +
				" " +
				(type === "twitter" ? styles.twitter : styles.news)
			}
		></div>
	);
};

export default CardBanner;
