const { getDB } = require("../databaseConnection.js");

const getMediaArray = (db, cb) =>
	db
		.collection("media")
		.find()
		.sort({ dateStandard: -1 })
		.toArray(cb);

module.exports = getMediaArray;
