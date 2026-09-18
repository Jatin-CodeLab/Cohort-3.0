console.log("server.js file is running...");
//?--------------------------------------------
//?--------------------------------------------

const express = require('express')

const app = express()
app.use(express.json())
const port = 3000;

let users = []


// create api
app.post('/create', (req, res) => {
    let body = req.body;
    users.push(body)
    res.send('user saved !')
})

// read api
app.get('/', (req, res) => {
    res.send(users)
})

// delete api
app.delete('/delete/:id', (req, res) => {
    let {id} = req.params
    
    let userData = users.filter((val) =>val.id !== id)
    users = userData
    res.send(users)
})

app.listen(port, () => {
    console.log(`Server is running on Port No. ${port}`);
    
})