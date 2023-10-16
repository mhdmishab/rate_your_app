import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectionString=process.env.CONNECTION_STRING;

export const dbConnection=()=>{
    mongoose.connect(connectionString,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>console.log("mongoDB connected")).catch((err)=>console.error("mongoDB connection failed",err.message))
}