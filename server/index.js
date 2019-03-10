const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cardsController = require("./card");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

app.listen(4000, () => {
  console.log("Server is listening on port 4000 ☁️ ☁️ ☁️ ☁️ ☁️");
});

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true }).catch(err => {
  console.log("Error connecting to database", err);
});

app.post("/cards", cardsController.newCard);
app.get("/cards", cardsController.getAll);
