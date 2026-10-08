const express = require("express");
const router = require("./routes/files.router");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
	console.log("REQUEST:", req.method, req.url);
	next();
});

app.get("/", (req, res) => {
	res.send("mil gaya");
});

app.use("/user", router);

module.exports = app;
