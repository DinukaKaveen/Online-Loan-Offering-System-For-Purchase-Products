const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post("/create_order", async (req, res) => {
  const order = new Order({
    products: req.body.products,
    user_id: req.body.user_id,
    total_price: req.body.total_price,
    paid_amount: req.body.paid_amount,
    date_time: req.body.date_time,
  });

  order
    .save()
    .then(() => {
      return res.status(200).json({ success: true, message: "Order Created" });
    })
    .catch((error) => {
      return res.status(500).json({ success: false, message: "Order Fail" });
    });
});

module.exports = router;
