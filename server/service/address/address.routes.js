const { Router } = require("express");

const { getAddresses } = require("./address.controllers");

const router = Router();

router.get("/address", getAddresses);

module.exports = router;
