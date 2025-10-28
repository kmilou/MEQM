// FIX: Import React to make React types available.
import React from 'react';

export enum EquipmentStatus {
  InUse = 'En Uso',
  Available = 'Disponible',
  Maintenance = 'Mantenimiento',
  Decommissioned = 'Fuera de Servicio',
}

export interface StatCardData {
  icon: React.ElementType;
  title: string;
  value: string;
  change: number;
  changeType: 'increase' | 'decrease';
}

export interface RecentMovement {
  id: string;
  equipmentName: string;
  from: string;
  to: string;
  date: string;
  status: 'Completado' | 'En Progreso' | 'Retrasado';
}

export interface RecentInventoryItem {
  id: string;
  name: string;
  type: string;
  dateAdded: string;
  status: EquipmentStatus;
}

export interface EquipmentByDepartment {
  name: string;
  count: number;
}

export interface EquipmentStatusDistribution {
  name: EquipmentStatus;
  value: number;
}

export interface MonthlyMovement {
    month: string;
    moved: number;
}