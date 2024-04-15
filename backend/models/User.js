const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    total_amount: {
        type: Number,
        default: 15000.00,
        required: true
    },
    used_amount: {
        type: Number,
        default: 0.00,
        required: true
    },
    paid_amount: {
        type: Number,
        default: 0.00,
        required: true
    }
});

module.exports = mongoose.model("User", userSchema);