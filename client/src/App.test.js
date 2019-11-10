import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import App from "./App.js";
import AppChild from "./AppChild";
import mockNews from "./mockNews";
import mockTweet from "./mockTweet";
import { render, fireEvent, cleanup } from "@testing-library/react";
afterEach(cleanup);

const data = [mockNews, mockTweet];

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<AppChild data={data} />, div);
	ReactDOM.unmountComponentAtNode(div);
});

test("Menu working", () => {
	const { getByText, getByTestId, queryByText, queryAllByTestId } = render(
		<AppChild data={data} />
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
	const { getByText, getByTestId, queryAllByTestId } = render(
		<AppChild data={data} />
	);

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

const dummyResponseData = {
	title: "Adam Rabinovitch",
	heading: "@adam_rab",
	mainText:
		"@BeameryHQ are hiring for a number of Senior Back End Developers to join experienced engineers on a full time basis… https://t.co/hCkIyCrnIK",
	publicationDate: "Thu, 07 Nov 2019 14:02:47 GMT",
	dateStandard: "2019-11-07T14:02:47Z",
	mediaType: "tweet",
	favourite: false,
	imageUrl:
		"https://pbs.twimg.com/profile_images/1187463377175498752/2RjaTRqD_normal.jpg",
	sourceUrl: "https://twitter.com/i/web/status/1192442275877588994"
};

const mockAxios = {
	get: jest.fn().mockImplementation(() =>
		Promise.resolve({
			text: () => Promise.resolve(dummyResponseData)
			// {data : {}}
		})
	)
};

test("Favourites funcitonality working", () => {
	const { getByText, getByTestId, queryAllByTestId } = render(<App />);

	expect(mockAxios.get).toHaveBeenCalledTimes(1);
});
