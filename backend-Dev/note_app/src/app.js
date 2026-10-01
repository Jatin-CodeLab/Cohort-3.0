const express = require("express");
const connectionDB = require("./config/db");
const createNoteController = require('./controller/note.controller');
const notesRoute = require('./routes/note.route') 

const app = express()
connectionDB()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('ok')
})

app.use('/notes',notesRoute)


module.exports  = app