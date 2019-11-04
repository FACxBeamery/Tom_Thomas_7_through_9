import React from "react";
import styles from "./CardBanner.module.css";
import linkIconPath from "./link.svg";
import fullHeartPath from "./full_heart.svg";
import emptyHeartPath from "./empty_heart.svg";

const CardBanner = ({
	mediaType,
	cardSourceURL,
	key,
	favouritesObj,
	setFavouritesObj
}) => {
	// const [favourite, setFavourite] = React.useState(false);
	return (
		<div
			className={
				styles.banner +
				" " +
				(mediaType === "tweet" ? styles.twitter : styles.news)
			}
		>
			<img
				src={favouritesObj[key] ? fullHeartPath : emptyHeartPath}
				className={styles.icon}
				data-testid="heart-icon"
				alt="a heart icon"
				onClick={() => {
					const nextFavouritesObj = { ...favouritesObj };
					nextFavouritesObj[key] = true;
					setFavouritesObj(nextFavouritesObj);
					// setFavourite((favourite) => !favourite);
				}}
			/>
			<a href={cardSourceURL}>
				<img
					src={linkIconPath}
					className={styles.icon}
					alt="link icon"
				/>
			</a>
		</div>
	);
};

export default CardBanner;
