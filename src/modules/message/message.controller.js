import { asyncHandler } from "../../Utils/asyncHandler.js";
import { User } from "../../../DB/models/usermodels.js";
import { Message } from "../../../DB/models/messagemodels.js";


export const sendmessage=asyncHandler(async(req,res,next)=>{
    const user =await User.findById(req.body.receiverId)
    if(!user) return next(new Error("reciever not found",{cause:404}));


    await Message.create(req.body);

    return res.json({success:true,message:"message sent succesfully"})


}
);