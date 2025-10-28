
import React from 'react';

const HistoryPage: React.FC = () => {
  return (
    <div>
       <div className="mb-8">
        <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
          Historial
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Aquí se podrá consultar el historial de movimientos y mantenimientos.
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <p className="text-center text-gray-500 dark:text-gray-400">Contenido de la página de historial próximamente...</p>
      </div>
    </div>
  );
};

export default HistoryPage;
