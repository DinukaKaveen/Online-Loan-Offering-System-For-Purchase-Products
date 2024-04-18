const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const User = require("../models/User");

// add to cart and update cart
router.post("/add_to_cart", async (req, res) => {
  try {
    const { user_id, product_id, quantity, price } = req.body;

    const existingCartItem = await Cart.findOne({
      user_id,
      product_id,
    });
    const user = await User.findById(user_id);

    // If the product is already in the cart, update the quantity
    if (existingCartItem) {
      const updateQty = existingCartItem.quantity + quantity;

      await existingCartItem
        .updateOne({ quantity: updateQty })
        .then((response) => {
          if (response) {
            return res.status(200).json({
              success: true,
              message: "Product quantity updated successfully",
            });
          } else {
            return res.status(401).json({
              success: false,
              message: "Failed to update product quantity",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });

      await User.findByIdAndUpdate(
        user_id,
        { used_amount: user.used_amount + price },
        { new: true }
      );
    } else {
      // If the product is not in the cart, create a new cart item
      const newCartItem = new Cart({
        user_id,
        product_id,
        quantity,
      });

      await User.findByIdAndUpdate(
        user_id,
        { used_amount: user.used_amount + price },
        { new: true }
      );

      await newCartItem
        .save()
        .then((response) => {
          if (response) {
            return res.status(200).json({
              success: true,
              message: "Product added to cart successfully",
            });
          } else {
            return res.status(401).json({
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

// get cart by user
router.get("/get_cart/:user_id", async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const cart = await Cart.find({ user_id });

    if (cart) {
      return res.status(200).json({
        success: true,
        cartItems: cart,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Cart not found",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// Update quantity in the cart
router.put("/update-quantity/:cartItemId", async (req, res) => {
  try {
    const cartItemId = req.params.cartItemId;
    const { quantity } = req.body;
    const cartItem = await Cart.findById(cartItemId);

    if (!cartItem) {
      return res
        .status(404)
        .json({ success: false, message: "Cart item not found" });
    }

    cartItem.quantity = quantity;
    await cartItem.save();

    res.json({ success: true, message: "Quantity updated in the cart" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// Remove item from the cart
router.delete("/remove-from-cart/:cart_id", async (req, res) => {
  try {
    const cart_id = req.params.cart_id;
    const user = req.body.user;
    const price = req.body.price;
    const qty = req.body.qty;
    const total = price * qty;

    const deleteProduct = await Cart.findByIdAndDelete(cart_id);
    if (!deleteProduct) {
      return res.json({ success: false, message: "Product delete fail" });
    }

    //Update user's used amount
    await User.findByIdAndUpdate(
      user._id, 
      { used_amount: user.used_amount - total },
      { new: true }
    );

    return res.json({
      success: true,
      message: "Product removed from the cart",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

module.exports = router;
