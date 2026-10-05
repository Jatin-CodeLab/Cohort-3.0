const express = require('express');
const router = require('./routes/files.router');

const app = express()
app.use(express.json())

app.use("/user", router);
module.exports = app