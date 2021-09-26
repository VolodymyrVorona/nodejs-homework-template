const express = require("express");
const router = express.Router();

const { joiSchema } = require("../../model/users");
const {
  validation,
  controllerWrapper,
  authenticate,
  upload,
} = require("../../middlewares");
const ctrl = require("../../controllers/users");

const createUserValidation = validation(joiSchema);

router.post("/signup", createUserValidation, controllerWrapper(ctrl.register));
router.post("/login", createUserValidation, controllerWrapper(ctrl.login));
router.get(
  "/logout",
  controllerWrapper(authenticate),
  controllerWrapper(ctrl.logout)
);
router.get(
  "/current",
  controllerWrapper(authenticate),
  controllerWrapper(ctrl.getUser)
);

router.patch(
  "/avatars",
  controllerWrapper(authenticate),
  upload.single("avatar"),
  controllerWrapper(ctrl.updateAvatar)
);

router.get("/verify/:verificationToken", controllerWrapper(ctrl.verify));

module.exports = router;
