const getAll = require("./getAll");
const updateContactsFile = require("./updateContactsFile");

const add = async (data) => {
  try {
    const contacts = await getAll();
    const id = contacts[contacts.length - 1].id + 1;
    const newContact = { id, ...data };
    contacts.push(newContact);
    await updateContactsFile(contacts);

    return newContact;
  } catch (error) {
    throw error;
  }
};

module.exports = add;
