const { User } = require("../../model");

const logout = async (req, res) => {
  await User.findByIdAndUpdate(req.user._id, { token: null });
  res.json({
    status: "204 No Content",
  });
};

module.exports = logout;
