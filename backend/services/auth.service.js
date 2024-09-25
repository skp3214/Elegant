import bcrypt from "bcryptjs/dist/bcrypt.js";
import authDao from "../dao/auth.dao.js";
import { getToken } from "../utils/generateToken.js";
const createUser=async(name,email,password)=>{
    let user=await authDao.getUserByEmail(email);

    if(user){
        return {userExist:true};
    }

    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);
    user=await authDao.createUser({name,email,password:hashedPassword});

    const token=getToken(user._id);
    return {userExist:false,token};
}

const loginUser=async(email,password)=>{
    const user=await authDao.getUserByEmail(email);

    if(!user){
        return null;
    }

    const isPasswordCorrect=await bcrypt.compare(password,user.password);

    if(!isPasswordCorrect){
        return null;
    }

    const token=getToken(user._id);

    return {token};

}

const getUser=async(id)=>{
    const user=await authDao.getUserById(id);
    if(!user){
        return null;
    }

    return user;
}

export {createUser,loginUser,getUser}