import mongoose from "mongoose"

try {
    await mongoose.connect(`mongodb://localhost:27017/produstList`)
    mongoose.set({"debug":true})
} catch (error) {
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