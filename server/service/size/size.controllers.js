const Size = require("./size.services");

const getSizes = async (req, res) => {
  try {
    const data = await Size.getSizes();

    return res.status(200).send({ data, ok: true });
  } catch (error) {
    console.log("Error Sizes Controller");
    return res
      .status(500)
      .sendj({ message: "Internal Server Error", ok: false });
  }
};

module.exports = { getSizes };
