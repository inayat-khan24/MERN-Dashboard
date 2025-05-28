import { productModel } from "../model/userModel.js"


// inster product
export const createPrduct = async(req,res)=>{
 try {
    const {title,price ,originalPrice,discount,image,rating, reviews}  = req.body
    const productlist = await new productModel({title,price,originalPrice,discount,image,rating, reviews,})
    const saveProduct =  await productlist.save()
    res.status(201).json(saveProduct)
    } catch (error) {
res.status(500).json({ message: "Internal Server Error" });
}}


// get method

export const findData = async(req,res)=>{
try {
    const getData = await productModel.find()
    res.status(200).json(getData)} catch (error) {

    res.status(500).json({ message: "Internal Server Error" });
}}

//updateData
export const updateproduct = async(req,res)=>{
    try {
        const {id} = req.params
        
        
   const userExist = await productModel.findById(id)
    if (!userExist){ return res.status(404).json({message:"User not found."}) }
   const update = await productModel.findByIdAndUpdate(id,req.body,{new:true})
   res.status(200).json(update)

    } catch (error) {
        res.status(500).json("Internal Server Error")
        res.status(404).json(id)
    }

}


// delete 

export const deleteProduct = async(req,res)=>{
    try {
        const {id} = req.params
        const exitID = await productModel.findById(id)
        if (!exitID) { res.json("user Not found")}
         await productModel.findByIdAndDelete(id)
        res.status(200).json("user has been deleted")
        
    } catch (error) {
        res.status(500).json("Internal Server Error")
    }
}
