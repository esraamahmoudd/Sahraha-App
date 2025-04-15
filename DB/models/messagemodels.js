import mongoose from "mongoose";
const { Schema, Types, model } = mongoose;

const messageSchema=new Schema({
    // sender:{
    //     type:Types.ObjectId,
    //     ref:"User"
    // },
    receiverId:{
        type:Types.ObjectId,
        ref:"User"  ,
        required:true,

    },
    content:{
        type:String,
        required:true,
        min:10,
        max:100,
    }
},{timestamps:true});

export const Message=model("Message",messageSchema);