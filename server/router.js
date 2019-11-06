const express = require("express");
const router = express();

// import handlers here...

router.get("/media", mediaHandler);

router.patch("/media/:id", favouriteHandler);

module.exports = router;
