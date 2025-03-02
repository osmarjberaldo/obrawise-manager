import React, { useState } from 'react';
import { useAuthStore } from '../../store/authStore';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Alert from '../ui/Alert';
import { Mail, ArrowLeft } from 'lucide-react';

interface ForgotPasswordFormProps {
  onBack: () => void;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ onBack }) => {
  const { resetPassword, isLoading, error } = useAuthStore();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      setSubmitted(true);
    } catch (error) {
      // Error is handled by the store
    }
  };
  
  if (submitted) {
    return (
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
          <Mail size={24} className="text-green-600" />
        </div>
        <h3 className="text-lg font-medium text-gray-900">Verifique seu email</h3>
        <p className="mt-2 text-sm text-gray-600">
          Enviamos um link para redefinir sua senha para {email}. Verifique sua caixa de entrada.
        </p>
        <div className="mt-6">
          <Button variant="outline" onClick={onBack} leftIcon={<ArrowLeft size={16} />}>
            Voltar para o login
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-4">
        <h3 className="text-lg font-medium text-gray-900">Esqueceu sua senha?</h3>
        <p className="mt-1 text-sm text-gray-600">
          Digite seu email e enviaremos um link para redefinir sua senha.
        </p>
      </div>
      
      {error && (
        <Alert
          variant="error"
          message={error}
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
      
      <div className="flex space-x-4">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          leftIcon={<ArrowLeft size={16} />}
        >
          Voltar
        </Button>
        
        <Button
          type="submit"
          variant="primary"
          isLoading={isLoading}
          fullWidth
        >
          Enviar link
        </Button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;