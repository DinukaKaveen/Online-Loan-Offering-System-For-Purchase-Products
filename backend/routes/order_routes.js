const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const User = require("../models/User");
const Cart = require("../models/Cart");

router.post("/create_order", async (req, res) => {
  try {
    const {
      products,
      user,
      total_price,
      paid_amount,
      installment_state,
      remarks,
      status,
    } = req.body;

    const order = new Order({
      products: products,
      user_id: user._id,
      total_price: total_price,
      paid_amount: paid_amount,
      installment_state: installment_state,
      remarks: remarks,
      status: status,
    });

    const newOrder = await order.save();
    if (newOrder) {
      //update user and delete products from cart
      await User.findByIdAndUpdate(user._id, {
        paid_amount: user.paid_amount + paid_amount,
      });
      for (const product of products) {
        await Cart.findOneAndDelete({ product_id: product.product_id });
      }

      return res
        .status(200)
        .json({ success: true, message: "Order Created Successfully" });
    } else {
      return res.status(400).json({ success: false, message: "Order Fail" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

router.get("/get_orders/:user_id/:status", async (req, res) => {
  const user_id = req.params.user_id;
  const status = req.params.status;

  try {

    const orders = await Order.find({ user_id: user_id, status: status });
    if (orders) {
      return res.status(200).json({ success: true, pendingOrders: orders });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
