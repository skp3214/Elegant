import cartDao from "../dao/cart.dao.js";

export const createCart = async (cart) => {
    return await cartDao.createCart(cart);
};

export const getCart = async (userId) => {
    return await cartDao.getCart(userId);
}

export const updateCart = async (userId, cart) => {
    return await cartDao.updateCart(userId, cart);
}

export const deleteCart = async (userId) => {
    return await cartDao.deleteCart(userId);
}

