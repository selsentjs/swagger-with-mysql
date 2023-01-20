const con = require("../database/connection");

// get all the reviews

const getAllReviews = async (req, res) => {
  try {
    const sql = await "SELECT reviewID,stars,review,id from review";
    con.query(sql, (err, review) => {
      if (err) throw err;
      res.status(200).json(review);
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// get single review

const getSingleReview = async (req, res) => {
  try {
    const reviewID = req.params.id;
    const sql =
      await "SELECT reviewID,stars,review,id from review where reviewID=?";
    con.query(sql, reviewID, (err, review) => {
      if (!reviewID) {
        res.send("no review with this id");
      } else {
        res.status(200).json(review);
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// create review

const createReview = async (req, res) => {
  try {
    const { stars,review,id } = req.body;
    const sql =
      (await "Insert into review( stars,review,id )values('") +
      stars +
      "', '" +
      review +
      "','" +
      id +
      "')";
    con.query(sql, (err, review) => {
      if (err) throw err;
      res.status(200).json("review created");
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// update review

const updateReview = async (req, res) => {
  try {
    let reviewID = req.params.id;
    let { stars,review,id } = req.body;
    let sql =
      await "update review set stars=?, review=?, id=? where reviewID=?";

    con.query(sql, [stars,review,id,reviewID], (err, review) => {
      if (err) throw err;
      res.status(200).json(review);
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// delete review

const deleteReview = async (req, res) => {
  try {
    let reviewID = req.params.id;
    let sql = await "delete from review where reviewID=?";
    con.query(sql, reviewID, (err) => {
      if (err) throw err;
      res.status(200).json("review deleted successfully");
    });
  } catch (err) {
    res.status(500).json(err);
  }
};



module.exports = {
  getAllReviews,
  getSingleReview,
  createReview,
  updateReview,
  deleteReview,
  
};
