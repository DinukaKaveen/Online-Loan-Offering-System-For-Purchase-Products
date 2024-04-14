const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product_code: {
        type: String,
        required: true,
    },
    product_name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    qty: {
        type: Number,
        required: true,
    },
    main_category: {
        type: String,
        required: true
    },
    sub_category: {
        type: String,
        required: true
    },
    warranty: {
        type: String,
        required: true
    },
    supplier_id: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    image: {
        type: String,
    }
});

module.exports = mongoose.model("Product", productSchema);