const express = require("express");
const { login, register } = require("./auth");
const router = new express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/hello", (req, res, next) => {
  res.status(200).send("Hello there");
});
module.exports = router;
