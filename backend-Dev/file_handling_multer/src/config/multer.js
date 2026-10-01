const multer = require('multer')


// disk_Storage for local
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null,'uploads/')
//     },
//     filename: (req, file, cb) => {
//         console.log(file);
        
//         cb(null,Date.now() + file.originalname)
//     }
// })

// memory Storage for server
const storage = multer.memoryStorage()

const upload = multer({ storage })
module.exports = upload