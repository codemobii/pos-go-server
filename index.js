const express = require("express");
const bodyParser = require("body-parser");

// create express app
const app = express();

// require database connection
const dbConnect = require("./db.connect");

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// Require routes
require("./transaction.routes")(app);

// define a simple route
app.get("/", (req, res) => {
  res.json({
    message: "POS-Go Server is Live",
  });
});

// listen for requests
app.listen(process.env.PORT || 5000, () => {
  console.log("Server is listening on port 5000");
});

// execute database connection
dbConnect();
