import React, { useState } from 'react';
import { useAuthStore } from '../store/authStore';
import { Card, CardHeader, CardBody } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Alert from '../components/ui/Alert';
import Tabs from '../components/ui/Tabs';
import { User, Lock, Shield, Database, Bell } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const { user } = useAuthStore();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  
  // Profile settings
  const [profileForm, setProfileForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    role: user?.role || ''
  });
  
  // Security settings
  const [securityForm, setSecurityForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  // Notification settings
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyReports: true,
    lowStockAlerts: true
  });
  
  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSuccessMessage('Perfil atualizado com sucesso!');
      setTimeout(() => setSuccessMessage(null), 3000);
    }, 500);
  };
  
  const handleSecuritySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSuccessMessage('Senha atualizada com sucesso!');
      setSecurityForm({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      setTimeout(() => setSuccessMessage(null), 3000);
    }, 500);
  };
  
  const handleNotificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSuccessMessage('Configurações de notificação atualizadas com sucesso!');
      setTimeout(() => setSuccessMessage(null), 3000);
    }, 500);
  };
  
  const tabs = [
    {
      id: 'profile',
      label: 'Perfil',
      content: (
        <Card>
          <CardHeader>
            <h3 className="text-lg font-medium">Informações do Perfil</h3>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleProfileSubmit} className="space-y-4">
              <div className="flex items-center space-x-4 mb-6">
                {user?.avatar ? (
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="w-16 h-16 rounded-full"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-xl font-medium">{user?.name.charAt(0)}</span>
                  </div>
                )}
                <div>
                  <Button variant="outline" size="sm">
                    Alterar foto
                  </Button>
                </div>
              </div>
              
              <Input
                label="Nome"
                value={profileForm.name}
                onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                fullWidth
              />
              
              <Input
                label="Email"
                type="email"
                value={profileForm.email}
                onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                fullWidth
              />
              
              <Input
                label="Função"
                value={profileForm.role === 'admin' ? 'Administrador' : profileForm.role}
                disabled
                fullWidth
              />
              
              <div className="pt-4">
                <Button type="submit" variant="primary">
                  Salvar Alterações
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      )
    },
    {
      id: 'security',
      label: 'Segurança',
      content: (
        <Card>
          <CardHeader>
            <h3 className="text-lg font-medium">Configurações de Segurança</h3>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSecuritySubmit} className="space-y-4">
              <Input
                label="Senha Atual"
                type="password"
                value={securityForm.currentPassword}
                onChange={(e) => setSecurityForm({ ...securityForm, currentPassword: e.target.value })}
                fullWidth
              />
              
              <Input
                label="Nova Senha"
                type="password"
                value={securityForm.newPassword}
                onChange={(e) => setSecurityForm({ ...securityForm, newPassword: e.target.value })}
                fullWidth
              />
              
              <Input
                label="Confirmar Nova Senha"
                type="password"
                value={securityForm.confirmPassword}
                onChange={(e) => setSecurityForm({ ...securityForm, confirmPassword: e.target.value })}
                fullWidth
              />
              
              <div className="pt-4">
                <Button type="submit" variant="primary">
                  Atualizar Senha
                </Button>
              </div>
              
              <div className="mt-8 border-t pt-6">
                <h4 className="text-md font-medium mb-4">Autenticação de Dois Fatores</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Adicione uma camada extra de segurança à sua conta. Quando a autenticação de dois fatores estiver ativada, você precisará fornecer um código de verificação além da senha.
                </p>
                <Button variant="outline">
                  Ativar Autenticação de Dois Fatores
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      )
    },
    {
      id: 'notifications',
      label: 'Notificações',
      content: (
        <Card>
          <CardHeader>
            <h3 className="text-lg font-medium">Preferências de Notificação</h3>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleNotificationSubmit} className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium">Notificações por Email</h4>
                    <p className="text-sm text-gray-500">Receba atualizações por email</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={notificationSettings.emailNotifications}
                      onChange={() => setNotificationSettings({
                        ...notificationSettings,
                        emailNotifications: !notificationSettings.emailNotifications
                      })}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium">Notificações Push</h4>
                    <p className="text-sm text-gray-500">Receba notificações no navegador</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={notificationSettings.pushNotifications}
                      onChange={() => setNotificationSettings({
                        ...notificationSettings,
                        pushNotifications: !notificationSettings.pushNotifications
                      })}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium">Relatórios Semanais</h4>
                    <p className="text-sm text-gray-500">Receba um resumo semanal das atividades</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={notificationSettings.weeklyReports}
                      onChange={() => setNotificationSettings({
                        ...notificationSettings,
                        weeklyReports: !notificationSettings.weeklyReports
                      })}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium">Alertas de Estoque Baixo</h4>
                    <p className="text-sm text-gray-500">Seja notificado quando o estoque estiver baixo</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={notificationSettings.lowStockAlerts}
                      onChange={() => setNotificationSettings({
                        ...notificationSettings,
                        lowStockAlerts: !notificationSettings.lowStockAlerts
                      })}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
              
              <div className="pt-4">
                <Button type="submit" variant="primary">
                  Salvar Preferências
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      )
    },
    {
      id: 'backup',
      label: 'Backup',
      content: (
        <Card>
          <CardHeader>
            <h3 className="text-lg font-medium">Backup e Restauração</h3>
          </CardHeader>
          <CardBody>
            <div className="space-y-6">
              <div>
                <h4 className="text-md font-medium mb-2">Backup Manual</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Faça o download de um backup completo do banco de dados.
                </p>
                <Button variant="primary" leftIcon={<Database size={18} />}>
                  Fazer Backup Agora
                </Button>
              </div>
              
              <div className="border-t pt-6">
                <h4 className="text-md font-medium mb-2">Backup Automático</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Configure backups automáticos para garantir a segurança dos seus dados.
                </p>
                <div className="flex items-center space-x-4 mb-4">
                  <input
                    type="radio"
                    id="daily"
                    name="backup-frequency"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    defaultChecked
                  />
                  <label htmlFor="daily" className="text-sm text-gray-700">Diário</label>
                  
                  <input
                    type="radio"
                    id="weekly"
                    name="backup-frequency"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label htmlFor="weekly" className="text-sm text-gray-700">Semanal</label>
                  
                  <input
                    type="radio"
                    id="monthly"
                    name="backup-frequency"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label htmlFor="monthly" className="text-sm text-gray-700">Mensal</label>
                </div>
                <Button variant="outline">
                  Salvar Configurações
                </Button>
              </div>
              
              <div className="border-t pt-6">
                <h4 className="text-md font-medium mb-2">Restaurar Backup</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Restaure o sistema a partir de um backup anterior.
                </p>
                <div className="mb-4">
                  <input
                    type="file"
                    className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-medium
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
                  />
                </div>
                <Button variant="outline" disabled>
                  Restaurar
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      )
    }
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Configurações</h1>
      </div>
      
      {successMessage && (
        <Alert
          variant="success"
          message={successMessage}
          onClose={() => setSuccessMessage(null)}
        />
      )}
      
      <Tabs tabs={tabs} />
    </div>
  );
};

export default SettingsPage;