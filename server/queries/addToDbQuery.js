const addToDbQuery = (database, arrToAdd) => {
	database.collection("media").insertMany(arrToAdd);
};

module.exports = addToDbQuery;
