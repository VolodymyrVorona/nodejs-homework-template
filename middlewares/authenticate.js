const { Unauthorized } = require("http-errors");
const jwt = require("jsonwebtoken");
const { User } = require("../model");

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new Unauthorized("Not authorized");
  }

  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    throw new Unauthorized("Not authorized");
  }

  const { id } = jwt.verify(token, SECRET_KEY);

  const user = await User.findOne({ token });
  if (!user) {
    throw new Unauthorized("Not authorized");
  }
  req.user = user;
  next();
};

module.exports = authenticate;
