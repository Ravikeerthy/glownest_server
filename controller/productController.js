import Product from "../models/Product.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch product" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, category, price, image, description, inStock } = req.body;
    console.log("ReqBody", req.body);
    

    const product = await Product.create({
      name,
      category,
      price,
      image,
      description,
      inStock,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Failed to create product" });
  }
};