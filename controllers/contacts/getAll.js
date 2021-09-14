const { Contact } = require("../../model");

const getAll = async (req, res) => {
  const contacts = await Contact.find({ owner: req.user._id });

  res.json({
    status: "success",
    code: 200,
    contacts,
  });
};

module.exports = getAll;
