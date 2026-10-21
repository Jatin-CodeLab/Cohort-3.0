import jwt from "jsonwebtoken";
import config from "../config/config.js";

const generateToken = ({userID})=>{
    const accessToken = jwt.sign({ id: userID }, config.ACCESS_TOKEN_SECRET,{expiresIn:"15m"});
    const refreshToken = jwt.sign({ id: userID }, config.REFRESH_TOKEN_SECRET, {
			expiresIn: "7d",
    });
    
    return {accessToken, refreshToken}
}

const varifyAccessToken = (token) => {
    const decoded = jwt.verify(token,config.ACCESS_TOKEN_SECRET)
    return decoded
}

const varifyRefreshToken = (token) => {
	const decoded = jwt.verify(token, config.REFRESH_TOKEN_SECRET);
	return decoded;
};
export {generateToken,varifyAccessToken,varifyRefreshToken}