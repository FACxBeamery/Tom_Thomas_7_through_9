const express = require("express");
const router = require("./router.js");
const port = process.env.PORT || 4000;
const { initDB, getDB, closeDB } = require("./databaseConnection.js");
const bodyParser = require("./middleware/bodyParser.js");

const app = express();

// app.use(bodyParser);

app.use(router);

initDB()
	.then((_db) => {
		app.listen(port, () => {
			console.log(`API up and running on port ${port}`);
		});
	})
	.catch(console.error);

// app.listen(4000);
