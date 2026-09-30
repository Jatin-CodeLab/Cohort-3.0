const express = require("express");
const NewModel = require('./models/note.models');
const connectionDB = require("./config/db");
const createNoteController = require('./controller/note.controller');


const app = express()
connectionDB()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('ok')
})


app.post("/create", createNoteController);

module.exports  = app