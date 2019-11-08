import React from "react";
import mockNews from "./mockNews";
import mockTweet from "./mockTweet";
import AppChild from "./AppChild";
import axios from "axios";
const data = [mockNews, mockTweet];

const App = () => {
	console.log("inside app");
	// let data;
	console.log("after data is declared");
	const [dataState, setDataState] = React.useState({});
	React.useEffect(() => {
		console.log("just inside useEffect");
		async function getMessage() {
			try {
				console.log("inside the try catch of useEffect.");
				const response = await axios.get("/media");
				console.log("response :", response);
				setDataState(response.data);
				data = response.data;
			} catch (err) {
				console.log("Error inside useEffect.");
				console.log(err);
			}
		}
		console.log("dataState:", dataState);
		getMessage();
	}, []);
	return <AppChild data={data} />;
};

export default App;
