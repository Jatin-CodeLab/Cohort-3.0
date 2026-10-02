const express = require('express')

const app = express()

app.get("/", (req, res) => {
	res.send("server start ho gaya hai !");
});

module.exports = app