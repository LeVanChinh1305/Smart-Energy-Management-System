import mongoose from 'mongoose';
export const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING); 
       console.log("Connected to database successfully");
    }catch (error){
        console.error("Database connection failed", error);
    }
}; 