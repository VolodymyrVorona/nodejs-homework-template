const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const { User } = require("../../model");

const avatarDir = path.join(__dirname, "../../", "public/avatars");

const updateAvatar = async (req, res) => {
  try {
    const id = String(req.user._id);

    const { path: tempPath, filename } = req.file;
    const uploadPath = path.join(avatarDir, id, filename);

    const file = await Jimp.read(tempPath);
    await file
      .autocrop()
      .cover(
        250,
        250,
        Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE
      )
      .writeAsync(tempPath);

    await fs.rename(tempPath, uploadPath);
    const avatar = `/avatars/${id}/${filename}`;

    await User.findByIdAndUpdate(id, { avatar });
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
