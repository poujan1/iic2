const express = require("express");
const createAdmin = require("../controller/admin/create.controller");
const adminProfile = require("../controller/admin/profile.controller");
const { adminAuth } = require("../middlewares/auth");

const router = express.Router();

router.post("/create", createAdmin);
router.get("/profile", adminAuth, adminProfile);

module.exports = router;
