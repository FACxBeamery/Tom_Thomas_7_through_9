import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import {
	render,
	fireEvent,
	cleanup,
	waitForElement
} from "@testing-library/react";
afterEach(cleanup);

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

test("Menu working", () => {
	const {
		getByText,
		getAllByText,
		getByTestId,
		findByText,
		queryByText
	} = render(<App />);
	const burgerMenu = getByTestId("burger");
	fireEvent.click(burgerMenu); // open menu

	const TweetsButton = getByText("Tweets");
	const NewsButton = getByText("News");

	fireEvent.click(TweetsButton); // deselect tweets
	fireEvent.click(NewsButton); // deselect news
	getByText("Please select the content you'd like to see");

	fireEvent.click(TweetsButton); // select tweets
	getAllByText(/^\@/); // to be replaced by a test for the twitter icon

	fireEvent.click(TweetsButton); // deselect tweets
	fireEvent.click(NewsButton); // select news
	expect(queryByText(/^\@/)).toBeNull();
	fireEvent.click(burgerMenu); // close Menu
	expect(queryByText("Most Recent")).toBeNull();
});
