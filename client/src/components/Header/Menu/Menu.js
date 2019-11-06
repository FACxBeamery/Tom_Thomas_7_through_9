import React from "react";
import Button from "./Button/Button";
import styles from "./Menu.module.css";
const Menu = ({
	contentChoice,
	setContentChoice,
	tweetsSelected,
	setTweetsSelected,
	newsSelected,
	setNewsSelected
}) => {
	return (
		<div className={styles["menu-container"]}>
			<div className={styles["tab-container"]}>
				<Button
					onClick={() => setContentChoice("most-recent")}
					highlighted={contentChoice === "most-recent"}
					buttonText="Most Recent"
				/>
				<Button
					onClick={() => setContentChoice("favourites")}
					highlighted={contentChoice === "favourites"}
					buttonText="Favourites"
				/>
			</div>
			<div className={styles["filter-container"]}>
				<Button
					onClick={() =>
						setTweetsSelected((tweetsSelected) => !tweetsSelected)
					}
					highlighted={tweetsSelected === true}
					buttonText="Tweets"
				/>
				<Button
					onClick={() =>
						setNewsSelected((newsSelected) => !newsSelected)
					}
					highlighted={newsSelected === true}
					buttonText="News"
				/>
			</div>
		</div>
	);
};

export default Menu;
