"use client";

import Link from "next/link";

import React, { useState } from "react";
import Modal from "./Modal";

const CardIa = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCallout, setSelectedCallout] = useState(null);

  const openModal = (callout, event) => {
    event.preventDefault();
    setSelectedCallout(callout);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const callouts = [
    {
      name: "Federico Lopez",
      description: "Robot de asistencia",
      imageSrc: "_4f8de2cf-93e9-40bb-8535-80b0b66b71b2.jpg",
      profile:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      imageAlt:
        "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
      href: "#",
      price: 150,
      tax: 21,
      stock: 20,
    },
    {
      name: "Self-Improvement",
      description: "Journals and note-taking",
      imageSrc: "_75abcec9-2ea7-4943-96ed-94ab7df2f4ca.jpg",
      imageAlt:
        "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
      href: "#",
      price: 150,
      tax: 21,
      stock: 20,
    },
    {
      name: "Travel",
      description: "Daily commute essentials",
      imageSrc: "_db71dbf5-dd5d-4c87-8c3d-b9abbe53c6fb.jpg",
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      href: "#",
      price: 150,
      tax: 21,
      stock: 20,
    },
    {
      name: "Travel",
      description: "Daily commute essentials",
      imageSrc: "_98a6564a-4281-4cb5-9ea7-7779c8bd663c.jpg",
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      href: "#",
      price: 150,
      tax: 21,
      stock: 20,
    },
    {
      name: "Travel",
      description: "Daily commute essentials",
      imageSrc: "_abefdec0-812e-49e7-a982-9451a1c4d8ca.jpg",
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      href: "#",
      price: 150,
      tax: 21,
      stock: 20,
    },
    {
      name: "Travel",
      description: "Daily commute essentials",
      imageSrc: "_92d5ac80-3b4c-4aba-98a1-dc9e370471d0.jpg",
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      href: "#",
      price: 150,
      tax: 21,
      stock: 20,
    },
  ];

  return (
    <div className="w-full px-4 md:px-8 ml-20 mr-20 mb-20">
      <div className="mx-auto max-w-7xl gap-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-2 sm:py-24 lg:max-w-none lg:py-2">
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div
                key={callout.name}
                className="mb-20 group relative cursor-pointer"
                onClick={(event) => openModal(callout, event)}
              >
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-6 text-sm text-gray-500">{callout.name}</div>

                <p className="text-base text-gray-700">
                  Precio: ${callout.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal} data={selectedCallout} />
    </div>
  );
};

export default CardIa;
