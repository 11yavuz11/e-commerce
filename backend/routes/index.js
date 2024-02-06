const express = require("express");
const router = express.Router();

// Diger dosyalardan router'ı kullanabilmek icin export ediyoruz
const categoryRoute = require("./categories.js");
const authRoute = require("./auth.js");
const productsRoute = require("./products.js");

// Her rotayi yol altinda kullaniyoruz
router.use("/categories", categoryRoute);
router.use("/auth", authRoute);
router.use("/products", productsRoute);

module.exports = router;
