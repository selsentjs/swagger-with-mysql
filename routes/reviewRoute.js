const express = require("express");
const router = express.Router();

const {
  getAllReviews,
  getSingleReview,
  createReview,
  updateReview,
  deleteReview,
 
} = require("../controllers/reviewController");

router.route("/").get(getAllReviews);
router.route("/:id").get(getSingleReview);
router.route("/").post(createReview);
router.route("/:id").put(updateReview);
router.route("/:id").delete(deleteReview);



module.exports = router;
