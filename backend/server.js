require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/product_routes");
const userRoutes = require("./routes/user_routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

//app MiddleWare
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(cors());

//route MiddleWare
app.use(productRoutes);
app.use(userRoutes);
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