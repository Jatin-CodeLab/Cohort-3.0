import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGO_URI)
        console.log('DB connected !');
        
    } catch (error) {
        console.log('Kuch dikkat to hai DB connection me');
        
    }
}

export default connectDB