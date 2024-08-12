const Products = require("./product.services.js");

const getProducts = async (req, res) => {
  try {
    const data = await Products.getProducts();
    return res.status(200).send({ data, ok: true });
  } catch (error) {
    console.log("Error Products Controller", error);
    return res
      .status(500)
      .send({ message: "Internal Server Error", ok: false });
  }
};

const getProduct = async (req, res) => {
  try {
    const { productID } = req.params;
    const data = await Products.getProduct(productID);
    return res.status(200).send({ data, ok: true });
  } catch (error) {
    console.log("Error Products Controller", error);
    return res
      .status(500)
      .send({ message: "Internal Server Error", ok: false });
  }
};

const createProduct = async (req, res) => {
  try {
    const productData = req.body;
    const data = await Products.createProduct(productData);
    return res.status(201).send({ data, ok: true });
  } catch (error) {
    console.log("Error Products Controller", error);

    return res
      .status(500)
      .send({ message: "Internal Server Error", ok: false });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { productID } = req.params;
    const { productName, price, categories, variations } = req.body;
    const data = await Products.updateProduct({
      productID,
      productName,
      price,
      categories,
      variations,
    });
    return res
      .status(200)
      .send({ data, message: "Updated Product successfully", ok: true });
  } catch (error) {
    console.log("Error Products Controller", error);
    return res
      .status(500)
      .send({ message: "Internal Server Error", ok: false });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { productID } = req.params;
    const data = await Products.deleteProduct(productID);
    return res.status(200).send({ data, ok: true });
  } catch (error) {
    console.log("Error Products Controller", error);
    return res
      .status(500)
      .send({ message: "Internal Server Error", ok: false });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
