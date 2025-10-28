import React from 'react';
import { RecentInventoryItem, EquipmentStatus } from '../types';

const inventory: RecentInventoryItem[] = [
  { id: 'E-1429', name: 'Bomba de Infusión Sigma', type: 'Bomba de Infusión', dateAdded: '2024-07-21', status: EquipmentStatus.Available },
  { id: 'E-1430', name: 'Monitor Cardiaco GE B40', type: 'Monitor de Paciente', dateAdded: '2024-07-20', status: EquipmentStatus.InUse },
  { id: 'E-1431', name: 'Electrocardiógrafo Philips', type: 'Diagnóstico', dateAdded: '2024-07-20', status: EquipmentStatus.Available },
  { id: 'E-1432', name: 'Cama Hospitalaria Hill-Rom', type: 'Mobiliario', dateAdded: '2024-07-19', status: EquipmentStatus.InUse },
  { id: 'E-1433', name: 'Desfibrilador Zoll R Series', type: 'Emergencia', dateAdded: '2024-07-18', status: EquipmentStatus.Maintenance },
];

const statusColorMap = {
  [EquipmentStatus.Available]: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
  [EquipmentStatus.InUse]: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
  [EquipmentStatus.Maintenance]: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
  [EquipmentStatus.Decommissioned]: 'bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300',
};

const RecentInventory: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3">Nombre del Equipo</th>
            <th scope="col" className="px-4 py-3">Tipo</th>
            <th scope="col" className="px-4 py-3">Fecha de Alta</th>
            <th scope="col" className="px-4 py-3">Estado</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-4 py-3 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {item.name}
              </td>
              <td className="px-4 py-3">{item.type}</td>
              <td className="px-4 py-3">{item.dateAdded}</td>
              <td className="px-4 py-3">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColorMap[item.status]}`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentInventory;