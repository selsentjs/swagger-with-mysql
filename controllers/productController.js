const con = require("../database/connection");

// get all the products

const getAllProducts = async (req, res) => {
  try {
    const sql = await "SELECT id,name,quantity,departments from product";
    con.query(sql, (err, product) => {
      if (err) throw err;
      res.status(200).json(product);
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// get single product

const getSingleProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const sql =
      await "SELECT id,name,quantity,departments from product where id=?";
    con.query(sql, id, (err, product) => {
      if (!id) {
        res.send("no product with this id");
      } else {
        res.status(200).json(product);
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// create product

const createProduct = async (req, res) => {
  try {
    const { name, quantity, departments } = req.body;
    const sql =
      (await "Insert into product(name,quantity,departments)values('") +
      name +
      "', '" +
      quantity +
      "','" +
      departments +
      "')";
    con.query(sql, (err, product) => {
      if (err) throw err;
      res.status(200).json("product created");
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// update product

const updateProduct = async (req, res) => {
  try {
    let id = req.params.id;
    let { name, quantity, departments } = req.body;
    let sql =
      await "update product set name=?, quantity=?, departments=? where id=?";

    con.query(sql, [name, quantity, departments, id], (err, product) => {
      if (err) throw err;
      res.status(200).json(product);
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// delete product

const deleteProduct = async (req, res) => {
  try {
    let id = req.params.id;
    let sql = await "delete from product where id=?";
    con.query(sql,id, (err) => {
        if(err) throw err;
        res.status(200).json('product deleted successfully')
    })
  } catch (err) {
    res.status(500).json(err);
  }
};

// get all the product with review

const getAllProductsWithReview = async (req, res) => {
    try {
      const sql = await "select product.id,product.name,product.quantity,product.departments, review.reviewID,review.stars,review.review from product inner join review on review.id=product.id";
      con.query(sql, (err, product) => {
        if (err) throw err;
        res.status(200).json(product);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  };

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProductsWithReview
};
