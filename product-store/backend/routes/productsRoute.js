import express from 'express';

const producRouter = express.Router();

import { 
    createProduct, 
    deleteProductById, 
    getAllProducts, 
    getProductById, 
    updateProductById 
} 
from "../controllers/productController.js"


producRouter.get('/', getAllProducts)

producRouter.post('/', createProduct)
producRouter.get('/:id', getProductById)

producRouter.put('/:id', updateProductById)

producRouter.delete('/:id', deleteProductById)

// Exporting the router
export default producRouter;