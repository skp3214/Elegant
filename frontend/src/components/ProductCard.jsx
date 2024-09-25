import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ name, price, image, id }) => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(image)
  }, []);
  return (
    <div className="max-w-xs p-4 bg-white rounded-lg shadow-md cursor-pointer" onClick={() => navigate(`/products/${id}`)}>
      <div className="flex space-x-2 mb-2">
        <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded">
          NEW
        </span>
        <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
          -50%
        </span>
      </div>

      <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="object-contain h-full"
        />
      </div>

      <div className="mt-4 text-center">
        <div className="flex justify-center items-center mb-2">
          <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 15.27L16.18 18l-1.64-7.03L19 7.24l-7.19-.61L10 0 8.19 6.63 1 7.24l5.46 3.73L4.82 18z" />
          </svg>
          <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 15.27L16.18 18l-1.64-7.03L19 7.24l-7.19-.61L10 0 8.19 6.63 1 7.24l5.46 3.73L4.82 18z" />
          </svg>
          <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 15.27L16.18 18l-1.64-7.03L19 7.24l-7.19-.61L10 0 8.19 6.63 1 7.24l5.46 3.73L4.82 18z" />
          </svg>
          <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 15.27L16.18 18l-1.64-7.03L19 7.24l-7.19-.61L10 0 8.19 6.63 1 7.24l5.46 3.73L4.82 18z" />
          </svg>
          <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 15.27L16.18 18l-1.64-7.03L19 7.24l-7.19-.61L10 0 8.19 6.63 1 7.24l5.46 3.73L4.82 18z" />
          </svg>
        </div>

        <h3 className="text-lg font-semibold">{name}</h3>

        <p className="text-gray-600 mt-1">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
