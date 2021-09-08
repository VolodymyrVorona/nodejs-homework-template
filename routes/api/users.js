const express = require("express");
const router = express.Router();

const { joiSchema } = require("../../model/users");
const { validation, controllerWrapper } = require("../../middlewares");
const ctrl = require("../../controllers/users");

const createUserValidation = validation(joiSchema);

router.post("/signup", controllerWrapper(ctrl.register));
router.post("/login", createUserValidation, controllerWrapper(ctrl.login));

module.exports = router;
