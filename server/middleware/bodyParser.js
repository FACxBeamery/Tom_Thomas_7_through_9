const bodyParser = (req, res, next) => {
    if (req.method === "PATCH") {
        let allTheData = "";
        req.on("data", chunk => {
            allTheData += chunk;
        });
        req.on("end", () => {
            try {
                req.body = JSON.parse(allTheData);
            } catch (err) {
                next(err);
            }
            next();
        });
    }
};

module.exports = bodyParser;