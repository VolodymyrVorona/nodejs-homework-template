const validation = (schema) => {
  validFunc = (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      console.log("ERROR!!!");
      return res.status(400).json({
        message: error.message,
      });
    }
    next();
  };

  return validFunc;
};

module.exports = validation;
