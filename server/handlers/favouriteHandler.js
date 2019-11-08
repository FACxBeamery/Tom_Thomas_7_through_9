const favouriteHandler = (req, res) => {
	console.log(req.body);

	try {
		const idOfDocToChange = req.params.id;
		const newFavValue = req.body.favourite;
		const db = getDB();
		updateDbQuery(db, idOfDocToChange, newFavValue);
		res.status(200).send();
	} catch (err) {
		console.log("couldn't adapt db!");
		res.status(500).send();
		console.error(err);
	}
	// getUpdatedDoc(db, idOfDocToChange, (error, result) => {
	// 	if (error) {
	// 		throw new Error(error);
	// 	}

	// 	return res.status(200).send(result);
	// });
};
module.exports = favouriteHandler;
