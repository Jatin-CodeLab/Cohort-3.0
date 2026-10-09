import mongoose from "mongoose";

const connectDB = async () => {
   try {
       await mongoose.connect(process.env.MONGO_URI);
       console.log('DB connected !');
       
   } catch (error) {
    console.log('kuchh to hai db connect nahi huaa hai.',error);
    
   }
}


export default connectDB