 import joi from "joi";
 
 export const loginschema=joi.object({
    email:joi.string().email().required(),
   
password:joi.string().pattern(new RegExp("^[a-aZ-Z0-9]{3,30}$")).required(),

}).required();

export const signupschema=joi.object({
    email:joi.string().email().required(),
    age:joi.number().min(18).max(70).messages({
        "number.min":"number must be more than 18 -_-",
        "number.max":"number must be less than 70 -_-",
    }),
    name:joi.string().min(5).max(20).required().messages({"string.min":"name must be between 2 and 20 -_-",}),
password:joi.string().pattern(new RegExp("^[a-aZ-Z0-9]{3,30}$")).required(),
confirmpassword:joi.string().valid(joi.ref("password")).required(),
}).required()