const express = require('express')
const create = require('../controllers/files.contoller')
const upload = require('../config/multer.config')
const router = express.Router()

router.post("/create", upload.array("file",5), create);

module.exports = router