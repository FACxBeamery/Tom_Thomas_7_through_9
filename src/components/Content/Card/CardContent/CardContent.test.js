import "@testing-library/jest-dom/extend-expect";
import { truncateString } from "./CardContent.js";

test("Testing truncateString() shortens a string above the specified length and adds an ellipsis to the end.", () => {
	const stringToShorten = "A sample string to be cut after 30 characters";
	const shortenedString = "A sample string to be cut afte...";

	expect(truncateString(stringToShorten, 30)).toBe(shortenedString);
});

test("Testing truncateString() doesn't shorten a string if it isn't long enough.", () => {
	const stringToShorten = "A short string";

	expect(truncateString(stringToShorten, 50)).toBe(stringToShorten);
});

test("Testing truncateString() returns null if the first argument is missing.", () => {
	expect(truncateString(undefined, 20)).toBeNull();
});
