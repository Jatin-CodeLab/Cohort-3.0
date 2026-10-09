import express from "express";
import jwt from "jsonwebtoken";

const app = express()
app.use(express.json())
app.get('/api', (req,res) => {
    res.send('app chalu ho gaya hai')
})

app.post('/api/register', (req,res) => {
    const { email, name, password } = req.body
    
    const token = jwt.sign(
			{
				email,
				name,
			},
			"RhlgE38wyi1RbU71Spgzd5ufsvwRQKKuBL6ObmjH1P2WdjEHYcVTF9",
    );
    
    res.status(201).json({
        message: "user created !",
        data: {
            user:{
                email,name
            },
            token
        }
    })
})



export default app