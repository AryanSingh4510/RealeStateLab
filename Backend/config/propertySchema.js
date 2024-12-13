// models/Property.js
import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  location: String,
  type: { type: String, enum: ["Sale", "Rent"] },
  bedrooms: Number,
  images: [String],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Property", propertySchema);
