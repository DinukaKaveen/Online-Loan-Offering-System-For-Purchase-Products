const express = require("express");
const router = express.Router();
const multer = require("multer");
const Product = require("../models/Product");

//add product
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(
      null,
      "E:/GitHub Repositories/Bumble Bee/Bumble-Bee-Online-loan-offering-system-/uploads"
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
    image: req.file.filename,
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

//get all products
router.get("/products", (req, res) => {
  Product.find()
    .then((products) => {
      return res.json({
        products: products,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

//get product details by id
router.get("/get_product_details/:id", (req, res) => {
  const product_id = req.params.id;
  Product.findById(product_id)
    .then((product) => {
      return res.json({
        product: product,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

//get product details by product id(s)
router.post("/get_products_by_ids", async (req, res) => {
  const product_ids = req.body.productIds;
  await Product.find({ _id: { $in: product_ids } })
    .then((products) => {
      if (products) {
        return res.status(200).json({
          success: true,
          products: products,
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "Products not found",
        });
      }
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    });
});

module.exports = router;
