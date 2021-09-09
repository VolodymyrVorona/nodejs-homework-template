const { NotFound } = require("http-errors");
const { Contact } = require("../../model");

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const deleteContact = await Contact.findByIdAndDelete(contactId);
  if (!deleteContact) {
    throw new NotFound("Not found");
    // return res.status(404).json({
    //   message: "Not found",
    // });
  }
  res.json({ deleteContact });
};

module.exports = removeById;
