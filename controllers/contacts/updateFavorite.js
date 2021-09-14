const { NotFound, BadRequest } = require("http-errors");
const { Contact } = require("../../model");

const isEmpty = (obj) =>
  Object.entries(obj).length === 0 && obj.constructor === Object;

const updateFavorite = async (req, res) => {
  if (isEmpty(req.body)) {
    throw new BadRequest("missing field favorite");
  }

  const { contactId } = req.params;
  const { favorite } = req.body;

  const result = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    { new: true }
  );

  if (!result) {
    throw new NotFound("Not found");
  }
  res.json({ result });
};

module.exports = updateFavorite;
