import React from 'react';

const ExitPage: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
          Salida de Equipos
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Registre la salida de equipos hacia otros departamentos, mantenimiento o baja.
        </p>
      </div>
       <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <p className="text-center text-gray-500 dark:text-gray-400">Formulario de salida de equipos próximamente...</p>
      </div>
    </div>
  );
};

export default ExitPage;