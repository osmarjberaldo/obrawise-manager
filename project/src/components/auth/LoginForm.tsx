import React, { useState } from 'react';
import { useAuthStore } from '../../store/authStore';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Alert from '../ui/Alert';
import { Mail, Lock, AlertCircle } from 'lucide-react';

interface LoginFormProps {
  onForgotPassword: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onForgotPassword }) => {
  const { login, isLoading, error } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert
          variant="error"
          message={error}
          title="Erro de autenticação"
        />
      )}
      
      <div>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          required
          fullWidth
          leftIcon={<Mail size={18} className="text-gray-500" />}
        />
      </div>
      
      <div>
        <Input
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
          required
          fullWidth
          leftIcon={<Lock size={18} className="text-gray-500" />}
        />
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
            Lembrar-me
          </label>
        </div>
        
        <button
          type="button"
          onClick={onForgotPassword}
          className="text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          Esqueceu sua senha?
        </button>
      </div>
      
      <div>
        <Button
          type="submit"
          variant="primary"
          fullWidth
          isLoading={isLoading}
        >
          Entrar
        </Button>
      </div>
      
      <div className="mt-4 text-center">
        <div className="flex items-center justify-center text-sm text-gray-600">
          <AlertCircle size={16} className="mr-1" />
          <span>Credenciais de teste: teste@test.com.br / 123456</span>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;