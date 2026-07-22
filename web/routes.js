const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.showLogin);
router.post("/", controller.handleLogin);
router.get("/logout", controller.logout);

module.exports = router;
