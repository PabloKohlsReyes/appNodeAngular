import mongoose from "mongoose";

const productSchema = new mongoose.Schema
(
    {
        description:{
            type:String,
            required:[true, "Por favor llena este campo"]
        },
        stock:{
            type:Number,
            required:[true, "Por favor llena este campo"]
        },
        price:{
            type:Number,
            required:[true, "Por favor llena este campo"]
        }
    },{
        timestamps: true,
        versionKey: false
    }
)

export const ProductModel = mongoose.model('Product',productSchema)