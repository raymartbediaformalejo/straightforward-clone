const Address = require("./address.services");

const getAddresses = async (req, res) => {
  try {
    const data = await Address.getAddresses();

    return res.status(200).send({ data, ok: true });
  } catch (error) {
    console.log("Error Addresses Controller");
    return res
      .status(500)
      .sendj({ message: "Internal Server Error", ok: false });
  }
};

module.exports = { getAddresses };
