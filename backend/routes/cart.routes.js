import express from "express";
import { createCartController, getCartController, updateCartController, deleteCartController } from "../controllers/cart.controller.js";
import { protectedRoute } from "../middleware/auth.middleware.js";
const router=express.Router();

router.get("/cart",protectedRoute,getCartController);
router.post("/cart",protectedRoute,createCartController);
router.put("/cart",protectedRoute,updateCartController);
router.delete("/cart",protectedRoute,deleteCartController);

export default router;