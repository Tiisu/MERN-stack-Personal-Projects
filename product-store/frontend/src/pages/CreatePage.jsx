import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CreatePage = () => {
  // This is the create page where we will create a new product
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
    stock: '',
    description: ''

    
  });

  // console.log(newProduct)

  const submitProduct = async (e) => {
    e.preventDefault()
    const serializedData = {
      name: newProduct.name,
      price: Number(newProduct.price),
      stock: Number(newProduct.stock),
      Image: newProduct.image,
      description: newProduct.description,
    }
    try {
      const response = await fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Product created:", data.product)
        // navigate("/")
      }

      
    } catch (error) {
      console.error('Error creating product:', error);
    }
  }
  return (
    <>  
      <div className='w-full min-h-screen'>
        <div className='px-4 sm:px-6 lg:px-8 mx-auto max-w-2xl'>
          <h1 className='text-xl sm:text-2xl font-bold text-center pt-6'>Create New Product</h1>
          <form onSubmit={submitProduct} action="POST" className='border p-4 sm:p-6 rounded mt-5 space-y-4 bg-white/5'>
            <div>
              <label htmlFor='name' className='sr-only'>Product name</label>
              <input type="text" placeholder='Enter the product name' id='name' className='border w-full p-2 rounded' 
              value={newProduct.name}
              onChange={(e) => setNewProduct ({...newProduct, name: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor='price' className='sr-only'>Product price</label>
              <input type="number" placeholder='Enter the product price' id='price' className='border w-full p-2 rounded' min={0}
              value={newProduct.price}
              onChange={(e) => setNewProduct ({...newProduct, price: e.target.value})}
              
              />
            </div>
            <div>
              <label htmlFor='image' className='sr-only'>Image URL</label>
              <input type="url" placeholder='Enter the product image url' id='image' className='border w-full p-2 rounded'
              value={newProduct.image}
              onChange={(e) => setNewProduct ({...newProduct, image: e.target.value})}
              
              />
            </div>
            
            <div>
              <label htmlFor='stock' className='sr-only'>Stock</label>
              <input type="number" placeholder='Enter the product stock' id='stock' className='border w-full p-2 rounded' min={0}
              value={newProduct.stock}
              onChange={(e) => setNewProduct ({...newProduct, stock: e.target.value})}
              
              />
            </div>
            <div>
              <label htmlFor='description' className='sr-only'>Description</label>
              <textarea name="description" className='w-full border  border-gray-300 rounded p-2' placeholder='Enter the product description' rows="5" id='description' 
              value={newProduct.description}
              onChange={(e) => setNewProduct ({...newProduct, description: e.target.value})}

              >

              </textarea>
            </div>

            <div className='flex justify-center pt-2'>
              <button className='bg-blue-500 text-white px-4 py-2 cursor-pointer rounded shadow-amber-200 hover:bg-blue-600 w-full sm:w-auto'>Create Product</button>
            </div>  


          </form>


        </div>


      </div>
    </>
  )
}

export default CreatePage