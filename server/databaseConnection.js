const mongoUri = process.env.MONGO_URI || "mongo://localhost:27017/db";
const mongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true
};

let _db;
let _client;

const initDB = () => {
	return new Promise((resolve, reject) => {
		const dbConnect = (error, client) => {
			if (error) {
				reject(error);
			} else {
				console.log("Initialising DB!");
				_client = client;
				_db = client.db("beamerySocial");
				// db.collection("media").insertOne({
				// 	message: "Initialise DB."
				// });
				resolve(_db);
			}
		};
		if (_db) {
			console.warn("Trying to init DB again!");
			resolve(_db);
		}

		mongoClient.connect(mongoUri, options, dbConnect);
	});
};

const getDB = () => {
	assert.ok(_db, "DB has not been initialised. Please call initDB first.");
	return _db;
};

const closeDB = () => {
	_db = null;
	return _client.close();
};

module.exports = { initDB, getDB, closeDB };
