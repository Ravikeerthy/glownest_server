import express from "express";
import { createProduct, getAllProducts, getProductById } from "../controller/productController.js";


const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/createproduct", createProduct);

export default router;