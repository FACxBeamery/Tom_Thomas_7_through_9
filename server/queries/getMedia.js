const { getDB } = require("../databaseConnection.js");

const getMediaArray = (db, cb) =>
	db
		.collection("media")
		.find()
		.toArray(cb);

const getMedia = (req, res) => {
	const db = getDB();

	getMediaArray(db, (error, result) => {
		if (error) {
			return res.status(500).send("error!");
		}
		console.log("inside getMedia res: ", result);
		return res.status(200).send(result);
	});
};

module.exports = getMedia;
