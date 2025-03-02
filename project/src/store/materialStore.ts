import { create } from 'zustand';
import { Material } from '../types';

interface MaterialState {
  materials: Material[];
  isLoading: boolean;
  error: string | null;
  fetchMaterials: () => Promise<void>;
  addMaterial: (material: Omit<Material, 'id'>) => Promise<void>;
  updateMaterial: (id: string, material: Partial<Material>) => Promise<void>;
  deleteMaterial: (id: string) => Promise<void>;
}

// Mock material data
const mockMaterials: Material[] = [
  {
    id: '1',
    name: 'Cimento',
    quantity: 500,
    unit: 'sacos',
    price: 25.5,
    supplier: 'Fornecedor A',
    projectId: '1',
    threshold: 100
  },
  {
    id: '2',
    name: 'Areia',
    quantity: 30,
    unit: 'm³',
    price: 120,
    supplier: 'Fornecedor B',
    projectId: '1',
    threshold: 10
  },
  {
    id: '3',
    name: 'Tijolos',
    quantity: 10000,
    unit: 'unidades',
    price: 0.75,
    supplier: 'Fornecedor C',
    projectId: '1',
    threshold: 2000
  },
  {
    id: '4',
    name: 'Vergalhão',
    quantity: 200,
    unit: 'barras',
    price: 45.8,
    supplier: 'Fornecedor A',
    projectId: '2',
    threshold: 50
  },
  {
    id: '5',
    name: 'Madeira',
    quantity: 80,
    unit: 'm²',
    price: 35.9,
    supplier: 'Fornecedor D',
    projectId: '2',
    threshold: 20
  }
];

export const useMaterialStore = create<MaterialState>((set) => ({
  materials: [],
  isLoading: false,
  error: null,
  
  fetchMaterials: async () => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      set({ materials: mockMaterials, isLoading: false });
    } catch (error) {
      set({ error: 'Erro ao carregar materiais', isLoading: false });
    }
  },
  
  addMaterial: async (material) => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newMaterial: Material = {
        ...material,
        id: Math.random().toString(36).substring(2, 9)
      };
      
      set(state => ({
        materials: [...state.materials, newMaterial],
        isLoading: false
      }));
    } catch (error) {
      set({ error: 'Erro ao adicionar material', isLoading: false });
    }
  },
  
  updateMaterial: async (id, updatedMaterial) => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      set(state => ({
        materials: state.materials.map(material => 
          material.id === id ? { ...material, ...updatedMaterial } : material
        ),
        isLoading: false
      }));
    } catch (error) {
      set({ error: 'Erro ao atualizar material', isLoading: false });
    }
  },
  
  deleteMaterial: async (id) => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      set(state => ({
        materials: state.materials.filter(material => material.id !== id),
        isLoading: false
      }));
    } catch (error) {
      set({ error: 'Erro ao excluir material', isLoading: false });
    }
  }
}));