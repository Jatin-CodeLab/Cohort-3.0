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
    res.send(userData)
})

// update
app.put('/update/:id', (req, res) => {
    let { id } = req.params;
    let {name} = req.body

    let updatedUser = users.map((val) =>
        val.id === id ? { ...val , name } : val
    )

    res.send(updatedUser)
})

app.listen(port, () => {
    console.log(`Server is running on Port No. ${port}`);
    
})