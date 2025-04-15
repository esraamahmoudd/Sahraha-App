import joi from "joi";
import { Types } from "mongoose";
import { objectIdValidation } from "../../middleware/validation.middelware.js";


export const sendmessageschema=joi.object({
content : joi.string().min(10).max(100).required(),
receiverId: joi.custom(objectIdValidation).required()
}).required();