import {Types} from "mongoose";
export const objectIdValidation=(value,helper)=>{
    if( Types.ObjectId.isValid(value)){
        return true;
       }
       else{
        return helper.message("invalid ID")
       }
}


export const validation =(schema)=>{
    return(req,res,next)=>{
     
    const validationResult=schema.validate(req.body,{
  abortEarly:false,
    }

    );

    if (validationResult.error)
    {
        const errormessage=validationResult.error.details.map((obj)=>{
            return obj.message;
        });
        return next(new Error (errormessage));

    }
    return next();
};

};
    


