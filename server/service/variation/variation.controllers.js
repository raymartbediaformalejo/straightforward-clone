const Variation = require("./variation.services");

const getVariations = async (req, res) => {
  try {
    const data = await Variation.getVariations();

    return res.status(200).send({ data, ok: true });
  } catch (error) {
    console.log("Error Variations Controller");
    return res
      .status(500)
      .sendj({ message: "Internal Server Error", ok: false });
  }
};

module.exports = { getVariations };
