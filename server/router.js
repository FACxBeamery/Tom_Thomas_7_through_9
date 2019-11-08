const express = require("express");
const router = express();
const getDB = require("./databaseConnection.js").getDB;
const mediaHandler = require("./handlers/mediaHandler");
const favouriteHandler = require("./handlers/favouriteHandler.js");

const lastReqTime = 0;
router.get("/media", mediaHandler);
router.get("/welcome", (req, res) => res.send("hello world"));
router.patch("/media/:id", favouriteHandler);

module.exports = router;
