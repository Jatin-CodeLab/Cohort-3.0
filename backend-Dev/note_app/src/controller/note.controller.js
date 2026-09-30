const createNoteController = async (req, res) => {
	try {
		let { title, description } = req.body;
		let newNote = await NewModel.create({
			title,
			description,
		});

		return res.status(201).json({
			message: "Note create successfully",
			data: newNote,
		});
	} catch (error) {
		console.log("error in createion", error);
	}
};

module.exports = createNoteController