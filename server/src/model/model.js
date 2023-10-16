import mongoose from "mongoose";


const dataSchema=mongoose.Schema({
    usage:{
        type:String,
        required:true
    },
    goal:{
        type:[String],
        required:true
    },
    rating:{
        type:String,
        required:true
    },
    suggestion:{
        type:String,
        
    },
    dob:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:new Date()
    }
})

export const Datas=mongoose.model('data',dataSchema);