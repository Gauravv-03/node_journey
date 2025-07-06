import mongoose from "mongoose";
import { type } from "os";
import { ref } from "process";


const productSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    productImage: {
        type: String // cloudinary me store krenge image
    },

    price:
    {
        type: Number
    },
    stock: {
        type: Number,
        default: 0
    },

    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    }
}
    ,
    { timestamps: true });

    export const Product= mongoose.model("Product",productSchema);