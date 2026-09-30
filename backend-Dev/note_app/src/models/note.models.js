const mongoose = require("mongoose");

let noteSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
		minlength: [20, "minimum enter 20 charecter"],
	},
});

const NewModel = mongoose.model('notes', noteSchema)

module.exports = NewModel