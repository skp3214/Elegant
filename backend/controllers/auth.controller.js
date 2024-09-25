import User from "../model/user.model.js";
import { createUser, loginUser, getUser } from "../services/auth.service.js";
export const signup=async(req,res)=>{
    try{
        const {name,email,password}=req.body;

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(!emailRegex.test(email)){
            return res.status(400).json({error:"Invalid email format"});
        }

       const result=await createUser(name,email,password);

       if(result.userExist){
           return res.status(400).json({userExist:result.userExist});
       }

       return res.status(200).json({success:true,authtoken:result.token});
    }
    catch(err){
        console.log(err.message);
        return res.status(500).json({error:err.message,success:false});
    }
}
export const login=async(req,res)=>{
    try {
        const {email,password}=req.body;

        const result=await loginUser(email,password);

        if(!result){
            return res.status(400).json({success:false});
        }

        return res.status(200).json({success:true,authtoken:result.token});
    } 
    catch (err) {
        console.log(err.message);
        return res.status(500).json({error:err.message,success:false});
    }
}


export const getMe=async(req,res)=>{
    try {
        const user=await getUser(req.user._id);
        return res.status(200).json({success:true,user});
    } catch (error) {
        console.log(err.message);
        return res.status(500).json({error:err.message,success:false});
    }
}