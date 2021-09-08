const bcrypt = require("bcryptjs");
const { Conflict } = require("http-errors");
const { User } = require("../../model");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne(email);
  if (user) {
    throw new Conflict("Already register");
  }

  const newUser = new User({ email });
  console.log(newUser);
  newUser.setPassword(password);
  await newUser.save();

  res.status(201).json({
    status: "success",
    code: 201,
    message: "Success register",
  });
};

module.exports = register;
