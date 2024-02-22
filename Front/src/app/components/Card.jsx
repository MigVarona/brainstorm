"use client";

import Link from "next/link";

import React, { useState, useEffect } from "react";
import Modal from "./Modal.jsx";

const Card = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCallout, setSelectedCallout] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const imageNames = [
    "2A70F7AE-6CBC-47C1-926E-D993E675DD68.jpg",
    "7C50D0AA-71C2-45A4-AFF0-580B17BBEDFF.jpg",
    "7F08FF94-2F09-40AD-AF06-A398251FEFD8.jpg",
    "34FA4853-81FA-40D2-B3FF-CE42959D640E.jpg",
    "40ECB0CF-EFF7-40AA-AA48-F199A8030468.jpg",
    "274FAE5D-1C9A-4182-80C3-AE2D301DBE74.jpg",
    "94371DF1-D6C9-4CC6-A8CD-E702F3B3F207.jpg",
    "70159197-6FAB-47ED-8E84-F5707D029814.jpg",
    "CBE05F00-3744-4E3A-8D9F-13CB4E89784C.jpg",
    "E63209C0-5429-49BE-A0A7-B2C2FF9B0957.jpg",
    "F11DAE42-0C80-40D4-95F1-170BE29E1155.jpg",
    "F407D81B-84D3-46E1-AE5E-DB937BBB0BFC.jpg",
  ];

  const openModal = (product) => {
    event.preventDefault();
    setSelectedCallout(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-full px-4 md:px-8 ml-20 mr-20 mb-20">
      <div className="mx-auto max-w-7xl gap-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-2 sm:py-24 lg:max-w-none lg:py-2">
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {products.map((product) => (
              <div
                key={product.name}
                className="mb-20 group relative cursor-pointer"
                onClick={(event) => openModal(product, event)}
              >
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={`/${imageNames[Math.floor(Math.random() * imageNames.length)]}`} // Ruta de la imagen aleatoria
                    alt="imagen destacada"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-6 text-sm text-gray-500">{product.name}</div>

                <p className="text-base text-gray-700">
                  Precio: ${product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal} product={selectedCallout} image={imageNames[Math.floor(Math.random() * imageNames.length)]}/>
    </div>
  );
};

export default Card;
