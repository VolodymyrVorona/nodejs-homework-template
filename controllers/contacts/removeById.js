const { NotFound } = require("http-errors");
const { Contact } = require("../../model");

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const deleteContact = await Contact.findByIdAndDelete(contactId);
  if (!deleteContact) {
    throw new NotFound("Not found");
  }
  res.json({ deleteContact });
};

module.exports = removeById;
