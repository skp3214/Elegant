import orderDao from "../dao/order.dao.js";

export const createOrder = async (order) => {
    return await orderDao.createOrder(order);
}

export const getOrderByuserId = async (userId) => {
    return await orderDao.getOrderByuserId(userId);
}
