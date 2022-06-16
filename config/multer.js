const multer = require('multer');
const { resolve, extname } = require('path');
const crypto = require('crypto');

const multerConfig = multer.diskStorage({
    destination: resolve(__dirname, '../public/uploads'),
    filename: (req, file, cb) => {
        crypto.randomBytes(16, (err, value) => {
            if (err) {
                cb(err)
            }

            return cb(null, value.toString('hex') + extname(file.originalname))
        })
    }
});

module.exports = multerConfig;