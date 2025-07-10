import React from 'react'
import { Rocket } from 'lucide-react'
import ProductsCard from '../components/ProductsCard'

const HomePage = () => {
  return (
    <>  
      {/* THis is the Manin contairner */}
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>

        <div className=''>
          <h1 className='text-center text-2xl font-bold flex justify-center p-5 '> Current Products <Rocket size={18}/> </h1>
        </div>
        {/* The Grid Container */}
        <div className='grid grid-cols-3 gap-5'>
          <ProductsCard />
          {/* <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard /> */}

        </div>


      </div>
    </>
  )
}

export default HomePage