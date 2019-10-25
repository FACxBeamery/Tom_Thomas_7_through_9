import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<>
			<div className={styles.footerContainer}>
				<p className={styles.footerText}>
					Brought to you by the Beamery Graduate Team
				</p>
			</div>
		</>
	);
};

export default Footer;
