const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const User = require("../models/User");

router.post("/create_order", async (req, res) => {
  try {

    const { products, user, total_price, paid_amount, installment_state, remarks, status } = req.body;

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

      await User.findOneAndUpdate(user._id, { paid_amount: user.paid_amount + paid_amount });

      return res.status(200).json({ success: true, message: "Order Created Successfully" });
    } else {
      return res.status(400).json({ success: false, message: "Order Fail" });
    }
    
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
