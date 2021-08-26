const Joi = require("joi");

const createContactSchema = Joi.object({
  name: Joi.string()
    .min(5)
    .max(45)
    .pattern(/^[A-Z]\w+ [A-Z]\w+$/)
    .required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .required(),
  phone: Joi.string()
    .pattern(/\([0-9]{3}\) [0-9]{3}-[0-9]{4}/)
    .required(),
});

module.exports = createContactSchema;
