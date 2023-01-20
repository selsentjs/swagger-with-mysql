const express = require("express");
const router = express.Router();

const {
  getAllReviews,
  getSingleReview,
  createReview,
  updateReview,
  deleteReview,
 
} = require("../controllers/reviewController");
/**
 * @swagger
 * /api/review:
 *  get:
 *    summary: Get all reviews 
 *    tags: [review]
 *    responses:
 *      200:
 *        description: The list of reviews
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/review'
 */
router.route("/").get(getAllReviews);
/**
 * @swagger
 * /api/review/{id}:
 *  get:
 *    summary: Get review by id
 *    tags: [review]
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id of review
 *        schema:
 *          type: string
 *          required: true
 *    responses:
 *      200:
 *        description: review by its id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/review'
 *      500:
 *        description: Internal server error 
 */
router.route("/:id").get(getSingleReview);
/**
 * @swagger
 * components:
 *  schemas:
 *    product,review:
 *      type: object
 *      required:
 *        - id
 *        - stars
 *        - review
 *      properties:
 *        id:
 *          type: string
 *          description: id of the product
 *        stars:
 *          type: number
 *          description: star for the product
 *        review:
 *          type: string
 *          description: review of the product
 */

/**
 * @swagger
 * /api/review:
 *  post:
 *    summary: create a new review with product_id
 *    tags: [product,review]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/product,review'
 *    responses:
 *      200:
 *        description: The review created successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/product,review'
 *      500:
 *        description: Internal server error
 */
router.route("/").post(createReview);
/**
 * @swagger
 * /api/review/{id}:
 *  put:
 *    summary: Update review by id
 *    tags: [review]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: review id
 *    requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/review'
 *    responses:
 *      200:
 *        description: The review was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/review'
 *      404:
 *        description: review was not found
 *      500:
 *        description: Internal server error
 */
router.route("/:id").put(updateReview);
/**
 * @swagger
 * /api/review/{id}:
 *  delete:
 *    summary: remove review from array
 *    tags: [review]
 *    parameters:
 *      - in: path
 *        name: id
 *        description: review id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: The review was deleted
 *      404:
 *        description: The review was not found
 */
router.route("/:id").delete(deleteReview);



module.exports = router;
