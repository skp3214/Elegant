import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../store/cartSlice.js';
import productService from '../api/product.api.js';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const userCart = useSelector((state) => state.cart.cart.cartItems);
    const userCartItems = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(userCartItems);
        const fetchProductDetails = async () => {
            const productDetails = await Promise.all(
                userCart.map((item) => productService.getProductById(item.productId))
            );

            console.log(productDetails);
            setCartItems(productDetails);
            setLoading(false);
        };
        fetchProductDetails();
    }, [userCart]);

    const handleRemoveProduct = (productId) => {
        dispatch(removeProduct(productId));
    };

    if (loading) {
        return <div>
            <h1>Loading...</h1>
        </div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <div className="text-center">
                    <p className="text-lg">Your cart is empty!</p>
                    <Link to="/" className="btn bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cartItems && cartItems.map((product, index) => (
                        <div key={product.data._id} className="bg-white shadow-lg rounded-lg p-6">
                            <img
                                src={product.data.image}
                                alt={product.data.name}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h2 className="text-xl font-semibold mb-2">{product.data.name}</h2>
                            <p className="text-lg font-bold text-green-600 mb-2">
                                ${product.data.price}
                            </p>
                            <div className="flex justify-between items-center">
                                <p className="text-sm text-gray-500">
                                    Quantity: {userCart[index].quantity}
                                </p>
                                <button
                                    onClick={() => handleRemoveProduct(product._id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CartPage;
