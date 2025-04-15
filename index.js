
//sign in sign up 
//crud 
import express from "express"; 
import { connectDB } from './DB/connection.js';
import dotenv from "dotenv";
dotenv.config();
import messagerouter from'./src/modules/message/message.router.js';
import authrouter from'./src/modules/auth/authrouter.js';

const app = express(); 
const port = process.env.PORT; 
app.use(express.json()); 
                                        
await connectDB(); 


app .use("/auth",authrouter)

app .use("/message",messagerouter)
app.all("*",(req,res)=>{
    return res.json({success:false,message:"page not found"})
});

app.use((error,req,res,next)=>{
   // console.log(error)
   //edit
   const statuscode=error.cause||500;
    return res.status(statuscode).json({success:false,message:error.message,stack:error.stack,
});
});



app.listen(port, () => console.log(`Listening on port ${port}`));
