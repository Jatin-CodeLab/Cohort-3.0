const express = require('express')
const create = require('../controllers/files.contoller')
const upload = require('../config/multer.config')
const router = express.Router()

router.post("/create", upload.single("profilePic"), create);

module.exports = router