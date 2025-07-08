import mongoose from 'mongoose';

// Defining products schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }, 
  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// exporting the product model
const ProductModel = mongoose.model('Product', productSchema);
export default ProductModel;