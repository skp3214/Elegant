import { createOrder, getOrderByuserId } from "../services/order.service.js";

export const createOrderController = async (req, res) => {
    try {
        const order = req.body;
        const newOrder = await createOrder(order);
        res.status(201).json(newOrder);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
    }
}

export const getOrderByuserIdController = async (req, res) => {
    try {
        const userId = req.user._id;
        const orders = await getOrderByuserId(userId);
        res.status(200).json(orders);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
    }
}