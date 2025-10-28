import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, AreaChart } from 'recharts';
import { MonthlyMovement } from '../types';

const data: MonthlyMovement[] = [
    { month: 'Ene', moved: 210 },
    { month: 'Feb', moved: 250 },
    { month: 'Mar', moved: 230 },
    { month: 'Abr', moved: 280 },
    { month: 'May', moved: 310 },
    { month: 'Jun', moved: 290 },
];

const MovementTrendChart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: 250 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorMoved" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(107, 114, 128, 0.3)" />
          <XAxis dataKey="month" tick={{ fill: '#9ca3af', fontSize: 12 }} />
          <YAxis tick={{ fill: '#9ca3af', fontSize: 12 }} />
          <Tooltip 
            contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4b5563',
                borderRadius: '0.5rem',
                color: '#ffffff'
            }}
          />
          <Area type="monotone" dataKey="moved" name="Unidades Movidas" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorMoved)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MovementTrendChart;