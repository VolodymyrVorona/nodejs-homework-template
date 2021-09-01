// const contactsOperations = require("../../model/contacts");
// const { createContactSchema } = require("../../validation/");
const { Contact } = require("../../model");

const add = async (req, res, next) => {
  try {
    const result = await Contact.create(req.body);
    res.status(201).json({
      result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
