const Joi = require("joi");

const updateContactSchema = Joi.object({
  name: Joi.string()
    .min(5)
    .max(45)
    .pattern(/^[A-Z]\w+ [A-Z]\w+$/)
    .optional(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .optional(),
  phone: Joi.string()
    .pattern(/\([0-9]{3}\) [0-9]{3}-[0-9]{4}/)
    .optional(),
  favorite: Joi.boolean().optional(),
});

module.exports = updateContactSchema;
