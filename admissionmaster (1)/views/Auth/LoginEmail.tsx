
import React, { useState } from 'react';
import { ChevronLeft, Lock, Mail } from 'lucide-react';
import Button from '../../components/Button';
import Input from '../../components/Input';

interface LoginEmailProps {
  onBack: () => void;
  onLogin: () => void;
  onForgot: () => void;
}

const LoginEmail: React.FC<LoginEmailProps> = ({ onBack, onLogin, onForgot }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="p-6">
      <button onClick={onBack} className="mb-8 p-2 -ml-2 text-textSecondary hover:text-white">
        <ChevronLeft size={28} />
      </button>
      
      <h2 className="text-2xl font-bold mb-2">Đăng nhập bằng Email</h2>
      <p className="text-textSecondary mb-8">Nhập thông tin tài khoản của bạn</p>

      <div className="space-y-4 mb-8">
        <Input 
          label="Email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
          label="Mật khẩu"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="text-right mb-8">
        <button onClick={onForgot} className="text-cta text-sm font-medium">Quên mật khẩu?</button>
      </div>

      <Button fullWidth onClick={onLogin} disabled={!email || !password}>
        Đăng nhập
      </Button>
    </div>
  );
};

export default LoginEmail;
