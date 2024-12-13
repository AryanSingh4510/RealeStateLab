import express from "express";
import Property from "../config/propertySchema.js";

const router = express.Router();

router.get("/default", async (req, res) => {
  try {
    const properties = await Property.find().limit(6); // Fetch 6 default properties
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", async (req, res) => {
  const { location, type, minPrice, maxPrice } = req.query;
  const filters = {};
  if (location) filters.location = location;
  if (type) filters.type = type;
  if (minPrice || maxPrice)
    filters.price = { $gte: minPrice || 0, $lte: maxPrice || Infinity };

  try {
    const properties = await Property.find(filters);
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
