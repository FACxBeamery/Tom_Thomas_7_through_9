import React from "react";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
	const [contentChoice, setContentChoice] = React.useState("most-recent");
	const [tweetsSelected, setTweetsSelected] = React.useState(true);
	const [newsSelected, setNewsSelected] = React.useState(true);
	const [favouritesObj, setFavouritesObj] = React.useState({});

	return (
		<div className="App">
			<Header
				contentChoice={contentChoice}
				setContentChoice={setContentChoice}
				tweetsSelected={tweetsSelected}
				setTweetsSelected={setTweetsSelected}
				newsSelected={newsSelected}
				setNewsSelected={setNewsSelected}
				favouritesObj={favouritesObj}
				setFavouritesObj={setFavouritesObj}
			/>
			<Content
				contentChoice={contentChoice}
				tweetsSelected={tweetsSelected}
				newsSelected={newsSelected}
				favouritesObj={favouritesObj}
				setFavouritesObj={setFavouritesObj}
			/>
			<Footer />
		</div>
	);
}

export default App;
