const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// const verifyOTP = require("../middlewares/verifyOTP");


// SignUp
// router.post("/signup", verifyOTP, userController.signup);
router.post("/register", userController.signup);


// Login
router.post("/login", userController.login);


// Delete User Account
router.delete("/delete/:userId", userController.deleteUserAccount);


module.exports = router;