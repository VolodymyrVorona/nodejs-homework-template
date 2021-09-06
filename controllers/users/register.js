const bcrypt = require("bcryptjs");
const { Conflict } = require("http-errors");
const { User } = require("../../model");

const register = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne(email);
  if (user) {
    throw new Conflict("Already register");
  }
};

module.exports = register;
