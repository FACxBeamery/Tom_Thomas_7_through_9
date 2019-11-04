import React from "react";
import styles from "./Header.module.css";
import imagePath from "./header.svg";
import Menu from "./Menu/Menu";
const Header = ({
	contentChoice,
	setContentChoice,
	tweetsSelected,
	setTweetsSelected,
	newsSelected,
	setNewsSelected
}) => {
	const [menuSelected, setMenuSelected] = React.useState(false);
	const handleClick = () => {
		setMenuSelected((menuSelected) => !menuSelected);
	};

	return (
		<>
			<div className={styles["header-container"]}>
				<img
					className={styles["logo"]}
					src={imagePath}
					alt="Beamery Social Logo"
				/>
				<div
					className={styles["burger-container"]}
					onClick={handleClick}
					data-testid="burger"
				>
					<div
						className={
							menuSelected ? styles["change1"] : styles["bar1"]
						}
					></div>
					<div
						className={
							menuSelected ? styles["change2"] : styles["bar2"]
						}
					></div>
					<div
						className={
							menuSelected ? styles["change3"] : styles["bar3"]
						}
					></div>
				</div>
			</div>
			{menuSelected ? (
				<Menu
					contentChoice={contentChoice}
					setContentChoice={setContentChoice}
					tweetsSelected={tweetsSelected}
					setTweetsSelected={setTweetsSelected}
					newsSelected={newsSelected}
					setNewsSelected={setNewsSelected}
				/>
			) : null}
		</>
	);
};

export default Header;
