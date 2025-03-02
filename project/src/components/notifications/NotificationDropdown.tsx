import React from 'react';
import { Notification } from '../../types';
import { formatDistanceToNow } from '../../utils/dateUtils';
import { CheckCircle, AlertCircle, Info, XCircle } from 'lucide-react';

interface NotificationDropdownProps {
  notifications: Notification[];
  onClose: () => void;
  onMarkAsRead: (id: string) => Promise<void>;
  onMarkAllAsRead: () => Promise<void>;
}

const NotificationDropdown: React.FC<NotificationDropdownProps> = ({
  notifications,
  onClose,
  onMarkAsRead,
  onMarkAllAsRead
}) => {
  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'info':
        return <Info size={16} className="text-blue-500" />;
      case 'success':
        return <CheckCircle size={16} className="text-green-500" />;
      case 'warning':
        return <AlertCircle size={16} className="text-yellow-500" />;
      case 'error':
        return <XCircle size={16} className="text-red-500" />;
    }
  };
  
  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-50">
      <div className="p-3 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-sm font-medium">Notificações</h3>
        <button
          onClick={onMarkAllAsRead}
          className="text-xs text-blue-600 hover:text-blue-800"
        >
          Marcar todas como lidas
        </button>
      </div>
      
      <div className="max-h-96 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            Nenhuma notificação
          </div>
        ) : (
          <ul>
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className={`border-b border-gray-100 last:border-b-0 ${
                  !notification.read ? 'bg-blue-50' : ''
                }`}
              >
                <button
                  onClick={() => onMarkAsRead(notification.id)}
                  className="w-full text-left p-3 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      {getIcon(notification.type)}
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {notification.title}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatDistanceToNow(new Date(notification.date))}
                      </p>
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="p-2 border-t border-gray-200 text-center">
        <button
          onClick={onClose}
          className="text-sm text-gray-600 hover:text-gray-800"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default NotificationDropdown;