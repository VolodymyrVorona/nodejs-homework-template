const fs = require("fs/promises");
const path = require("path");

const { User } = require("../../model");

const avatarDir = path.join(__dirname, "../../", "public/avatars");

const updateAvatar = async (req, res) => {
  const { authorization } = req.headers;
  const token = authorization.split(" ")[1];

  const { path: tempPath, filename } = req.file;
  const uploadPath = path.join(avatarDir, filename);

  try {
    await fs.rename(tempPath, uploadPath);
    const avatar = `public/avatars/${filename}`;

    await User.findOneAndUpdate(token, { avatar });
    res.json({
      status: "success",
      code: 200,
      data: {
        result: avatar,
      },
    });
  } catch (error) {
    fs.unlink(tempPath);
    throw error;
  }
};

module.exports = updateAvatar;
