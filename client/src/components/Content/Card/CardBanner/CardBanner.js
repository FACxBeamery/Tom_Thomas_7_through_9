import React from "react";
import styles from "./CardBanner.module.css";
import linkIconPath from "./link.svg";
import fullHeartPath from "./full_heart.svg";
import emptyHeartPath from "./empty_heart.svg";
import axios from "axios";

const CardBanner = ({
	mediaType,
	cardSourceURL,
	favourite,
	setFavourite,
	id
}) => {
	const [heartFull, setHeartFull] = React.useState(false);
	const handleClick = async (heartFull) => {
		const res = await axios.patch(`/media/${id}`, {
			favourite: !heartFull
		});
		if (res.status === 200) {
			setHeartFull((heartFull) => !heartFull);
		} // add error handling here
	};
	return (
		<div
			className={
				styles["banner"] +
				" " +
				(mediaType === "tweet" ? styles["twitter"] : styles["news"])
			}
		>
			<img
				src={heartFull ? fullHeartPath : emptyHeartPath}
				className={styles.icon}
				data-testid="heart-icon"
				alt="a heart icon"
				onClick={handleClick}
			/>
			<a href={cardSourceURL}>
				<img
					src={linkIconPath}
					className={styles["icon"]}
					alt="link icon"
				/>
			</a>
		</div>
	);
};

export default CardBanner;
