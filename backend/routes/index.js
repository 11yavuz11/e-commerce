const express = require("express");
const router = express.Router();

// Diger dosyalardan router'ı kullanabilmek icin export ediyoruz
const categoryRouter = require("./categories.js");
const productsRouter = require("./products.js");

// Her rotayi yol altinda kullaniyoruz
router.use("/categories", categoryRouter);
router.use("/products", productsRouter);

module.exports = router;
