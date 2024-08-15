const User = require("./user.services");

const getUsers = async (req, res) => {
  try {
    const data = await User.getUsers();

    return res.status(200).send({ data, ok: true });
  } catch (error) {
    console.log("Error Users Controller");
    return res
      .status(500)
      .sendj({ message: "Internal Server Error", ok: false });
  }
};

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const data = await User.createUser(userData);
    return res.status(201).send({ data, ok: true });
  } catch (error) {
    console.log("Error Creating User Controller", error);

    return res
      .status(500)
      .send({ message: "Internal Server Error", ok: false });
  }
};

module.exports = { getUsers, createUser };
