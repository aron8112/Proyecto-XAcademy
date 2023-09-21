/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
const multer = require('multer');
const path = require('path');
const { extname } = require('path');

const multerUpload = multer({
  storage: multer.diskStorage({
    destination: path.join(__dirname, '/../../front/src/assets/public/uploads'),
    filename: (req, file, cb) => {
      const fileExtension = extname(file.originalname);
      const fileName = file.originalname.split(fileExtension)[0];

      cb(null, `${fileName}-${Date.now()}${fileExtension}`);
    },
  }),
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const mimetype = filetypes.test(file.mimetype);
    const ext = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && ext) {
      return cb(null, true);
    }
    cb(`Error: File upload only supports the following filetypes - ${filetypes}`);
  },
  limits: {
    fieldSize: 10000000,
  },
}).single('image');

module.exports = multerUpload;
