const updateContactsFile = require("./updateContactsFile");
const getAll = require("./getAll");

const update = async (id, updateInfo) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const contacts = await getAll();
    const idx = contacts.findIndex((item) => item.id === Number(id));

    if (idx === -1) {
      return null;
    }
    contacts[idx] = { ...contacts[idx], ...updateInfo };

    await updateContactsFile(contacts);

    return contacts[idx];
  } catch (error) {
    throw error;
  }
};

module.exports = update;
