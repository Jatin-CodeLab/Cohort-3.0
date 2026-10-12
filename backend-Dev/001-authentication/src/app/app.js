import express from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";


const app = express()
app.use(express.json())

app.get('/api', (req,res) => {
    res.send('app chalu ho gaya hai')
})

app.post('/api/register', async(req,res) => {
    const { email, name, password } = req.body

    const user = await userModel.create({
     email,name,password,
    })
    
    const token = jwt.sign(
			{
				id: user._id
			},
			"RhlgE38wyi1RbU71Spgzd5ufsvwRQKKuBL6ObmjH1P2WdjEHYcVTF9",
    );
    
    res.status(201).json({
        message: "user created !",
        data: {
            user:{
                email, name,
                id: user._id
            },
            token
        }
    })
})

app.get('/api/auth/me', async (req, res) => {
    const authheader = req.headers.authorization

    console.log(authheader);

    const data = jwt.decode(authheader)

    console.log(data);

    const userInDetail = await userModel.findById(data.id)

    console.log(userInDetail);
    
    
    
})



export default app