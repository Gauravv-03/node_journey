
import mongoose from "mongoose";

const orderItemSchema= new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantiy:{
        type:Number,
    }
})

const orderSchema= new mongoose.Schema({
orderprice:{
    type:Number,
    requied:true
},

costumer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
},
address:{
    type:String,
    required:true
},

status:{
    type:String,
    enums:["PENDING","CANCELLED","dELEIVERED"]
},


orderItem:{
    // type:[{
    //     quantity:{
    //         type:Number
    //     }
    // }]
     // OR
     type:[orderItemSchema]
}

},


{ timestamps:true});

export const Order=mongoose.model("Order",orderSchema);