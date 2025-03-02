export type UserRole = 'admin' | 'engineer' | 'worker' | 'viewer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
  progress: number;
  status: 'not-started' | 'in-progress' | 'completed' | 'on-hold';
  location: string;
  leadEngineer: string;
  client: string;
  images: string[];
  documents: string[];
}

export interface Worker {
  id: string;
  name: string;
  role: string;
  contact: string;
  projectId: string;
  avatar?: string;
}

export interface Material {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  price: number;
  supplier: string;
  projectId: string;
  threshold: number;
}

export interface Supplier {
  id: string;
  name: string;
  contact: string;
  email: string;
  address: string;
  materials: string[];
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  read: boolean;
  date: string;
}