import express from "express";
import { createProductController,getProductsController, getProductByIdController, updateProductController, deleteProductController } from "../controllers/product.controller.js";
import { isAdmin, protectedRoute } from "../middleware/auth.middleware.js";
const router=express.Router();

router.get("/products",getProductsController);
router.get("/products/:id",getProductByIdController);
router.post("/products",protectedRoute,isAdmin,createProductController);
router.put("/products/:id",protectedRoute,isAdmin,updateProductController);
router.delete("/products/:id",protectedRoute,isAdmin,deleteProductController);

export default router;