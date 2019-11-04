import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<>
			<div className={styles["footer"]}>
				<p className={styles["footer__text"]}>
					Brought to you by the Beamery Graduate Team
				</p>
			</div>
		</>
	);
};

export default Footer;
