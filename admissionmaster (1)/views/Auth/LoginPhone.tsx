
import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import Button from '../../components/Button';
import Input from '../../components/Input';

interface LoginPhoneProps {
  onBack: () => void;
  onSent: () => void;
}

const LoginPhone: React.FC<LoginPhoneProps> = ({ onBack, onSent }) => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSend = () => {
    if (!phone.match(/^(0|84)(3|5|7|8|9)([0-9]{8})$/)) {
      setError('Số điện thoại không hợp lệ');
      return;
    }
    setError('');
    onSent();
  };

  return (
    <div className="p-6">
      <button onClick={onBack} className="mb-8 p-2 -ml-2 text-textSecondary hover:text-white">
        <ChevronLeft size={28} />
      </button>
      
      <h2 className="text-2xl font-bold mb-2">Nhập số điện thoại</h2>
      <p className="text-textSecondary mb-8">Chúng tôi sẽ gửi mã OTP để xác thực tài khoản của bạn</p>

      <Input 
        label="Số điện thoại"
        placeholder="09xx xxx xxx"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        error={error}
        className="mb-8"
      />

      <Button fullWidth onClick={handleSend} disabled={!phone}>
        Gửi mã OTP
      </Button>
    </div>
  );
};

export default LoginPhone;
