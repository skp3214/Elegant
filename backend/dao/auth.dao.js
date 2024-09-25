import User from "../model/user.model.js";

const createUser = async (user) => { 
    return await User.create(user); 
};

const getUserByEmail = async (email) => {
    return await User.findOne({ email });
};

const getUserById = async (id) => {
    return await User.findById(id).select("-password");
};

export default { createUser, getUserByEmail, getUserById }