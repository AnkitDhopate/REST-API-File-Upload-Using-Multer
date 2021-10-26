const express = require("express");
const router = express.Router();
const { retrieveRestUser, createUser } = require("../controllers/user");
const { upload } = require("../middleware/index");

router.get("/retrieve", retrieveRestUser);
router.post("/create", upload.single("image"), createUser);

module.exports = router;
