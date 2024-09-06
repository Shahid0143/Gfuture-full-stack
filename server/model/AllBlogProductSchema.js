const mongoose = require("mongoose");

const blogproductSchema = new mongoose.Schema({
  blogTitle: {
    type: String,
    required: true,
  },
  blogDes: {
    type: String,
    required: true,
  },
  blogPrice: {
    type: Number,
    required: true,
  },
  blogSelectedImage: {
    type: String,
    required: true,
  },
});

const blogProductSc = mongoose.model("blogproduct", blogproductSchema);
module.exports = blogProductSc;
