import React from 'react';
import { StatCardData } from '../types';
import IconArrowUp from './icons/IconArrowUp';
import IconArrowDown from './icons/IconArrowDown';

interface StatCardProps {
  data: StatCardData;
}

const StatCard: React.FC<StatCardProps> = ({ data }) => {
  const { icon: Icon, title, value, change, changeType } = data;
  const isIncrease = changeType === 'increase';

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{value}</p>
        </div>
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary-100 dark:bg-primary-900/50 rounded-full">
          <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <div className={`flex items-center text-xs font-medium ${isIncrease ? 'text-green-500' : 'text-red-500'}`}>
          {isIncrease ? <IconArrowUp className="w-4 h-4 mr-1" /> : <IconArrowDown className="w-4 h-4 mr-1" />}
          <span>{change}%</span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 ml-2">desde el mes pasado</p>
      </div>
    </div>
  );
};

export default StatCard;