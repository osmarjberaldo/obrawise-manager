import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  HardHat, 
  Users, 
  Package, 
  Store, 
  Settings, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

interface SidebarProps {
  isMobile: boolean;
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobile, isOpen, onToggle }) => {
  const { logout, user } = useAuthStore();
  
  const navItems = [
    { path: '/', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/projects', icon: <HardHat size={20} />, label: 'Obras' },
    { path: '/workers', icon: <Users size={20} />, label: 'Equipe' },
    { path: '/materials', icon: <Package size={20} />, label: 'Materiais' },
    { path: '/suppliers', icon: <Store size={20} />, label: 'Fornecedores' },
    { path: '/settings', icon: <Settings size={20} />, label: 'Configurações' }
  ];
  
  const sidebarClasses = `
    bg-gray-900 text-white flex flex-col h-full
    ${isMobile ? 'fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out' : 'w-64'}
    ${isMobile && !isOpen ? '-translate-x-full' : ''}
  `;
  
  return (
    <>
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={onToggle}
        />
      )}
      
      <aside className={sidebarClasses}>
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h1 className="text-xl font-bold">Gestão de Obras</h1>
          {isMobile && (
            <button onClick={onToggle} className="text-gray-400 hover:text-white">
              <X size={24} />
            </button>
          )}
        </div>
        
        {user && (
          <div className="flex items-center p-4 border-b border-gray-800">
            {user.avatar ? (
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-10 h-10 rounded-full mr-3"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                <span className="text-lg font-medium">{user.name.charAt(0)}</span>
              </div>
            )}
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-400">{user.role === 'admin' ? 'Administrador' : user.role}</p>
            </div>
          </div>
        )}
        
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `
                    flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white
                    ${isActive ? 'bg-gray-800 text-white' : ''}
                  `}
                  onClick={isMobile ? onToggle : undefined}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-800">
          <button
            onClick={logout}
            className="flex items-center w-full px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded"
          >
            <LogOut size={20} className="mr-3" />
            <span>Sair</span>
          </button>
        </div>
      </aside>
      
      {isMobile && (
        <button
          onClick={onToggle}
          className={`fixed bottom-4 right-4 z-30 p-3 bg-blue-600 text-white rounded-full shadow-lg ${isOpen ? 'hidden' : ''}`}
        >
          <Menu size={24} />
        </button>
      )}
    </>
  );
};

export default Sidebar;