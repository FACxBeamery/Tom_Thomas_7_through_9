import React from "react";
import buttonStyles from "./Button.module.css";

const Button = ({ onClick, highlighted, buttonText }) => {
	return (
		<button
			className={
				highlighted === true
					? buttonStyles.menuButton +
					  " " +
					  buttonStyles.highlightedButton
					: buttonStyles.menuButton
			}
			onClick={onClick}
		>
			{buttonText}
		</button>
	);
};

export default Button;
