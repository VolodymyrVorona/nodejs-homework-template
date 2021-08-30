const updateContactsFile = require("./updateContactsFile");
const getAll = require("./getAll");

const remove = async (id) => {
  try {
    const contacts = await getAll();
    const idx = contacts.findIndex((item) => item.id === id);
    if (idx === -1) {
      return null;
    }
    const newProducts = contacts.filter((item) => item.id !== id);

    await updateContactsFile(newProducts);

    return contacts[idx];
  } catch (error) {
    throw error;
  }
};

module.exports = remove;
