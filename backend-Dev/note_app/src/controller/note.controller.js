const NotesModel = require('../models/note.models')

const createNoteController = async (req, res) => {
	try {
		let { title, description } = req.body;
		let newNote = await NotesModel.create({
			title,
			description,
		});

		return res.status(201).json({
			message: "Note create successfully",
			data: newNote,
		});
	} catch (error) {
		res.status(500).json({
			message: "internal server error",
		});
	}
};
const getAllNotesController = async (req, res) => {
	try {
		const allNotes = await NotesModel.find();

		res.status(200).json({
			message: "all Notes featched",
			data: allNotes,
		});
	} catch (error) {
		res.status(500).json({
			message: "internal server error",
		});
	}
};
const getSingleController = async (req, res) => {
	try {
		let noteID = req.params.id;
		let note = await NotesModel.findById(noteID);
		res.status(200).json({
			message: "note mil gaya hai",
			data: note,
		});
	} catch (error) {
		res.status(500).json({
			message: "internal server error",
		});
	}
};
const updateNoteController = async (req, res) => {
	try {
		let noteID = req.params.id
		let body = req.body
		let updatedNote = await NotesModel.findByIdAndUpdate(noteID, body,{new:true});
		return res.status(200).json({
			message: 'note update ho gaya',
			data : updatedNote
		})
	} catch (error) {
	res.status(500).json({
		message: "internal server error",
	});
	}
}
const deleteNoteController = async (req, res) => {
	try {
		let noteID = req.params.id;
		await NotesModel.findByIdAndDelete(noteID)

		return res.status(200).json({
			message : 'note delet ho gaya'
		})
		
	} catch (error) {
		res.status(500).json({
			message: "internal server error",
		});
	}
};

module.exports = {
	createNoteController,
	getAllNotesController,
	getSingleController,
	updateNoteController,
	deleteNoteController,
};