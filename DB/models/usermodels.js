import mongoose from "mongoose"; 
import { Schema, model, Types } from "mongoose";

const userSchema = new Schema( 
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }, 
    age: { type: Number, min: 18, max: 70 }, 
    name:{type:String,min:2,max:25,required:true } },
  {
    timestamps: true, 
  }
);


export const User = mongoose.model("User", userSchema); 
