import React from "react";
import mockNews from "./mockNews";
import mockTweet from "./mockTweet";
import AppChild from "./AppChild";
/* 
const APIRequest = () => {
	...
	return [mockNews, mockTweets]
}
React.useEffect(() => {
	data = APIRequest()
})*/

const data = [mockNews, mockTweet];

const App = () => {
	return <AppChild data={data} />;
};

export default App;
