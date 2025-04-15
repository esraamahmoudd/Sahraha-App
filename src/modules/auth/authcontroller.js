import{asyncHandler} from "./../../Utils/asyncHandler.js";
import joi from "joi";
import {User} from "./../../../DB/models/usermodels.js";
import bcryptjs from "bcryptjs";
import jwt from'jsonwebtoken'
import { Token } from "../../../DB/models/tokenmodels.js";
export const signup=asyncHandler(async(req,res,next)=>{

//const {email,password,age,name,confirmpassword} = req.body;
const hashPassword=bcryptjs.hashSync(req.body.password);



const user =await User.create({...req.body,password:hashPassword});
return res.json({success:true,message:"user created"})

});

export const login=asyncHandler(async(req,res,next)=>{
    
    const user=await  User.findOne({email:req.body.email});
    if(!user) return next(new Error("user not found",{cause:404}));
    const match=bcryptjs.compareSync(req.body.password,user.password);
    if(!match) return next(new Error("wrong password",{cause:400}));
    
 const token= jwt.sign({id:user._id,email:user.email},process.env.SECRET_KEY)

await Token.create({token, user: user._id})

    return res.json({success:true,results:{token}})
    });
    

