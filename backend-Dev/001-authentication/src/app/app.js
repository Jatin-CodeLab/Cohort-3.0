import express from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import authenticate from "../middlerware/auth.middlerware.js";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";


dotenv.config()
const app = express()
app.use(express.json())

app.get('/api', (req,res) => {
    res.send('app chalu ho gaya hai')
})

app.post('/api/register', async(req,res) => {
    const { email, name, password } = req.body

    const user = await userModel.create({
     email,name,password : await bcrypt.hash(password,8),
    })
    
    const token = jwt.sign(
			{
				id: user._id
			},
			process.env.JWT_SECRET,
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

app.get('/api/auth/me',authenticate, async (req, res) => {
    console.log(req.user);
    
    res.status(200).json({
        data: {
            user:req.user
        }
    })
        
})

app.post('/api/auth/login', async (req, res) => {
    
    const { email, password } = req.body;

    const user = await userModel.findOne({
        email,
    })

    const isValidPassword = await bcrypt.compare(password, user.password)
    
    if (!isValidPassword) {
        return res.status(401).json({
            message: 'Invalid Email or password'
        })
    }

    const token = jwt.sign({
        id:user._id,
    }, process.env.JWT_SECRET)
    
    res.status(200).json({
        message: 'user is login',
        data: {
            user: {
                email:user.email,
                name: user.name,
            }
        },
        token
    })
})


export default app