import "@testing-library/jest-dom/extend-expect";
import { getHigherResTwitterImage } from "./Card.js";

test("Testing that getHigherResTwitterImage() returns null when the argument doesn't exist", () => {
	expect(getHigherResTwitterImage(undefined)).toBeNull();
});

test("Testing getHigherResTwitterImage() removes the '_normal' part of the image URL.", () => {
	const testImageUrl =
		"https://pbs.twimg.com/profile_images/845930850210361344/fgHcvMFy_normal.jpg";
	const testImageUrlStripped =
		"https://pbs.twimg.com/profile_images/845930850210361344/fgHcvMFy.jpg";
	expect(getHigherResTwitterImage(testImageUrl)).toBe(testImageUrlStripped);
});
