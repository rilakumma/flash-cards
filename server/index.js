const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const cardsController = require("./card");
const userController = require("./userController");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(
  session({
    secret: "secret",
    saveUninitialized: false,
    resave: false
  })
);

app.listen(4000, () => {
  console.log("Server is listening on port 4000 ☁️ ☁️ ☁️ ☁️ ☁️");
});

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true }).catch(err => {
  console.log("Error connecting to database", err);
});

// card routes
app.post("/cards", cardsController.newCard);
app.get("/cards", cardsController.getAll);
// user routes
app.post("/register", userController.newUser);
app.post("/login", userController.loginUser);
app.post("/logout", userController.logoutUser);
