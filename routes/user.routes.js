const express = require("express");
const { createUser } = require("../controller/user/create.user.controller");
const userProfile = require("../controller/user/profile.controller");

const router = express.Router();

router.post("/create", createUser);
router.get("/profile", userProfile);

module.exports = router;
