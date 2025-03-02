import { create } from 'zustand';
import { Supplier } from '../types';

interface SupplierState {
  suppliers: Supplier[];
  isLoading: boolean;
  error: string | null;
  fetchSuppliers: () => Promise<void>;
  addSupplier: (supplier: Omit<Supplier, 'id'>) => Promise<void>;
  updateSupplier: (id: string, supplier: Partial<Supplier>) => Promise<void>;
  deleteSupplier: (id: string) => Promise<void>;
}

// Mock supplier data
const mockSuppliers: Supplier[] = [
  {
    id: '1',
    name: 'Fornecedor A',
    contact: '(11) 1234-5678',
    email: 'contato@fornecedora.com.br',
    address: 'Rua das Indústrias, 123, São Paulo',
    materials: ['Cimento', 'Vergalhão']
  },
  {
    id: '2',
    name: 'Fornecedor B',
    contact: '(11) 2345-6789',
    email: 'contato@fornecedorb.com.br',
    address: 'Av. Industrial, 456, Guarulhos',
    materials: ['Areia']
  },
  {
    id: '3',
    name: 'Fornecedor C',
    contact: '(11) 3456-7890',
    email: 'contato@fornecedorc.com.br',
    address: 'Rua dos Tijolos, 789, Osasco',
    materials: ['Tijolos']
  },
  {
    id: '4',
    name: 'Fornecedor D',
    contact: '(11) 4567-8901',
    email: 'contato@fornecedord.com.br',
    address: 'Estrada da Madeira, 1011, Barueri',
    materials: ['Madeira']
  }
];

export const useSupplierStore = create<SupplierState>((set) => ({
  suppliers: [],
  isLoading: false,
  error: null,
  
  fetchSuppliers: async () => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      set({ suppliers: mockSuppliers, isLoading: false });
    } catch (error) {
      set({ error: 'Erro ao carregar fornecedores', isLoading: false });
    }
  },
  
  addSupplier: async (supplier) => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newSupplier: Supplier = {
        ...supplier,
        id: Math.random().toString(36).substring(2, 9)
      };
      
      set(state => ({
        suppliers: [...state.suppliers, newSupplier],
        isLoading: false
      }));
    } catch (error) {
      set({ error: 'Erro ao adicionar fornecedor', isLoading: false });
    }
  },
  
  updateSupplier: async (id, updatedSupplier) => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      set(state => ({
        suppliers: state.suppliers.map(supplier => 
          supplier.id === id ? { ...supplier, ...updatedSupplier } : supplier
        ),
        isLoading: false
      }));
    } catch (error) {
      set({ error: 'Erro ao atualizar fornecedor', isLoading: false });
    }
  },
  
  deleteSupplier: async (id) => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      set(state => ({
        suppliers: state.suppliers.filter(supplier => supplier.id !== id),
        isLoading: false
      }));
    } catch (error) {
      set({ error: 'Erro ao excluir fornecedor', isLoading: false });
    }
  }
}));