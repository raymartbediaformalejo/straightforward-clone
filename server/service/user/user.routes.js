const { Router } = require("express");

const { getUsers, createUser } = require("./user.controllers");

const router = Router();

router.get("/", getUsers).post("/", createUser);

module.exports = router;
