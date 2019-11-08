const favouriteHandler = (req, res) => {
    const idOfDocToChange = req.params.id;
    const newFavValue = true;
    const db = getDB();

    updateDbQuery(db, idOfDocToChange, newFavValue);

    getUpdatedDoc(db, idOfDocToChange, (error, result) => {
        if (error) {
            throw new Error(error);
        }

        return res.status(200).send(result);
    });

    res.status(200).send();
};
module.exports = favouriteHandler;