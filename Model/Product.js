const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  media: {
    type: String,
  },
  active: {
    type: Boolean,
    default: true,
  },
  paymentLink: {
    type: String,
    default: null
  }
});

module.exports = mongoose.model("Product", ProductSchema);