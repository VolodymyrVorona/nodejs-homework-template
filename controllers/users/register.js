const fs = require("fs/promises");
const path = require("path");

const { Conflict } = require("http-errors");
const { User } = require("../../model");
const { sendMail } = require("../../utils");

const productsDir = path.join(__dirname, "../../", "public/avatars");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict("Email in use");
  }

  const newUser = new User({ email });
  newUser.createVerifyToken();
  newUser.setPassword(password);

  const { verifyToken } = newUser;
  const mail = {
    to: email,
    subject: "confirm your password",
    html: `<a href="http://localhost:3000/api/users/verify/${verifyToken}">Подтвердите регистрацию</a>`,
  };

  await sendMail(mail);

  await newUser.save();

  const dirPath = path.join(productsDir, String(newUser._id));
  await fs.mkdir(dirPath);

  res.status(201).json({
    status: "201 Created",
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = register;
