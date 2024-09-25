import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../api/product.api.js';
import Navbar from './Navbar';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/cartSlice.js';
import { useSelector } from 'react-redux';
const ProductPage = () => {
    const [product, setProduct] = useState(null);
    const [count, setCount] = useState(1)
    const { id } = useParams();
    const dispatch=useDispatch();
    useEffect(() => {
        getProductById(id);
    }, [id]);

    const getProductById = async (id) => {
        const response = await productService.getProductById(id);
        setProduct(response.data);
    };

    const handleCart=async()=>{
        const cart={productId:id,quantity:count}
        dispatch(addProduct(cart))  
        setCount(1)
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between p-6">
                <div className="w-full lg:w-1/3 p-4 flex justify-center items-center">
                    <div className="w-full sm:w-3/4 lg:w-full rounded-lg overflow-hidden shadow-lg">
                        <img 
                            src={product?.image} 
                            alt={product?.name} 
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
                
                <div className="w-full lg:w-2/3 p-4">
                    <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">{product?.name}</h2>
                        <p className="text-gray-600">{product?.description}</p>
                        <p className="text-xl font-bold text-gray-800">${product?.price}</p>

                        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
                            <button 
                                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onClick={() => handleCart()}
                            >
                                Add to cart
                            </button>

                            <div className="flex items-center space-x-4">
                                <button 
                                    className="bg-gray-300 text-gray-700 px-2 py-1 rounded-lg focus:outline-none"
                                    onClick={() => setCount(count - 1)}
                                >
                                    -
                                </button>
                                <p className="text-gray-700">{count} </p>
                                <button 
                                    className="bg-gray-300 text-gray-700 px-2 py-1 rounded-lg focus:outline-none"
                                    onClick={() => setCount(count + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
