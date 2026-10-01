const express = require("express");
const {
	createNoteController,
	getAllNotesController,
	getSingleController,
	updateNoteController,
	deleteNoteController,
} = require("../controller/note.controller");
const NotesModel = require("../models/note.models");

const router = express.Router();
//ye create kar ne ke liye
router.post("/create", createNoteController);

//ye read ke liye
router.get("/allNotes", getAllNotesController);

//ye read but kisi ek ko
router.get("/:id", getSingleController);

//ye update ke liye viaa put
router.put("/:id", updateNoteController);

//ye delete ke liye
router.delete("/:id", deleteNoteController);

module.exports = router;
