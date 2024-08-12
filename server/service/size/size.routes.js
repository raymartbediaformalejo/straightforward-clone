const { Router } = require("express");

const { getSizes } = require("./size.controllers");

const router = Router();

router.get("/size", getSizes);

module.exports = router;
