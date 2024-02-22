// Modal.js
import React, { useState } from "react";
import Link from "next/link";
const Modal = ({ isOpen, onClose, product, image }) => {
  if (!isOpen) return null;

  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  const handleAddToCart = () => {
    console.log("Añadir al carrito:", product.name);
  };
  
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-opacity-50 bg-black">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex">
          <div className="w-1/2">
            <img
              src={image}
              alt="imagen destacada"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 p-4">
            <div className="flex items-start justify-between">
              <h3 className="text-2xl font-semibold">{product.name}</h3>
              <div className="flex">
                <button
                  className={`p-1 bg-transparent border-0 text-black opacity-1 text-2xl leading-none font-semibold ${
                    isFavorite ? "text-red-500" : ""
                  }`}
                  onClick={handleToggleFavorite}
                >
                  ♥
                </button>
                <button
                  className="p-1 ml-4 bg-transparent border-0 text-black opacity-1 text-2xl leading-none font-semibold"
                  onClick={onClose}
                >
                  ×
                </button>
              </div>
            </div>
            <p className="text-base font-semibold text-gray-900">
              {product.description}
            </p>
            <p className="mt-2 text-base font-semibold text-gray-900">
              Precio: {product.price}€
            </p>
            <p className="mt-2 text-base font-semibold text-gray-900">
              IVA: {product.tax}%
            </p>
            <p className="mt-2 text-base font-semibold text-gray-900">
              Stock: {product.stock}
            </p>
            <div className="flex items-center justify-around mt-4">
              <Link href="/sellerContact">
                <div className="px-4 py-2 text-sm font-bold text-white bg-blue-500 rounded">
                  Contactar al vendedor
                </div>
              </Link>
              <button
                className="px-4 py-2 text-sm font-bold text-white bg-emerald-500 rounded"
                onClick={handleAddToCart}
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;