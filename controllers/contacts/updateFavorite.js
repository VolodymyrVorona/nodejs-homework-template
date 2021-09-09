const { NotFound, BadRequest } = require("http-errors");
const { Contact } = require("../../model");

const isEmpty = (obj) =>
  Object.entries(obj).length === 0 && obj.constructor === Object;

const updateFavorite = async (req, res) => {
  if (isEmpty(req.body)) {
    throw new BadRequest("missing field favorite");
    // return res.status(400).json({
    //   message: "missing field favorite",
    // });
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
    //   return res.status(404).json({
    //     message: "Not found",
    //   });
  }
  res.json({ result });
};

module.exports = updateFavorite;
