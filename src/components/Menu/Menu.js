import React from "react";
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
		<div className={styles.menuContainer}>
			<div className={styles.tabContainer}>
				<button
					className={
						contentChoice === "most-recent"
							? styles.menuButton + " " + styles.highlightedButton
							: styles.menuButton
					}
					onClick={() => setContentChoice("most-recent")}
				>
					Most Recent
				</button>
				<button
					className={
						contentChoice === "favourites"
							? styles.menuButton + " " + styles.highlightedButton
							: styles.menuButton
					}
					onClick={() => setContentChoice("favourites")}
				>
					Favourites
				</button>
			</div>
			<div className={styles.filterContainer}>
				<button
					className={
						tweetsSelected === true
							? styles.menuButton + " " + styles.highlightedButton
							: styles.menuButton
					}
					onClick={() =>
						setTweetsSelected((tweetsSelected) => !tweetsSelected)
					}
				>
					Tweets
				</button>
				<button
					className={
						newsSelected === true
							? styles.menuButton + " " + styles.highlightedButton
							: styles.menuButton
					}
					onClick={() =>
						setNewsSelected((newsSelected) => !newsSelected)
					}
				>
					News Articles
				</button>
			</div>
		</div>
	);
};

export default Menu;
