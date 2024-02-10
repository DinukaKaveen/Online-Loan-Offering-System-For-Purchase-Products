const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    product_id: {
        type: String,
        required: true,
    },
    date_time: {
        type: Date,
        required: true,
    },
    order_status: {
        default: "Unpaid",
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("purchases", orderSchema);