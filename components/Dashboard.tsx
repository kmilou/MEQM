import React from 'react';
import StatCard from './StatCard';
import { StatCardData } from '../types';
import IconEquipment from './icons/IconEquipment';
import IconInUse from './icons/IconInUse';
import IconMaintenance from './icons/IconMaintenance';
import IconFunctional from './icons/IconFunctional';
import EquipmentStatusChart from './EquipmentStatusChart';
import EquipmentByDeptChart from './EquipmentByDeptChart';
import RecentMovements from './RecentMovements';
import RecentInventory from './RecentInventory';

const Dashboard: React.FC = () => {
  const statCards: StatCardData[] = [
    {
      icon: IconEquipment,
      title: 'Equipos Totales',
      value: '1,428',
      change: 2.5,
      changeType: 'increase',
    },
    {
      icon: IconInUse,
      title: 'Equipos en Uso',
      value: '971',
      change: 5.1,
      changeType: 'increase',
    },
    {
      icon: IconMaintenance,
      title: 'Requieren Mantenimiento',
      value: '42',
      change: 10.3,
      changeType: 'decrease',
    },
    {
      icon: IconFunctional,
      title: 'Equipos Funcionales',
      value: '1,386',
      change: 3.2,
      changeType: 'increase',
    },
  ];

  return (
    <div>
      {/* Dashboard header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Bienvenida de nuevo, Dra. Vance. Aquí está el resumen de sus equipos.</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((card, index) => (
          <StatCard key={index} data={card} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
        <div className="lg:col-span-3 bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Equipos por Departamento</h2>
            <EquipmentByDeptChart />
        </div>
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700 p-6">
             <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Estado de Equipos</h2>
            <EquipmentStatusChart />
        </div>
      </div>
      
      {/* More Charts & Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Inventario Reciente</h2>
            <RecentInventory />
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Movimientos de los Últimos 7 Días</h2>
            <RecentMovements/>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;