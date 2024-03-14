const express = require('express');
const router = express.Router();
const bagController = require('../controllers/bagController');

// Add Cart Item
router.post("/add", bagController.addCartItem);

// Get Cart Item
router.get("/:userId", bagController.showCartItem);

// Delete Cart Item
router.delete("/delete/:userId/:productId", bagController.deleteCartItem);

// Increase Product Quantity in Cart
router.post("/increase/:userId/:productId", bagController.increaseQty);

// Decreae Product Quantity in Cart
router.post("/decrease/:userId/:productId", bagController.decreaseQty);


module.exports = router;