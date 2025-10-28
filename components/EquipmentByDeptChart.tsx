import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { EquipmentByDepartment } from '../types';

const data: EquipmentByDepartment[] = [
  { name: 'Cardiología', count: 250 },
  { name: 'Radiología', count: 180 },
  { name: 'UCI', count: 320 },
  { name: 'Cirugía', count: 210 },
  { name: 'Pediatría', count: 150 },
  { name: 'Oncología', count: 120 },
  { name: 'Emergencias', count: 198 },
];

const EquipmentByDeptChart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: -10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(107, 114, 128, 0.3)" />
          <XAxis dataKey="name" tick={{ fill: '#9ca3af', fontSize: 12 }} />
          <YAxis tick={{ fill: '#9ca3af', fontSize: 12 }} />
          <Tooltip 
            cursor={{fill: 'rgba(107, 114, 128, 0.1)'}}
            contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4b5563',
                borderRadius: '0.5rem',
                color: '#ffffff'
            }}
          />
          <Bar dataKey="count" fill="#3b82f6" name="Cantidad de Equipos" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EquipmentByDeptChart;