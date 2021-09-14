const express = require("express");
const router = express.Router();

const { createContactSchema } = require("../../model/contacts");
const {
  validation,
  controllerWrapper,
  authenticate,
} = require("../../middlewares");
const ctrl = require("../../controllers/contacts");

const createContactValidation = validation(createContactSchema);

router.get(
  "/",
  controllerWrapper(authenticate),
  controllerWrapper(ctrl.getAll)
);

router.get("/:contactId", controllerWrapper(ctrl.getById));

router.post(
  "/",
  controllerWrapper(authenticate),
  createContactValidation,
  controllerWrapper(ctrl.add)
);

router.delete("/:contactId", controllerWrapper(ctrl.removeById));

router.put(
  "/:contactId",
  createContactValidation,
  controllerWrapper(ctrl.updateById)
);

router.patch("/:contactId/favorite", controllerWrapper(ctrl.updateFavorite));

module.exports = router;
