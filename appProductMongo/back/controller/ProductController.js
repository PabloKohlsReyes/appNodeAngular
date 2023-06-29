import { ProductModel } from "../models/ProductModel.js";


export const getProducts = async(req,res)=>{
    try {
        const products = await ProductModel.find();
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})        
    }
}
export const getProduct = async(req,res)=>{
    try {
        const {id} = req.params
        const product = await ProductModel.findById(id);
        if (!product) {
            res.status(404).json(`Producto no encontrado`)            
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }    
}
export const createProducts = async(req,res)=>{
    try {
        const product = await ProductModel.create(req.body)
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
export const updateProduct = async(req,res)=>{
    try {
        const {id}=req.params
        const product = await ProductModel.findByIdAndUpdate({_id:id},
            req.body,
            {new:true})
            res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
export const deleteProduct = async (req,res)=>{
    try {
        const {id} = req.params
        const product = await ProductModel.findByIdAndDelete(id);
        if (!product) {
            res.status(404).json(`Producto no encontrado`)            
        }
        res.status(200).json(`Producto eliminado`)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

