const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post("/create_order", async (req, res) => {
  try {
    const order = new Order({
      products: req.body.products,
      user_id: req.body.user_id,
      total_price: req.body.total_price,
      paid_amount: req.body.paid_amount,
    });

    const newOrder = await order.save();
    if (newOrder) {
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
