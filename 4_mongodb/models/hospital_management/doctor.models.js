import mongoose from "mongoose";

const doctorSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    qualification:{

    },
    experienceInYears:{
        type:Number
    },

    worksInHospital:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }
    ]
},{timestamps:true});

export const Doctor= mongoose.model("Doctor", doctorSchema);