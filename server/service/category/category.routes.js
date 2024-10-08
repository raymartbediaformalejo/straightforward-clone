const { Router } = require("express");

const { getCategories } = require("./category.controllers");

const router = Router();

router.get("/", getCategories);

module.exports = router;
