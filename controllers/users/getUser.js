const { User } = require("../../model");

const getUser = async (req, res) => {
  const { id } = req.user;
  const { email, subscription } = await User.findById(id);

  res.json({
    status: "success",
    code: 200,
    data: { email, subscription },
  });
};

module.exports = getUser;
