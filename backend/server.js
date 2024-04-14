require("dotenv").config();
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/product_routes");
const userRoutes = require("./routes/user_routes");
const cartRoutes = require("./routes/cart_routes");
const orderRoutes = require("./routes/order_routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

//app MiddleWare
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

//express session middleware
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongoUrl: process.env.DB_URL }),
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24, //1day
      //maxAge: 30 * 60 * 1000, //30min
      httpOnly: true,
    },
  })
);

//route MiddleWare
app.use(productRoutes);
app.use(userRoutes);
app.use(cartRoutes);
app.use(orderRoutes);
app.use(
  "/uploads",
  express.static(
    "E:/GitHub Repositories/Bumble Bee/Online-Loan-Offering-System-For-Purchase-Products/uploads"
  )
);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

mongoose
  .connect(process.env.DB_URL)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
