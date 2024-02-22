// Modal.js
import React from "react";


const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative mx-auto max-w-md">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-semibold">{data.name}</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <div className="relative p-4 flex-auto">
            <img
              src={data.imageSrc}
              alt={data.imageAlt}
              className="w-full h-full object-cover"
            />

            <p className="mt-4 text-base font-semibold text-gray-900">
              {data.description}
            </p>
            <p className="mt-4 text-base font-semibold text-gray-900">
              precio {data.precio}€
            </p>
            <p className="mt-4 text-base font-semibold text-gray-900">
              Iva {data.iva}%
            </p>
            <p className="mt-4 text-base font-semibold text-gray-900">
              Stock {data.stock}
            </p>

            <p className="mt-4 text-base font-semibold text-gray-900">{data.description}</p>
            <p className="mt-4 text-base font-semibold text-gray-900">Precio {data.precio}€</p>
            <p className="mt-4 text-base font-semibold text-gray-900">Iva {data.iva}%</p>
            <p className="mt-4 text-base font-semibold text-gray-900">Stock {data.stock}</p>

          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-emerald-500 rounded outline-none active:bg-emerald-600 hover:shadow-lg focus:outline-none"
              type="button"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
