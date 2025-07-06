const mongoose=require('mongoose');
 
const toduSchema= new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    subTodus:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubTodu"
        }
    ]
},{timestamps:true});

export const Todu= mongoose.model('Todu1',toduSchema);