const fs = require("fs/promises");

const filePath = require("./filePath");

const getAll = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const data = await fs.readFile(filePath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    throw error;
  }
};

module.exports = getAll;
