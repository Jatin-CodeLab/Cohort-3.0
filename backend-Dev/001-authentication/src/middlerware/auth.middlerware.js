import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

const authenticate = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            message : "token not found"
        })
    }

    const data = jwt.verify(token, JWT_SECRET);
    const user = await userModel.findById(data.id)
    
    req.user = user

    next()
};
export default authenticate
