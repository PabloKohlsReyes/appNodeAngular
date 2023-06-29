import { ProductModel } from "../models/ProductModel.js";


export const getProducts = (req,res)=>{
    res.json({msg:"getProducts"})
}
export const getProduct = (req,res)=>{
    const {id} = req.params
    res.json({id})
}
export const createProducts = (req,res)=>{
    const data = req.body
    res.json({data})
}
export const updateProduct = (req,res)=>{
    res.json({msg:"updateProduct"})
}
export const deleteProduct = (req,res)=>{
    res.json({msg:"deleteProduct"})
}

