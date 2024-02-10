require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/product_routes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(productRoutes);
app.use("/uploads", express.static("E:/Projects/Bumble Bee/Bumble-Bee-Online-loan-offering-system-/uploads"));

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})

mongoose
    .connect(process.env.DB_URL)
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch((err) => {
        console.error("Error connecting to mongo: ", err)
    })