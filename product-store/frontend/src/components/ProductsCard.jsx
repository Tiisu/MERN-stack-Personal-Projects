import { PenBox,Trash2Icon } from 'lucide-react'
import React, { useState } from 'react'
import { Dialog, Button, Flex, TextArea, TextField } from '@radix-ui/themes'

const ProductsCard = ({key, products, setshowModel, setProductId}) => {
    // console.log(products)

    const [updatedProduct, setUpdatedProduct] = useState(products);
    // console.log(updatedProduct)


    function deleteProduct(id) {
        setshowModel(true)
        setProductId(id)
    }

    // Fetch updated Product
    async function updatedProductById(id) {
       try {
        const response = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: updatedProduct.name,
            price: Number(updatedProduct.price),
            stock: Number(updatedProduct.stock),
            image: updatedProduct.image,
            description: updatedProduct.description
        })

      });
      

      if (response.ok) {
        const data = await response.json();
        console.log(data)
        console.log("Product Updated Successfully!");
        
      }
      return data.product;
    } catch (error) {
      console.log(error);
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
                        {/* <PenBox className='p-1 bg-blue-400 text-black rounded '/> */}
                        <Dialog.Root>
              <Dialog.Trigger>
                <PenBox
                  size={18}
                  className="p-1 bg-blue-400 text-black rounded"
                />
              </Dialog.Trigger>

              <Dialog.Content maxWidth="400px">
                <Dialog.Title>Edit Product</Dialog.Title>
                <Flex direction="column" gap="3">
                  <TextField.Root
                    // defaultValue={products?.name}
                    placeholder="Update product name"
                    variant="soft"
                    type='text'
                    value={updatedProduct.name}
                    onChange={(e) => setUpdatedProduct ({...updatedProduct, name: e.target.value,})}
                    size={1}
                  />

                  <TextField.Root
                    placeholder="Update product price"
                    size={1}
                    type="number"
                    value={updatedProduct.price}
                    onChange={(e) => setUpdatedProduct ({...updatedProduct, price: e.target.value})}
                    variant="soft"
                    min={0}
                  />

                  <TextField.Root
                    placeholder="Update product stock"
                    size={1}
                    type="number"
                    variant="soft"
                    value={updatedProduct.stock}
                    onChange={(e) => setUpdatedProduct ({...updatedProduct, stock: e.target.value})}
                    min={0}
                  />

                  <TextField.Root
                    placeholder="Update product image URL"
                    size="1"
                    type="url"
                    variant="soft"
                    value={updatedProduct.name}
                    onChange={(e) => setUpdatedProduct ({...updatedProduct, image: e.target.value})}
                  />

                  <TextArea
                    size="3"
                    placeholder="Update product description…"
                    variant="soft"
                    rows={5}
                    value={updatedProduct.description}
                    onChange={(e) => setUpdatedProduct ({...updatedProduct, description: e.target.value})}
                  />
                </Flex>

                <Flex gap="3" mt="4" justify="end">
                  <Dialog.Close>
                    <Button variant="soft" color="gray">
                      Cancel                        {/* <PenBox className='p-1 bg-blue-400 text-black rounded '/> */}

                    </Button>
                  </Dialog.Close>
                  <Dialog.Close asChild>
                    <Button
                    onClick={() => updatedProductById(products._id)}
                    >Save</Button>
                  </Dialog.Close>
                </Flex>
              </Dialog.Content>
            </Dialog.Root>
                        <Trash2Icon className='p-1 bg-red-400 text-black rounded ' onClick={()=> deleteProduct (products._id)}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductsCard