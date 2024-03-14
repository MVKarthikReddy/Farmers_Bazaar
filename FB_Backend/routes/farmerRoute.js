const express = require("express");
const router = express.Router();
const farmerController = require("../controllers/farmerController");

// SignUp
router.post("/signup", farmerController.signup);

// Login
router.post("/login", farmerController.login);

// Delete Seller Account
router.delete("/deleteSeller/:sellerId", farmerController.deleteFarmerAccount);

module.exports = router;
