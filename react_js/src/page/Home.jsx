import React from 'react'
import DashBorad from './DashBorad';
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import { useEffect, useState } from "react";

import Cart from "../Cart.jsx"

const Home = () => {

const  [product,setProduct] = useState([]) 
const [loading,setLoading] = useState(true) 
const [slid, setSlid] = useState(0);





// fetc data 
const productFetch = async()=>{
try {
   const res = await fetch("http://localhost:5000/product")
const result = await res.json()
setLoading(false)
   setProduct(result)
} catch (error) {
   console.log(error)
}
}




useEffect(()=>{
  productFetch(); // initial load
 
},[product])



  
   const itemWidth = 210; // approx width + gap
   const maxSlide = (product.length * itemWidth) - 800;

  const handleRight = () => {
    setSlid(prev => Math.min(prev + itemWidth, maxSlide));
  };

  const handleLeft = () => {
    setSlid(prev => Math.max(prev - itemWidth, 0));
  };

  if(loading )  return <div>Loading.....</div>




  return (
    <>
     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
  



      <div className="flex items-center gap-4 mb-8 text-2xl">
        <FaArrowLeft onClick={handleLeft} className="cursor-pointer" />
        <FaArrowRight onClick={handleRight} className="cursor-pointer" />
      </div>
        
      <div className="overflow-hidden w-[800px]">
        <div
          className="flex gap-4 transition-transform duration-500"
          style={{ transform: `translateX(-${slid}px)` }}
        >
          {product.map(({ title, image, price}, index) => (
            <div key={index} className="min-w-[200px]">
              <Cart title={title}  price={ price} image={image} />
            </div>
          ))}
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Home;
