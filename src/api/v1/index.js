const express = require("express");
const { login, register } = require("./auth");
const router = new express.Router();
const { auth } = require("../../middlewares");
const { hello, all, add } = require("./stations");
router.post("/login", login);
router.post("/register", register);
router.get("/hello", (req, res, next) => {
  res.status(200).send("Hello there");
});
router.get("/stations/hello", auth, hello);
router.get("/stations/all", all);
router.post("/stations/add", add);
// router.post("/stations", require("./stations"));
module.exports = router;
