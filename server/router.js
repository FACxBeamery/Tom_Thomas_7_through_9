const express = require("express");
const router = express();
const getDB = require("./databaseConnection.js").getDB;
const mediaHandler = require("./handlers/mediaHandler");
const favouriteHandler = require("./handlers/favouriteHandler.js");

const lastReqTime = 0;
router.get("/media", () => mediaHandler(lastReqTime));

router.patch("/media/:id", favouriteHandler);

module.exports = router;
