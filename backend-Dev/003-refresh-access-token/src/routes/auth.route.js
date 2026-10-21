import { Router } from "express";
import usermodel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import {
	generateToken,
	varifyAccessToken,
	varifyRefreshToken,
    } from "../utils/auth.js";

const router = Router()


/**
 * @post /api/auth/register
 */
router.post('/register',async (req, res) => {
    const { name, email, password } = req.body
    const isUaerExit = await usermodel.findOne({ email })
    
    if (isUaerExit) {
        return res.status(400).json({
            message: 'user already exit',
            errors: [
                {field : 'email',
                message : 'user already exit'}
            ]
        })
    }

    const user = await usermodel.create({
        name,
        email,
        passwordHash : await bcrypt.hash(password,10)
    })

    const { accessToken, refreshToken } = generateToken({ userID: user._id })

    user.refreshToken = refreshToken
    await user.save()
    
    res.cookie('refreshToken', refreshToken, {
        httpOnly:true
    })

    res.status(201).json({
        message: "user registered",
        data: {
            user: {
                name: user.name,
                email: user.email,
                
            },
            accessToken
        }
    })
})

/**
 * @post /api/auth/me
 */
router.get('/me', async (req, res) => {
    const accessToken = req.headers.authorization?.split(" ")[1]

    try {
        const decoded = varifyAccessToken(accessToken)

        const user = await usermodel.findById(decoded.id)
        return res.status(200).json({
            message: "user fetched !",
            data: {
                user: {
                    name: user.name,
                    email:user.email
                }
            }
				});
    } catch (error) {
        return res.status(401).json({
            message:"unauthorized !"
        })
    }
})

/**
 * @post /api/auth/refresh  
 */
router.post('/refresh',async (req, res) => {
    const refreshToken = req.cookies.refreshToken

    if (!refreshToken) {
        return res.status(401).json({
            message:"Unauthorised ! token found !"
        })
    }

    try {
        const decoded = await varifyRefreshToken(refreshToken)

        const user = await usermodel.findById(decoded.id)

        if (refreshToken !== user.refreshToken) {
            user.refreshToken = null
            await user.save()

            return res.status(401).json({
                message : "unauthorized, refresh mismatch"
            })
        }

        const { accessToken, refreshToken: newRefreshToken } = generateToken({ userID: user._id })
        res.cookie("refreshToken", newRefreshToken, { httpOnly: true })
        user.refreshToken = newRefreshToken
        await user.save();

        res.status(200).json({
            message: "token refresh successfully",
            accessToken
        })

    } catch (error) {
        return res.status(401).json({
            message:"invalid or expire refresh token"
        })
    }
})

export default router