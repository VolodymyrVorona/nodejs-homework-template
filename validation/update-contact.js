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
    .pattern(/^((\+)33|0)[1-9](\d{2}){4}$/)
    .optional(),
  favorite: Joi.boolean().optional(),
});

module.exports = updateContactSchema;
