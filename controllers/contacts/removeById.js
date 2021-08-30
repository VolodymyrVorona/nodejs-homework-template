const contactsOperations = require("../../model/contacts");

const removeById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const deleteContact = await contactsOperations.getById(contactId);
    if (!deleteContact) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    res.json({ deleteContact });
  } catch (error) {
    next(error);
  }
};

module.exports = removeById;
