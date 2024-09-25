import Order from "../model/orders.model.js";

const createOrder = async (order) => {
    const session = await Order.startSession();
    try {
        await session.withTransaction(async () => {
            for (const item of order.orderItems) {
                const product = await Order.model("Product").findOneAndUpdate(
                    { _id: item.productId },
                    { $inc: { countInStock: -item.quantity } },
                    { session }
                );
                if (product.countInStock < 0) {
                    throw new Error("Not enough stock");
                }
            }
        });
    } finally{
        await session.endSession();
    }
    return await Order.create(order);
};


const getOrderByuserId = async (userId) => {
    return await Order.findById({ userId });
};

export default { createOrder, getOrderByuserId };