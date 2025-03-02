import { create } from 'zustand';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  resetPassword: (email: string) => Promise<void>;
}

// Mock user data for demonstration
const mockUser: User = {
  id: '1',
  name: 'Usuário de Teste',
  email: 'teste@test.com.br',
  role: 'admin',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  
  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simple validation for the demo credentials
      if (email === 'teste@test.com.br' && password === '123456') {
        set({ user: mockUser, isAuthenticated: true, isLoading: false });
      } else {
        set({ error: 'Credenciais inválidas', isLoading: false });
      }
    } catch (error) {
      set({ error: 'Erro ao fazer login', isLoading: false });
    }
  },
  
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
  
  resetPassword: async (email: string) => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, this would send a reset email
      set({ isLoading: false });
      return Promise.resolve();
    } catch (error) {
      set({ error: 'Erro ao redefinir senha', isLoading: false });
      return Promise.reject(error);
    }
  }
}));