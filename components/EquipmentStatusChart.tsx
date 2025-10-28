
import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { EquipmentStatus, EquipmentStatusDistribution } from '../types';

const data: EquipmentStatusDistribution[] = [
  { name: EquipmentStatus.InUse, value: 971 },
  { name: EquipmentStatus.Available, value: 415 },
  { name: EquipmentStatus.Maintenance, value: 42 },
];

const COLORS = {
  [EquipmentStatus.InUse]: '#3b82f6',
  [EquipmentStatus.Available]: '#10b981',
  [EquipmentStatus.Maintenance]: '#f59e0b',
};

const EquipmentStatusChart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            innerRadius={60}
            fill="#8884d8"
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(31, 41, 55, 0.8)',
              borderColor: '#4b5563',
              borderRadius: '0.5rem',
              color: '#ffffff'
            }}
          />
          <Legend iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EquipmentStatusChart;
