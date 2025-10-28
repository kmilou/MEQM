
import React from 'react';

const InventoryPage: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
          Inventario
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Aquí se mostrará la gestión del inventario de equipos.
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <p className="text-center text-gray-500 dark:text-gray-400">Contenido de la página de inventario próximamente...</p>
      </div>
    </div>
  );
};

export default InventoryPage;
