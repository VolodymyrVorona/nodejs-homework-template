const getAll = require("./getAll");

const getById = async (id) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const contacts = await getAll();
    const contact = contacts.find((item) => item.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  } catch (error) {
    throw error;
  }
};

module.exports = getById;
