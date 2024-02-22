import React from "react";

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-opacity-50 bg-black">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex">
          <div className="w-1/2">
            <img
              src={data.imageSrc}
              alt={data.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 p-4">
            <div className="flex items-start justify-between">
              <h3 className="text-2xl font-semibold">{data.name}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-2xl leading-none font-semibold"
                onClick={onClose}
              >
                ×
              </button>
            </div>
            <p className="text-base font-semibold text-gray-900">
              {data.description}
            </p>
            <p className="mt-2 text-base font-semibold text-gray-900">
              Precio: {data.price}€
            </p>
            <p className="mt-2 text-base font-semibold text-gray-900">
              IVA: {data.tax}%
            </p>
            <p className="mt-2 text-base font-semibold text-gray-900">
              Stock: {data.stock}
            </p>
            <div className="flex items-center justify-end mt-4">
              <button
                className="px-4 py-2 text-sm font-bold text-white bg-emerald-500 rounded"
                onClick={onClose}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
