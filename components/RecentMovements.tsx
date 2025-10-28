import React from 'react';
import { RecentMovement } from '../types';

const movements: RecentMovement[] = [
  { id: 'M-001', equipmentName: 'Ultrasound Scanner X5', from: 'Radiología', to: 'Maternidad', date: '2024-07-21', status: 'Completado' },
  { id: 'M-002', equipmentName: 'Ventilator Pro', from: 'Almacén', to: 'UCI Cama 5', date: '2024-07-21', status: 'Completado' },
  { id: 'M-003', equipmentName: 'Defibrillator Z-100', from: 'Emergencias', to: 'Ambulancia #3', date: '2024-07-20', status: 'En Progreso' },
  { id: 'M-004', equipmentName: 'ECG Machine', from: 'Cardiología', to: 'Clínica Ambulatoria', date: '2024-07-20', status: 'Completado' },
  { id: 'M-005', equipmentName: 'Anesthesia Machine', from: 'Quirófano 2', to: 'Mantenimiento', date: '2024-07-19', status: 'Retrasado' },
];

const statusColorMap = {
  Completado: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
  'En Progreso': 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
  Retrasado: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
};

const RecentMovements: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3">Equipo</th>
            <th scope="col" className="px-4 py-3">Desde</th>
            <th scope="col" className="px-4 py-3">Hacia</th>
            <th scope="col" className="px-4 py-3">Estado</th>
          </tr>
        </thead>
        <tbody>
          {movements.map((movement) => (
            <tr key={movement.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-4 py-3 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {movement.equipmentName}
              </td>
              <td className="px-4 py-3">{movement.from}</td>
              <td className="px-4 py-3">{movement.to}</td>
              <td className="px-4 py-3">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColorMap[movement.status]}`}>
                  {movement.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentMovements;