const { BadRequest } = require("http-errors");
const { User } = require("../../model");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || user.comparePassword(password)) {
    throw new BadRequest("Wrong email or password");
  }

  const token = "lskj lsdjf lsjf ";
  res.json({
    token,
  });
};

module.exports = login;
