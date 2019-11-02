import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

import { render, fireEvent, cleanup } from "@testing-library/react";
afterEach(cleanup);

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

test("Menu working", () => {
	const { getByText, getByTestId, queryByText, queryAllByTestId } = render(
		<App />
	);
	const burgerMenu = getByTestId("burger");
	fireEvent.click(burgerMenu); // open menu

	const TweetsButton = getByText("Tweets");
	const NewsButton = getByText("News");

	fireEvent.click(TweetsButton); // deselect tweets
	fireEvent.click(NewsButton); // deselect news
	expect(
		getByText("Please select the content you'd like to see")
	).toBeVisible();

	fireEvent.click(TweetsButton); // select tweets
	expect(queryAllByTestId("twitter-icon")).toBeTruthy() &&
		expect(queryAllByTestId("news-icon")).toBeFalsy(); // only tweets are visible

	fireEvent.click(TweetsButton); // deselect tweets
	fireEvent.click(NewsButton); // select news
	expect(queryAllByTestId("news-icon")).toBeTruthy() &&
		expect(queryAllByTestId("twitter-icon")).toBeFalsy();
	fireEvent.click(burgerMenu); // close Menu
	expect(queryByText("Most Recent")).toBeNull() &&
		expect(queryByText("Favourites")).toBeNull() &&
		expect(queryByText("Tweets")).toBeNull() &&
		expect(queryByText("News")).toBeNull();
});

test("Favourites funcitonality working", () => {
	const { getByText, getByTestId, queryAllByTestId } = render(<App />);

	const burgerMenu = getByTestId("burger");

	fireEvent.click(burgerMenu); // open menu

	const mostRecentButton = getByText("Most Recent");
	const favouritesButton = getByText("Favourites");

	fireEvent.click(favouritesButton); // open Favourites tab

	expect(getByTestId("content-container")).toBeEmpty(); // no media items should appear

	fireEvent.click(mostRecentButton); //back to Most Recent tab

	const firstHeartIcon = queryAllByTestId("heart-icon")[0];

	fireEvent.click(firstHeartIcon); // favourite first media item

	fireEvent.click(favouritesButton); // back to Favourites tab

	expect(getByTestId("content-container")).not.toBeEmpty(); // the favourited item is present
});
