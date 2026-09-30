console.log("server.js file is running...");
const { log } = require("console");
//?--------------------------------------------
//?--------------------------------------------

const express = require("express");
const connectDb = require('./config/DB');
const NotesModle = require("./models/note.modles");

const app = express();
app.use(express.json())
connectDb();

app.get("/", (req, res) => {
	res.send("Hare krishna");
});

app.post("/create", async (req, res) => {
	let { title, description } = req.body;

	const newNote = await NotesModle.create({
		title,
		description,
	});

	res.send({
		success: true,
		message: 'note create success fully',
		data : newNote,
	})
});



module.exports = app 