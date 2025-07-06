const mongoose=require('mongoose');
  
const subTodusSchema= new mongoose.Schema({
 content:{
    type:String,
    required:true
 },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
},{timestamps:true}
);


export const SubTodu= mongoose.model("SubTodu",subTodusSchema);