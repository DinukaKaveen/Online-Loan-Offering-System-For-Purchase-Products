const express = require("express");
const router = express.Router();
const multer = require("multer");
const Product = require("../models/Product");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(
      null,
      "E:/Projects/Bumble Bee/Bumble-Bee-Online-loan-offering-system-/uploads"
    );
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/add_product", upload.single("image"), (req, res) => {
  const product = new Product({
    product_code: req.body.product_code,
    product_name: req.body.product_name,
    price: req.body.price,
    qty: req.body.qty,
    main_category: req.body.main_category,
    sub_category: req.body.sub_category,
    warranty: req.body.warranty,
    supplier_id: req.body.supplier_id,
    status: req.body.status,
    image: req.file.path,
  });

  product
    .save()
    .then(() => {
      res
        .status(200)
        .json({ success: true, message: "Product added successfully" });
    })
    .catch((err) => {
      res.status(500).json({ success: false, message: err });
    });
});

router.get("/products", (req, res) => {
  Product.find()
    .then((products) => {
      return res.json({
        success: true,
        products: products,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
