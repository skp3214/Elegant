import mongoose from "mongoose";

const orderSchema=new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    orderedItems: [
        {
            productId:{
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Product",
            },
            quantity:{
                type: Number,
                required: true,
                default: 1,
            }
        }
    ],
    phoneNumber: {
        type:Number,
        required: true,
    },
    shippingAddress: {
        street: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        town: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        zipcode: {
            type: Number,
            required: true,
        },
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now(),
    },
    totalPrice: {
        type: Number,
        required: true,
    }
});
export default mongoose.model("Order", orderSchema);