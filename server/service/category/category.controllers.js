const Category = require("./category.services");

const getCategories = async (req, res) => {
  try {
    const data = await Category.getCategories();

    return res.status(200).send({ data, ok: true });
  } catch (error) {
    console.log("Error Category Controller");
    return res
      .status(500)
      .sendj({ message: "Internal Server Error", ok: false });
  }
};

module.exports = { getCategories };
