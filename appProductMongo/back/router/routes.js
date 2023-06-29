import express from 'express';

import { getProduct,getProducts,createProducts,updateProduct,deleteProduct } from '../controller/ProductController.js';

const router = express.Router();

// router.get('/',getProducts);
// router.get('/:id',getProduct);
// router.post('/',createProducts);
// router.put('/:id',updateProduct);
// router.delete('/:id',deleteProduct);

router.route('/').get(getProducts).post(createProducts);
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct);

export default router;
