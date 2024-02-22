"use client";

import Link from "next/link";

import React, { useState, useEffect } from "react";
import Modal from "./Modal";

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

  // const openModal = (callout) => {
  //   setSelectedCallout(callout);
  //   setModalOpen(true);
  // };

  const closeModal = () => {
    setModalOpen(false);
  };

  const callouts = [
    {
      name: "Federico Lopez",
      description: "Robot de asistencia",
      imageSrc: "70159197-6FAB-47ED-8E84-F5707D029814.jpg",
      profile:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      imageAlt:
        "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
      href: "#",
      precio: 150,
      iva: 21,
      stock: 20,
    },
    {
      name: "Self-Improvement",
      description: "Journals and note-taking",
      imageSrc: "274FAE5D-1C9A-4182-80C3-AE2D301DBE74.jpg",
      imageAlt:
        "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
      href: "#",
      precio: 150,
      iva: 21,
      stock: 20,
    },
    {
      name: "Travel",
      description: "Daily commute essentials",
      imageSrc: "CBE05F00-3744-4E3A-8D9F-13CB4E89784C.jpg",
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      href: "#",
      precio: 150,
      iva: 21,
      stock: 20,
    },
    {
      name: "Travel",
      description: "Daily commute essentials",
      imageSrc: "2A70F7AE-6CBC-47C1-926E-D993E675DD68.jpg",
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      href: "#",
      precio: 150,
      iva: 21,
      stock: 20,
    },
    {
      name: "Travel",
      description: "Daily commute essentials",
      imageSrc: "40ECB0CF-EFF7-40AA-AA48-F199A8030468.jpg",
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      href: "#",
      precio: 150,
      iva: 21,
      stock: 20,
    },
    {
      name: "Travel",
      description: "Daily commute essentials",
      imageSrc: "34FA4853-81FA-40D2-B3FF-CE42959D640E.jpg",
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      href: "#",
      precio: 150,
      iva: 21,
      stock: 20,
    },
  ];

  return (
    <div className="w-full px-4 md:px-8 ml-20 mr-20 mb-20">
      <div className="mx-auto max-w-7xl gap-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-2 sm:py-24 lg:max-w-none lg:py-2">
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {products.map((product) => (
              <div
                key={product.name}
                className="mb-20 group relative cursor-pointer"
                onClick={() => openModal(product)}
              >
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={""}
                    alt={""}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link href="">
                    <span className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>

                <p className="text-base text-gray-700">
                  Precio: ${product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Modal isOpen={modalOpen} onClose={closeModal} data={selectedCallout} /> */}
    </div>
  );
};

export default Card;
