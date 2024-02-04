require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


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