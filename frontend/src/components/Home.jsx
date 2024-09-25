import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import ProductCard from './ProductCard';
import productService from '../api/product.api.js';
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const [products, setProducts] = useState(null);
  const navigate=useNavigate();
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await productService.getProducts();
    setProducts(response.data);
  };

  return (
    <div>
      <Navbar />
      <div className='flex justify-between p-8'>
        <div className='text-6xl text-semibold'>
            <h1>New</h1>
            <h1>Arrivals</h1>
        </div>
        <div className='text-2xl mt-20 pr-4'>
            <a href='#' className='flex items-center space-x-2 underline'>
                <p>More Products</p>
                <FaArrowRight />
            </a>   
        </div>
      </div>
      <div className="flex overflow-x-auto space-x-4 p-4">
        {products && products.map((product) => (
          <div key={product._id} className="flex-none w-72">
            <ProductCard
              name={product.name}
              price={product.price}
              image={product.image}
              id={product._id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
