import { create } from 'zustand';
import { Notification } from '../types';

interface NotificationState {
  notifications: Notification[];
  unreadCount: number;
  isLoading: boolean;
  error: string | null;
  fetchNotifications: () => Promise<void>;
  markAsRead: (id: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
  addNotification: (notification: Omit<Notification, 'id' | 'date' | 'read'>) => void;
}

// Mock notification data
const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Alerta de Material',
    message: 'Estoque de Cimento está abaixo do limite mínimo',
    type: 'warning',
    read: false,
    date: new Date(Date.now() - 1000 * 60 * 30).toISOString() // 30 minutes ago
  },
  {
    id: '2',
    title: 'Atualização de Projeto',
    message: 'O projeto "Edifício Horizonte" foi atualizado',
    type: 'info',
    read: false,
    date: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString() // 2 hours ago
  },
  {
    id: '3',
    title: 'Novo Trabalhador',
    message: 'Um novo trabalhador foi adicionado ao projeto "Ponte Rio Verde"',
    type: 'info',
    read: true,
    date: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString() // 1 day ago
  }
];

export const useNotificationStore = create<NotificationState>((set, get) => ({
  notifications: [],
  unreadCount: 0,
  isLoading: false,
  error: null,
  
  fetchNotifications: async () => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const unreadCount = mockNotifications.filter(n => !n.read).length;
      set({ 
        notifications: mockNotifications, 
        unreadCount,
        isLoading: false 
      });
    } catch (error) {
      set({ error: 'Erro ao carregar notificações', isLoading: false });
    }
  },
  
  markAsRead: async (id) => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      set(state => {
        const updatedNotifications = state.notifications.map(notification => 
          notification.id === id ? { ...notification, read: true } : notification
        );
        
        const unreadCount = updatedNotifications.filter(n => !n.read).length;
        
        return {
          notifications: updatedNotifications,
          unreadCount,
          isLoading: false
        };
      });
    } catch (error) {
      set({ error: 'Erro ao marcar notificação como lida', isLoading: false });
    }
  },
  
  markAllAsRead: async () => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      set(state => ({
        notifications: state.notifications.map(notification => ({ ...notification, read: true })),
        unreadCount: 0,
        isLoading: false
      }));
    } catch (error) {
      set({ error: 'Erro ao marcar todas notificações como lidas', isLoading: false });
    }
  },
  
  addNotification: (notification) => {
    const newNotification: Notification = {
      ...notification,
      id: Math.random().toString(36).substring(2, 9),
      date: new Date().toISOString(),
      read: false
    };
    
    set(state => ({
      notifications: [newNotification, ...state.notifications],
      unreadCount: state.unreadCount + 1
    }));
  }
}));