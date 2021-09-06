const express = require("express");
const router = express.Router();

const { joiSchema } = require("../../model/users");
const { validation } = require("../../middlewares");
const ctrl = require("../../controllers/users");

const createUserValidation = validation(joiSchema);

router.post("/signup", ctrl.register);
router.post("/login", ctrl.login);
