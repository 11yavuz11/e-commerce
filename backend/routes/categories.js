const express = require("express");
const router = express.Router();

// Tum kategorileri getir
router.get("/", async (req, res) => {
  res.send("Get all Categoris");
});

module.exports = router;
