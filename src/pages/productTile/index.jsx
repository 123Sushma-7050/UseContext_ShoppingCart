import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context";

const ProductTile = ({ singleProductTile }) => {
  const navigate = useNavigate();
  const { thumbnail, title, price, id } = singleProductTile;
  const { handleAddToCart } = useContext(ShoppingCartContext);

  const handleNavigateToProductDetailsPage = (getCurrentId) => {
    navigate(`/product-details/${getCurrentId}`);
  };

  return (
    <div className="relative group border border-cyan-700 p-6 cursor-pointer">
      <div className="overflow-hidden aspect-w-1 aspect-h-1">
        <img
          src={thumbnail}
          alt={title}
          className="oject-cover w-full h-full transition-all duration-300 group-hover:scale-125"
        />
      </div>
      <div className="flex items-start justify-between mt-4 space-x-4">
        <div className="font-bold text-gray-900 sm:text-sm text-xs md:text-base">
          <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]">
            ${price}
          </p>
        </div>
      </div>
      <button
        className="px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg"
        onClick={() => handleNavigateToProductDetailsPage(id)}
      >
        View Details
      </button>
      <button
        onClick={() => handleAddToCart(singleProductTile)}
        className="disabled:opacity-65 px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductTile;
