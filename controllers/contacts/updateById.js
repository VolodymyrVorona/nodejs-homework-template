const { NotFound } = require("http-errors");
const { Contact } = require("../../model");

const updateById = async (req, res) => {
  const { contactId } = req.params;

  const updatedContact = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!updatedContact) {
    throw new NotFound("Not found");
  }
  res.json({ updatedContact });
};

module.exports = updateById;
