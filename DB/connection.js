import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_URL)
       .then(() =>console.log("DB connected"));
    } catch (error) {
        console.error("DB connection failed:", error);
    }
};