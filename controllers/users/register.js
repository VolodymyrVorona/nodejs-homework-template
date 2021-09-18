const fs = require("fs/promises");
const path = require("path");

const { Conflict } = require("http-errors");
const { User } = require("../../model");

const productsDir = path.join(__dirname, "../../", "public/avatars");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict("Email in use");
  }

  const newUser = new User({ email });
  newUser.setPassword(password);
  await newUser.save();

  const dirPath = path.join(productsDir, String(newUser._id));
  await fs.mkdir(dirPath);

  res.status(201).json({
    status: "201 Created",
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = register;
