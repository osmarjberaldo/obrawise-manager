import { create } from 'zustand';
import { Worker } from '../types';

interface WorkerState {
  workers: Worker[];
  isLoading: boolean;
  error: string | null;
  fetchWorkers: () => Promise<void>;
  addWorker: (worker: Omit<Worker, 'id'>) => Promise<void>;
  updateWorker: (id: string, worker: Partial<Worker>) => Promise<void>;
  deleteWorker: (id: string) => Promise<void>;
}

// Mock worker data
const mockWorkers: Worker[] = [
  {
    id: '1',
    name: 'João Silva',
    role: 'Mestre de Obras',
    contact: '(11) 98765-4321',
    projectId: '1',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '2',
    name: 'Maria Oliveira',
    role: 'Engenheira Civil',
    contact: '(11) 97654-3210',
    projectId: '1',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '3',
    name: 'Pedro Santos',
    role: 'Eletricista',
    contact: '(11) 96543-2109',
    projectId: '1',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '4',
    name: 'Ana Costa',
    role: 'Arquiteta',
    contact: '(11) 95432-1098',
    projectId: '2',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '5',
    name: 'Carlos Ferreira',
    role: 'Encanador',
    contact: '(11) 94321-0987',
    projectId: '2',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
  }
];

export const useWorkerStore = create<WorkerState>((set) => ({
  workers: [],
  isLoading: false,
  error: null,
  
  fetchWorkers: async () => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      set({ workers: mockWorkers, isLoading: false });
    } catch (error) {
      set({ error: 'Erro ao carregar trabalhadores', isLoading: false });
    }
  },
  
  addWorker: async (worker) => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newWorker: Worker = {
        ...worker,
        id: Math.random().toString(36).substring(2, 9)
      };
      
      set(state => ({
        workers: [...state.workers, newWorker],
        isLoading: false
      }));
    } catch (error) {
      set({ error: 'Erro ao adicionar trabalhador', isLoading: false });
    }
  },
  
  updateWorker: async (id, updatedWorker) => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      set(state => ({
        workers: state.workers.map(worker => 
          worker.id === id ? { ...worker, ...updatedWorker } : worker
        ),
        isLoading: false
      }));
    } catch (error) {
      set({ error: 'Erro ao atualizar trabalhador', isLoading: false });
    }
  },
  
  deleteWorker: async (id) => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      set(state => ({
        workers: state.workers.filter(worker => worker.id !== id),
        isLoading: false
      }));
    } catch (error) {
      set({ error: 'Erro ao excluir trabalhador', isLoading: false });
    }
  }
}));