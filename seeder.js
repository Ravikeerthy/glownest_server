import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import dbConnection from "./database/dbConfig.js";

dotenv.config();
dbConnection();

const products = [
  {
    name: "Hydrating Face Serum",
    category: "Skincare",
    price: 899,
    image: "https://images.pexels.com/photos/6621461/pexels-photo-6621461.jpeg",
    description: "A lightweight serum for glowing skin",
  },
  {
    name: "Matte Lipstick",
    category: "Makeup",
    price: 499,
    image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg",
    description: "Long-lasting matte finish",
  },
  {
    name: "Hair Repair Oil",
    category: "Haircare",
    price: 699,
    image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg",
    description: "Strengthens and nourishes hair",
  },
  {
    name: "Body Lotion",
    category: "Wellness",
    price: 399,
    image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg",
    description: "Deep hydration for smooth skin",
  },
];

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();