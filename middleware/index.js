const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (res, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

exports.upload = multer({ storage });
