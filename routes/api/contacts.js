const express = require("express");
const router = express.Router();

const contactsOperations = require("../../model/contacts");
const { createContactSchema } = require("../../validation");

router.get("/", async (req, res, next) => {
  try {
    const contacts = await contactsOperations.getAll();
    res.json({ contacts });
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await contactsOperations.getById(contactId);
    if (!contact) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    res.json({ contact });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = createContactSchema.validate(req.body);
    if (error) {
      console.log(error);
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
});

router.delete("/:contactId", async (req, res, next) => {
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
});

router.patch("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
