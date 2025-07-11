import {React, useEffect, useState } from 'react'
import { Rocket } from 'lucide-react'
import ProductsCard from '../components/ProductsCard'
// import { use, useEffect } from 'react'

const HomePage = () => {
  
  // Fecthing data from the Backend
  const [products, setProducts] = useState([]);
  console.log(products)
  async function getAllProducts() {
    // use the fectch method to get the data
  const response = await fetch("http://localhost:3000/api/products", {
    method: "GET",
    // headers: {
    //   "Content-Type": "application/json"
    // }
  })

  if (response.ok) {
    const data = await response.json();
    // console.log(data)
    setProducts(data)
  }
  }

useEffect(()=> {
  getAllProducts();

}, [])

  return (
    <>  
      {/* THis is the Manin contairner */}
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>

        <div className=''>
          <h1 className='text-center text-2xl font-bold flex justify-center p-5 '> Current Products <Rocket size={18}/> </h1>
        </div>
        {/* The Grid Container */}
        <div className='grid grid-cols-3 gap-5'>
          {
            products.map((products)=>(
                <ProductsCard
                key={products._id}
                products = {products}
                />

            ))
          }
          
        </div>


      </div>
    </>
  )
}

export default HomePage