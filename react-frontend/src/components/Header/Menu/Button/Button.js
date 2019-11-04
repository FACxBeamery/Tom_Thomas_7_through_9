import React from "react";
import buttonStyles from "./Button.module.css";

const Button = ({ onClick, highlighted, buttonText }) => {
	return (
		<button
			className={
				highlighted === true
					? buttonStyles["menu-button"] +
					  " " +
					  buttonStyles["highlighted-button"]
					: buttonStyles["menu-button"]
			}
			onClick={onClick}
		>
			{buttonText}
		</button>
	);
};

export default Button;
