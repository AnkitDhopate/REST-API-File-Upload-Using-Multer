const express = require("express");
const app = express();
const restUserRoute = require("./routes/user");
const conn = require("./connection");

conn;

// express.json() is used to parse JSON req ( built on top of body parser )
/* new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body), or an empty object ({}) if there was no body to parse, the Content-Type was not matched, or an error occurred.
Always mention this on top of evert app.use() commands */
app.use(express.json());
// This is used to make the "uploads" folder static so that it can be accesed
app.use("/uploads", express.static("uploads"));

app.use("/", restUserRoute);

app.get("/", (req, res) => {
  res.send("Welcome to the Home page");
});

app.listen(2000, () => {
  console.log("Application connected !");
});
