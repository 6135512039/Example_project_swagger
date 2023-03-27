import express from "express";

const router = express.Router();
const { getAllProductController,
    getProductByProductIdController,
    createProductIdByProductIdController
} = require('./../controller/product_controller');

/**
 * @swagger
 * /product/v1/products:
 *      get:
 *        description: get all product
 *        responses: 
 *          200:
 *            description: success
 */
router.get('/v1/products', getAllProductController);

/**
 * @swagger
 * /product/v1/products/id/{productId}:
 *      get: 
 *        summary: get product by productID
 *        parameters:
 *          - name: productId
 *            in: path
 *            schema:
 *              type: integer
 *            required: true
 *            description: numeric of product
 *        responses: 
 *          200:
 *            description: success
 */
router.get('/v1/products/id/:productId', getProductByProductIdController);

/**
 * @swagger
 * /product/v1/products/{productId}:
 *      post:
 *        summary: create product by productId
 *        parameters: 
 *          - name: productId
 *            in: path
 *            schema:
 *              type: string
 *            required: true
 *            description: numeric of product
 *        responses:
 *          200:
 *            description: success
 */
router.post('/v1/products/:productId', createProductIdByProductIdController);

module.exports = router;
