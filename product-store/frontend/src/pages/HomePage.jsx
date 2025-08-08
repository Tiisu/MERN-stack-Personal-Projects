import {React, useEffect, useState } from 'react'
import { Rocket } from 'lucide-react'
import ProductsCard from '../components/ProductsCard'
import ConfirmationModal from '../components/ConfirmationModal';
// import { use, useEffect } from 'react'

const HomePage = () => {
  
  // Fecthing data from the Backend
  const [products, setProducts] = useState([]);
  const [ showModel, setshowModel] = useState (false);
  const [productId, setProductId] = useState(null);
  // console.log(products)
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
          <h1 className='text-center text-xl sm:text-2xl font-bold flex items-center justify-center gap-2 p-4 sm:p-5'> Current Products <Rocket size={18}/> </h1>
        </div>
        {/* The Grid Container */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8'>
          {
            products.map((products)=>(
                <ProductsCard
                key={products._id}
                products = {products}
                setshowModel={setshowModel}
                setProductId={setProductId}
                />

            ))
          }
          
        </div>
          {

            showModel && (
              <ConfirmationModal setshowModel={setshowModel} productId={productId} />
            )

          }
      </div>
    </>
  )
}

export default HomePage