import { PenBox,Trash2Icon } from 'lucide-react'
import React from 'react'

const ProductsCard = () => {
  return (
    <div className='bg-gray-900 rounded-4xl shadow-lg'>
        <div className='text-white'>
            <img className='rounded-4xl'  src="https://images.unsplash.com/photo-1716882173326-04d822f142a8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGlwaG9uZSUyMDE2fGVufDB8fDB8fHww" alt="" />
            <div className='p-5'>
                <h3 className='text-2xl'>The title of the Product </h3>
                <div className='flex gap-1.5 mt-2 items-center justify-between'>
                    <div>
                        <p className='text-xl'>Price: 50$</p>
                    </div>
                    <div className='flex gap-2 text-xl '>
                        <PenBox className='p-1 bg-blue-400 text-black rounded '/>
                        <Trash2Icon className='p-1 bg-red-400 text-black rounded '/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductsCard