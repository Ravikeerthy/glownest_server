import express from "express";
import { registerUser, loginUser, getUserProfile, forgotPassword, resetPassword } from "../controller/authController.js";
import {protect} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getuserprofile", protect, getUserProfile);
router.post("/forgot-password", forgotPassword);
router.put("/reset-password/:token", resetPassword);

export default router;