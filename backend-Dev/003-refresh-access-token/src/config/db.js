import mongoose, { Mongoose } from "mongoose";
import config from "./config.js";

const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGO_URI)
        console.log('DB Connected !');
        
    } catch (error) {
        console.log('error');
        
    }
}

export default connectDB