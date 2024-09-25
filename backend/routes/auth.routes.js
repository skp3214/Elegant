import express from "express";
import { getMe, login, signup } from "../controllers/auth.controller.js";
import { protectedRoute} from "../middleware/auth.middleware.js";
const router=express.Router();

router.post('/register',signup)

router.post("/login",login)

router.get("/me",protectedRoute,getMe)

export default router;