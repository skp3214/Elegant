import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    cartItems: [
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
    ]
},{
    timestamps: true,
});

export default mongoose.model("Cart", cartSchema);