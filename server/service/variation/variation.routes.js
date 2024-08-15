const { Router } = require("express");

const { getVariations } = require("./variation.controllers");

const router = Router();

router.get("/", getVariations);

module.exports = router;
