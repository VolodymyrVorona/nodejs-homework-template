const express = require("express");
const router = express.Router();

const {
  createContactSchema,
  updateContactSchema,
} = require("../../model/contacts");
const { validation } = require("../../middlewares");
const ctrl = require("../../controllers/contacts");

const createContactValidation = validation(createContactSchema);

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", createContactValidation, ctrl.add);

router.delete("/:contactId", ctrl.removeById);

router.put("/:contactId", createContactValidation, ctrl.updateById);

router.patch("/:contactId/favorite", ctrl.updateFavorite);

module.exports = router;
