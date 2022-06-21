const multer = require("multer")
const path = require("path")


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

var upload = multer({
    storage: storage
}).single('image')
// export upload as single file you can use 
module.exports = upload