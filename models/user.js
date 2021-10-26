const mongoose = require("mongoose");

const restUserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  image: {
    type: String,
  },
});
module.exports = mongoose.model("RESTUser", restUserSchema);
