const { Contact } = require("../../model");

const getById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findById(contactId);
  if (!contact) {
    return res.status(404).json({
      message: "Not found",
    });
  }
  res.json({ contact });
};

module.exports = getById;
