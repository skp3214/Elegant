import Cart from "../model/cart.model.js";

const createCart = async (cart) => {
    return await Cart.create(cart);
};

const getCart = async (userId) => {
    return await Cart.findOne({ userId });
};

const updateCart = async (userId, cart) => {
    await Cart.findOneAndUpdate({ userId }, cart);
    return getCart(userId);
};

const deleteCart = async (userId) => {
    return await Cart.findOneAndDelete({ userId });
};

export default { createCart, getCart, updateCart, deleteCart };