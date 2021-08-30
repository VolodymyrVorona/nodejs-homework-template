const { updateContactSchema } = require("../../validation");
const contactsOperations = require("../../model/contacts");

const updateById = async (req, res, next) => {
  try {
    const { error } = updateContactSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    }

    const { contactId } = req.params;

    const updatedContact = await contactsOperations.update(contactId, req.body);

    if (!updatedContact) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    res.json({ updatedContact });
  } catch (error) {
    next(error);
  }
};

module.exports = updateById;
