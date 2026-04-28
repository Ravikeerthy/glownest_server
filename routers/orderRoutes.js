import express from "express";
import { createOrder, getAllOrders, getMyOrders, getOrderById, updateOrderStatus } from "../controller/orderController.js";
import { adminOnly, protect } from "../middleware/authMiddleware.js";

const router = express.Router()

router.post("/", protect, createOrder);
router.get("/myorders", protect, getMyOrders);
router.get("/:id", protect, getOrderById);

router.get("/", protect, adminOnly, getAllOrders);
router.put("/:id", protect, adminOnly, updateOrderStatus);

export default router;