const { Router } = require("express");

const { getCategories } = require("./category.controllers");

const router = Router();

router.get("/category", getCategories);

module.exports = router;
