const express = require("express");
const Product = require("../model/AddProductSchema");
const allProduct = require("../model/AddAllProductSchema");
const blogProductSc = require("../model/AllBlogProductSchema");

const router = express.Router();

// Create a Add Product Api

router.post("/addproduct", async (req, res) => {
  try {
    const { title, description, price, selectedImage } = req.body;

    if (!title || !description || !price || !selectedImage) {
      return res.status(409).json({ message: "Plz Fill the Data" });
    }

    const productData = new Product({
      title,
      description,
      price,
      selectedImage,
    });
    await productData.save();
    res.status(201).json({ message: "Product Added Successfully" });
  } catch (err) {
    res.status(409).json({ message: "Product Not Added." });
  }
});

router.post("/addallproduct", async (req, res) => {
  try {
    const { allTitle, allDescription, allPrice, AllSelectedImage } = req.body;

    if (!allTitle || !allDescription || !allPrice || !AllSelectedImage) {
      return res.status(409).json({ message: "Plz Fill the Data" });
    }

    const productData = new allProduct({
      allTitle,
      allDescription,
      allPrice,
      AllSelectedImage,
    });
    await productData.save();
    res.status(201).json({ message: "Product Added Successfully" });
  } catch (err) {
    res.status(409).json({ message: "Product Not Added." });
  }
});

router.post("/addblogproduct", async (req, res) => {
  try {
    const { blogTitle, blogDes, blogPrice, blogSelectedImage } = req.body;

    if (!blogTitle || !blogDes || !blogPrice || !blogSelectedImage) {
      return res.status(409).json({ message: "Plz Fill the Data" });
    }

    const productData = new blogProductSc({
      blogTitle,
      blogDes,
      blogPrice,
      blogSelectedImage,
    });
    await productData.save();
    res.status(201).json({ message: "Product Added Successfully" });
  } catch (err) {
    res.status(409).json({ message: "Product Not Added." });
  }
});

// Fetch Products Api

router.get("/addproduct", async (req, res) => {
  try {
    const fetchDataFromDb = await Product.find({});
    res.status(201).send(fetchDataFromDb);
  } catch (err) {
    res.status(409).json({ message: "Products Not Fecth." });
    console.log("Error While calling when fetch products , ", err);
  }
});

router.get("/addallproduct", async (req, res) => {
  try {
    const fetchallDataFromDb = await allProduct.find({});
    res.status(201).send(fetchallDataFromDb);
  } catch (err) {
    res.status(409).json({ message: "Products Not Fecth." });
    console.log("Error While calling when fetch products , ", err);
  }
});

router.get("/addblogproduct", async (req, res) => {
  try {
    const fetchblogDataFromDb = await blogProductSc.find({});
    res.status(201).send(fetchblogDataFromDb);
  } catch (err) {
    res.status(409).json({ message: "Products Not Fecth." });
    console.log("Error While calling when fetch products , ", err);
  }
});

// Get Single Product Api

router.get("/addproduct/:id", async (req, res) => {
  try {
    const singleproduct = await Product.findById(req.params.id);
    res.status(201).send(singleproduct);
  } catch (err) {
    res.status(409).json({ message: "Product Not Found!" });
  }
});
router.get("/addallproduct/:id", async (req, res) => {
  try {
    const allsingleproduct = await allProduct.findById(req.params.id);
    res.status(201).send(allsingleproduct);
  } catch (err) {
    res.status(409).json({ message: "Product Not Found!" });
  }
});
router.get("/addblogproduct/:id", async (req, res) => {
  try {
    const blogsingleproduct = await blogProductSc.findById(req.params.id);
    res.status(201).send(blogsingleproduct);
  } catch (err) {
    res.status(409).json({ message: "Product Not Found!" });
  }
});

module.exports = router;
