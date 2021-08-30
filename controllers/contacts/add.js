const contactsOperations = require("../../model/contacts");
const { createContactSchema } = require("../../validation/");

const add = async (req, res, next) => {
  try {
    const { error } = createContactSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: "missing required name field",
      });
    }
    const newContact = await contactsOperations.add(req.body);
    res.status(201).json({
      newContact,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
