const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
    product_id: {
        type: String,
        required: true,
    },
    order_id: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    date_time: {
        type: Date,
        required: true,
    },
    purchase_status: {
        default: "Unpaid",
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("purchases", purchaseSchema);