import { createCart, getCart, updateCart, deleteCart } from "../services/cart.service.js";

export const createCartController = async (req, res) => {
    try {
        const cart = req.body;
        const newCart = await createCart(cart);
        res.status(201).json(newCart);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
    }
};


export const getCartController = async (req, res) => {
    try {
        const userId = req.user._id;
        const cart = await getCart(userId);
        res.status(200).json(cart);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
    }
};

export const updateCartController = async (req, res) => {
    try {
        const userId = req.user._id;
        const cart = req.body;
        const updatedCart = await updateCart(userId, cart);
        res.status(200).json(updatedCart);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
    }
};


export const deleteCartController = async (req, res) => {
    try {
        const userId = req.user._id;
        const deletedCart = await deleteCart(userId);
        res.status(200).json(deletedCart);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
    }
}