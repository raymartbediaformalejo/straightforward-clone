const { Router } = require("express");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("./product.controller.js");

const router = Router();

router.get("/products", getProducts);
router.get("/products/:productID", getProduct);
router.post("/products", createProduct);
router.patch("/products/:productID", updateProduct);
router.delete("/products/:productID", deleteProduct);

module.exports = router;
