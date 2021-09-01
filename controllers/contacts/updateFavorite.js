const { Contact } = require("../../model");

const isEmpty = (obj) =>
  Object.entries(obj).length === 0 && obj.constructor === Object;

const updateFavorite = async (req, res, next) => {
  if (isEmpty(req.body)) {
    return res.status(400).json({
      message: "missing field favorite",
    });
  }

  try {
    const { contactId } = req.params;
    const { favorite } = req.body;

    const result = await Contact.findByIdAndUpdate(
      contactId,
      { favorite },
      { new: true }
    );

    if (!result) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    res.json({ result });
  } catch (error) {
    next(error);
  }
};

module.exports = updateFavorite;
