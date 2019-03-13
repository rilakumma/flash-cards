const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const User = new Schema({
  name: String,
  username: String,
  password: String
});

User.methods.comparePassword = function(candidatePassword, next) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return next(err);
    next(null, isMatch);
  });
};

User.methods.generateAuthToken = function() {
  const token = jwt.sign(
    {
      _id: this._id,
      name: this.name,
      username: this.username
    },
    process.env.SECRET
  );
  return token;
};
const UserModel = mongoose.model("User", User);

module.exports = UserModel;
