const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const User = require("../models/User");

// add to cart
router.post("/add_to_cart", async (req, res) => {
  try {
    const { user_id, product_id, quantity } = req.body;
    const existingCartItem = await Cart.findOne({
      user_id,
      product_id,
    });

    // If the product is already in the cart, update the quantity
    if (existingCartItem) {
      existingCartItem.quantity += quantity;
    } else {
      const newCartItem = new Cart({
        user_id,
        product_id,
        quantity,
      });

      // If the product is not in the cart, create a new cart item
      await newCartItem
        .save()
        .then((response) => {
          if (response) {
            return res
              .status(200)
              .json({
                success: true,
                message: "Product added to cart successfully",
              });
          } else {
            return res
              .status(401)
              .json({
                success: false,
                message: "Failed to add product to cart",
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
