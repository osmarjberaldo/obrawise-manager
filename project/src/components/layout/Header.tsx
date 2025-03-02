import React from 'react';
import { Bell, Menu, Search } from 'lucide-react';
import { useNotificationStore } from '../../store/notificationStore';
import NotificationDropdown from '../notifications/NotificationDropdown';

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotificationStore();
  const [showNotifications, setShowNotifications] = React.useState(false);
  
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };
  
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center px-4 sticky top-0 z-10">
      <button
        onClick={onToggleSidebar}
        className="text-gray-500 hover:text-gray-700 lg:hidden mr-4"
      >
        <Menu size={24} />
      </button>
      
      <div className="flex-1 flex items-center">
        <div className="max-w-lg w-full lg:max-w-xs relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>
      
      <div className="ml-4 flex items-center">
        <div className="relative">
          <button
            onClick={toggleNotifications}
            className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <span className="sr-only">Ver notificações</span>
            <Bell size={24} />
            {unreadCount > 0 && (
              <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-red-500 text-white text-xs font-medium flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>
          
          {showNotifications && (
            <NotificationDropdown
              notifications={notifications}
              onClose={() => setShowNotifications(false)}
              onMarkAsRead={markAsRead}
              onMarkAllAsRead={markAllAsRead}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;