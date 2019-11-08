const favouriteHandler = (req, res) => {
	const idOfDocToChange = req.params.id;
	const newFavValue = req.body.favourite;
	const db = getDB();

	try {
		updateDbQuery(db, idOfDocToChange, newFavValue);
		res.status(200).send();
	} catch (err) {
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
