const { Contact } = require("../../model");

const updateById = async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const updatedContact = await Contact.findByIdAndUpdate(
      contactId,
      req.body,
      { new: true }
    );

    if (!updatedContact) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    res.json({ updatedContact });
  } catch (error) {
    next(error);
  }
};

module.exports = updateById;
