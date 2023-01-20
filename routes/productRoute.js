const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProductsWithReview
} = require("../controllers/productController");

/**
 * @swagger
 * /api/product:
 *  get:
 *    summary: Get all products 
 *    tags: [product]
 *    responses:
 *      200:
 *        description: The list of products
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/product'
 */
router.route("/").get(getAllProducts);
/**
 * @swagger
 * /api/product/review:
 *  get:
 *    summary: Get all products with review 
 *    tags: [product,review]
 *    responses:
 *      200:
 *        description: The list of products
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/product,review'
 */
router.route("/review").get(getAllProductsWithReview);
/**
 * @swagger
 * /api/product/{id}:
 *  get:
 *    summary: Get product by id
 *    tags: [product]
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id of product
 *        schema:
 *          type: string
 *          required: true
 *    responses:
 *      200:
 *        description: product by its id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/product'
 *      500:
 *        description: Internal server error 
 */
router.route("/:id").get(getSingleProduct);
/**
 * @swagger
 * components:
 *  schemas:
 *    product:
 *      type: object
 *      required:
 *        - name
 *        - quantity
 *        - departments
 *      properties:
 *        name:
 *          type: string
 *          description: name of the product
 *        quantity:
 *          type: number
 *          description: total quantity of the product
 *        departments:
 *          type: string
 *          description: departments of the product
 */

/**
 * @swagger
 * /api/product:
 *  post:
 *    summary: create a new product
 *    tags: [product]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/product'
 *    responses:
 *      200:
 *        description: The product created successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/product'
 *      500:
 *        description: Internal server error
 */
router.route("/").post(createProduct);
/**
 * @swagger
 * /api/product/{id}:
 *  put:
 *    summary: Update product by id
 *    tags: [product]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: product id
 *    requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/product'
 *    responses:
 *      200:
 *        description: The product was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/product'
 *      404:
 *        description: product was not found
 *      500:
 *        description: Internal server error
 */
router.route("/:id").put(updateProduct);
/**
 * @swagger
 * /api/product/{id}:
 *  delete:
 *    summary: remove product from array
 *    tags: [product]
 *    parameters:
 *      - in: path
 *        name: id
 *        description: product id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: The product was deleted
 *      404:
 *        description: The product was not found
 */
router.route("/:id").delete(deleteProduct);


module.exports = router;
