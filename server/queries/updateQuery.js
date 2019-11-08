const updateDbQuery = (database, idOfDocToChange, newFavValue) => {
	database
		.collection("media")
		.update({ id: idOfDocToChange }, { favourite: newFavValue });
};

module.exports = updateDbQuery;
