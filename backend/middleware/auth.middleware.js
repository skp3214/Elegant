import User from "../model/user.model.js";
import jwt from "jsonwebtoken";

const protectedRoute=async(req,res,next)=>{
    try {
        
        const token=req.header('authtoken');
        if(!token){
            return res.status(401).json({error:"You are not logged in"})
        }

        const decoded=await jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({error:"unauthorized: Invalid Token"})
        }

        const user=await User.findById(decoded.userId).select("-password")
        if(!user){
            return res.status(401).json({error:"User not found"})
        }

        req.user=user;
        next();

    } catch (error) {
        console.error(error);
        return res.status(401).json({error:error.message})
    }
}

const isAdmin=async(req,res,next)=>{
    if(req.user && req.user.isAdmin){
        next();
    }else{
        res.status(401).json({error:"You are not an admin"})
    }
}

export {protectedRoute,isAdmin};