import express from "express";
import {
  createPaymentIntent,
  confirmPayment,
} from "../controller/paymentController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create-payment-intent", protect, createPaymentIntent);
router.post("/confirm-payment", protect, confirmPayment);

export default router;