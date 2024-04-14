const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  products: [
    {
      product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  total_price: {
    type: String,
    required: true,
  },
  paid_amount: {
    type: String,
    required: true,
  },
  date_time: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  status: {
    default: "Installment",
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
