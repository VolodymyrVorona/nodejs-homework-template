const { Contact } = require("../../model");

const getAll = async (req, res, next) => {
  try {
    const contacts = await Contact.find({});
    console.log(contacts);
    res.json({ contacts });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
