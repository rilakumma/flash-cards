const User = require("./models/User");
const bcrypt = require("bcrypt");

module.exports = {
  newUser: async (req, res) => {
    let { name, username, password } = req.body;
    let user = await User.findOne({ username });
    user && res.status(400).json({ error: "User already exists womp womp" });
    user = new User({
      name,
      username,
      password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    const token = user.generateAuthToken();

    try {
      await user.save();
      res.status(200).json({ token: token });
    } catch (ex) {
      res.status(500).json({ error: "Something went wrong registering" });
    }
  },
  loginUser: async (req, res) => {
    let { username, password } = req.body;
    let user = await User.findOne({ username });
    !user && res.status(400).json({ error: "Invalid username" });

    const validPassword = await bcrypt.compare(password, user.password);
    !validPassword && res.status(400).json({ error: "Invalid password" });

    const token = user.generateAuthToken();
    res.status(200).json({ message: "Logged in", token: token });
  },
  logoutUser: (req, res) => {
    req.session.destroy();
    res.status(200).json("Successfully logged out see ya next time");
  }
};
