
app.get('/api/products', async (req, res) => {
  // getting all products from the database
  const products = ProductModel.find({})
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
      res.status(500).json({ message: 'Server error' });
    }); 
    
});

app.post('/api/products', async (req, res) =>  {
  // This is a placeholder for user creation logic
  const newProduct = req.body;
  const { name, price, description, image, stock } = newProduct;
  console.log('New product data:', newProduct.name);
  // Validate the new product data here
  try {
    if (!newProduct.name || 
      !newProduct.price || 
      !newProduct.description || 
      !newProduct.image 
    ) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    

    // Create a new product object
    const product = new ProductModel({
      name: name,
      price: price,
      description: description,
      image: image,
      stock: stock || 0, // Default stock to 0 if not provided
      timestamp: new Date(),
    });

    res.status(201).json({ message: 'Product created successfully', product });
    // Save the product to the database
    await product.save();

  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// getting a single product by id
app.get('/api/products/:id', async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await ProductModel.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// updating a product by id
app.put('/api/products/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedData = req.body;

    // Validate the updated data
    if (!updatedData.name || !updatedData.price || !updatedData.description || !updatedData.image) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const product = await ProductModel.findByIdAndUpdate(productId, updatedData, { new: true });
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.status(200).json({ message: 'Product updated successfully', product });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// deleting a product by id
app.delete('/api/products/:id', async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await ProductModel.findByIdAndDelete(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Server error' });
      }
    });
