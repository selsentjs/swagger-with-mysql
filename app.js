require("dotenv").config();
const express = require("express");
require("./database/connection");
const swaggerDocs = require('./swagger');

const productRouter = require("./routes/productRoute");
const reviewRouter = require("./routes/reviewRoute");

const app = express();

app.use(express.json());
app.use("/api/product", productRouter);
app.use("/api/review", reviewRouter);
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("welcome to sql with swagger");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
  swaggerDocs(app,port)
});
