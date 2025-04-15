import jwt from "jsonwebtoken";
import { asyncHandler } from "../Utils/asyncHandler.js";
import { User } from "../../DB/models/usermodels.js";

import { Token } from "../../DB/models/tokenmodels.js";

import dotenv from "dotenv";
dotenv.config();
export const isauthenticated = async (req, res, next) => {
    let { token } = req.headers;
    
    if (!token) return next(new Error("Token required"),{cause:400});

    
    
      if(!token.startsWith(process.env.BEARER_KEY)) return next(new Error("invalid token",{cause:401}));

       token = token.split(process.env.BEARER_KEY)[1];

       const tokenDb=await Token.findOne({token,isvalid:true});
       if(!tokenDb) return next(new Error("token expired"));
 

       const payload = jwt.verify(token, process.env.SECRET_KEY
       );

        const isuser = await User.findById(payload.id);
        if (!isuser) return next(new Error("User not found",{cause:404}));

        req.payload = payload;
        
        next();
    
};
