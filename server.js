const express = require("express");
const morgon = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 4000;

const db = require("./models");

const app = express();

app.use(morgon("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// Creating Routes
require("./routes/apiRoutes")(app);



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});