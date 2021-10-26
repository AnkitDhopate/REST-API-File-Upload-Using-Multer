const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/restUser", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the database !"))
  .catch((err) => console.log("An error was caught: " + err));
