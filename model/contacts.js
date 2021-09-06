const { Schema, SchemaTypes, model } = require("mongoose");
const Joi = require("joi");

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: [true, "Set email for contact"],
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

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
    .pattern(/^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/)
    .required(),
  favorite: Joi.boolean().optional(),
});

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  createContactSchema,
};
