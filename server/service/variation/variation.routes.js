const { Router } = require("express");

const { getVariations } = require("./variation.controllers");

const router = Router();

router.get("/variation", getVariations);

module.exports = router;
