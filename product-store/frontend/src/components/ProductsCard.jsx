import { PenBox,Trash2Icon } from 'lucide-react'
import React from 'react'


const ProductsCard = ({key, products, setshowModel, setProductId}) => {

    async function deleteProduct(id) {
        setshowModel(true)
        setProductId(id)

        try{

            const response = await fetch(`http://localhost:3000/api/products/${id}`, 
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )            
             if (response.ok) {
                console.log("Product deleted successfully")
            }
        } 
        catch (error){
            console.log(error)
        }
    }

  return (
    <div key={key} className='bg-gray-900 rounded-4xl shadow-lg'>
        <div className='text-white'>
            <img className='rounded-4xl'  src={products.image} alt="This is the alt" />
            <div className='p-5'>
                <h3 className='text-2xl'>{products.name} </h3>
                <div className='flex gap-1.5 mt-2 items-center justify-between'>
                    <div>
                        <p className='text-xl'>Price: {products.price}$</p>
                    </div>
                    <div className='flex gap-2 text-xl '>
                        <PenBox className='p-1 bg-blue-400 text-black rounded '/>
                        <Trash2Icon className='p-1 bg-red-400 text-black rounded ' onClick={()=> deleteProduct (products._id)}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductsCard