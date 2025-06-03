import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

try {
    const url = process.env.MONGODB_URL
    await mongoose.connect(url)
    mongoose.set({"debug":true})
    console.log("conected successful")
} catch (error) {
     console.log("not  conected ")
    console.log(error)
}

const productSchema =  mongoose.Schema({
     title : String, 
     price : Number,
     originalPrice: Number,
     
      image: String,
      rating: Number,
      reviews: String,

})


export const productModel = mongoose.model("product",productSchema)