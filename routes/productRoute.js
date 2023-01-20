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

router.route("/").get(getAllProducts);
router.route("/review").get(getAllProductsWithReview);
router.route("/:id").get(getSingleProduct);
router.route("/").post(createProduct);
router.route("/:id").put(updateProduct);
router.route("/:id").delete(deleteProduct);


module.exports = router;
