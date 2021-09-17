const multer = require("multer");
const path = require("path");

const tempDir = path.join(__dirname, "../", "temp");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now().toString()}-${file.originalname}`);
  },
  limits: {
    fileSize: 1024,
  },
});

const upload = multer({
  storage,
});

module.exports = upload;
