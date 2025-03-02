import { create } from 'zustand';
import { Project } from '../types';

interface ProjectState {
  projects: Project[];
  isLoading: boolean;
  error: string | null;
  fetchProjects: () => Promise<void>;
  addProject: (project: Omit<Project, 'id'>) => Promise<void>;
  updateProject: (id: string, project: Partial<Project>) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
}

// Mock project data
const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Edifício Horizonte',
    description: 'Construção de edifício residencial com 20 andares',
    startDate: '2023-01-15',
    endDate: '2024-06-30',
    budget: 5000000,
    spent: 2100000,
    progress: 42,
    status: 'in-progress',
    location: 'Av. Paulista, 1000, São Paulo',
    leadEngineer: 'Carlos Silva',
    client: 'Construtora Horizonte Ltda',
    images: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    ],
    documents: []
  },
  {
    id: '2',
    name: 'Ponte Rio Verde',
    description: 'Construção de ponte sobre o Rio Verde',
    startDate: '2023-03-10',
    endDate: '2024-04-15',
    budget: 3500000,
    spent: 1800000,
    progress: 65,
    status: 'in-progress',
    location: 'Rio Verde, GO',
    leadEngineer: 'Ana Oliveira',
    client: 'Prefeitura Municipal',
    images: [
      'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    ],
    documents: []
  },
  {
    id: '3',
    name: 'Shopping Center Alameda',
    description: 'Construção de shopping center com 3 andares',
    startDate: '2023-05-20',
    endDate: '2024-12-10',
    budget: 8000000,
    spent: 2500000,
    progress: 28,
    status: 'in-progress',
    location: 'Rua das Alamedas, 500, Belo Horizonte',
    leadEngineer: 'Roberto Mendes',
    client: 'Grupo Alameda Shopping',
    images: [
      'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    ],
    documents: []
  }
];

export const useProjectStore = create<ProjectState>((set, get) => ({
  projects: [],
  isLoading: false,
  error: null,
  
  fetchProjects: async () => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      set({ projects: mockProjects, isLoading: false });
    } catch (error) {
      set({ error: 'Erro ao carregar projetos', isLoading: false });
    }
  },
  
  addProject: async (project) => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newProject: Project = {
        ...project,
        id: Math.random().toString(36).substring(2, 9)
      };
      
      set(state => ({
        projects: [...state.projects, newProject],
        isLoading: false
      }));
    } catch (error) {
      set({ error: 'Erro ao adicionar projeto', isLoading: false });
    }
  },
  
  updateProject: async (id, updatedProject) => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      set(state => ({
        projects: state.projects.map(project => 
          project.id === id ? { ...project, ...updatedProject } : project
        ),
        isLoading: false
      }));
    } catch (error) {
      set({ error: 'Erro ao atualizar projeto', isLoading: false });
    }
  },
  
  deleteProject: async (id) => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      set(state => ({
        projects: state.projects.filter(project => project.id !== id),
        isLoading: false
      }));
    } catch (error) {
      set({ error: 'Erro ao excluir projeto', isLoading: false });
    }
  }
}));