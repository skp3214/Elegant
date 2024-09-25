import express from "express";
import { createOrderController, getOrderByuserIdController } from "../controllers/order.controller.js";
import { protectedRoute } from "../middleware/auth.middleware.js";
const router=express.Router();

router.post("/order",protectedRoute,createOrderController);
router.get("/order",protectedRoute,getOrderByuserIdController);

export default router;