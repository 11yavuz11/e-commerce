const express = require("express");
const router = express.Router();
const Product = require("../models/Product.js");

// New added Product (Create)
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Server Error: ${error}` });
  }
});

// All Products (Read)
router.get("/", async (req, res) => {
  try {
    const productcs = await Product.find();
    res.status(200).json(productcs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Server Error: ${error}` });
  }
});

// Single Product (Read)
router.get("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;

    try {
      const product = await Product.findById(productId);
      res.status(200).json(product);
    } catch (error) {
      res.status(404).json({ error: `Product Not Found.` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Server Error: ${error}` });
  }
});

// Update Product (Update)
router.put("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const updates = req.body;
    const existingProduct = await Product.findById(productId);

    if (!existingProduct) {
      return res.status(404).json({ error: `Product Not Found.` });
    }

    const updatedProduct = await Product.findByIdAndUpdate(productId, updates, {
      new: true,
    });

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Server Error: ${error}` });
  }
});

// Delete Product (Delete)
router.delete("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const existingProduct = await Product.findById(productId);

    if (!existingProduct) {
      return res.status(404).json({ error: `Product Not Found.` });
    }

    await Product.findByIdAndDelete(productId);
    res.status(200).json({ message: `Product Deleted Successfully.` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Server Error: ${error}` });
  }
});

module.exports = router;
