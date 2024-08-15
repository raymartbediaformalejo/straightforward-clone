const router = require("express").Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("./product.controllers.js");

// router.get("/products");

router
  .get("/", getProducts)
  .get("/:productID", getProduct)
  .post("/", createProduct)
  .patch("/:productID", updateProduct)
  .delete("/:productID", deleteProduct);

module.exports = router;
