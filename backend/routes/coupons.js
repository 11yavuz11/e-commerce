const express = require("express");
const router = express.Router();
const Coupon = require("../models/Coupon.js");

// New Coupon (Create)
router.post("/", async (req, res) => {
  try {
    const newCoupon = new Coupon(req.body);
    await newCoupon.save();

    res.status(201).json(newCoupon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Server Error: ${error}` });
  }
});

// Read All Coupons (Read)
router.get("/", async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.status(200).json(coupons);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Server Error: ${error}` });
  }
});

// Single Coupon (Read)
router.get("/:couponId", async (req, res) => {
  try {
    const couponId = req.params.couponId;

    try {
      const coupon = await Coupon.findById(couponId);
      res.status(200).json(coupon);
    } catch (error) {
      res.status(404).json({ error: `Coupon Not Found.` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Server Error: ${error}` });
  }
});
// Update Coupon (Update)
router.put("/:couponId", async (req, res) => {
  try {
    const couponId = req.params.couponId;
    const updates = req.body;
    const existingCoupon = await Coupon.findById(couponId);

    if (!existingCoupon) {
      return res.status(404).json({ error: `Coupon Not Found.` });
    }

    const updatedCoupon = await Coupon.findByIdAndUpdate(couponId, updates, {
      new: true,
    });

    res.status(200).send(updatedCoupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Server Error: ${error}` });
  }
});

// Delete Coupon (Delete)
router.delete("/:couponId", async (req, res) => {
  try {
    const couponId = req.params.couponId;
    const deletedCoupon = await Coupon.findByIdAndDelete(couponId);

    if (!deletedCoupon) {
      return res.status(404).json({ error: `Coupon Not Found.` });
    }
    res.status(200).json(`Coupon ${couponId} has been deleted.`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Server Error: ${error}` });
  }
});

module.exports = router;
