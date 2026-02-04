
import React, { useState } from 'react';
import { ChevronLeft, CheckCircle2 } from 'lucide-react';
import Button from '../../components/Button';
import Input from '../../components/Input';

interface ForgotPasswordProps {
  onBack: () => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onBack }) => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  if (success) {
    return (
      <div className="p-6 h-screen flex flex-col items-center justify-center text-center">
        <CheckCircle2 size={80} className="text-cta mb-6" />
        <h2 className="text-2xl font-bold mb-4">Gửi yêu cầu thành công</h2>
        <p className="text-textSecondary mb-8 px-4">
          Một liên kết đặt lại mật khẩu đã được gửi đến <span className="text-white">{email}</span>. Vui lòng kiểm tra hộp thư.
        </p>
        <Button fullWidth onClick={onBack}>Quay lại đăng nhập</Button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <button onClick={onBack} className="mb-8 p-2 -ml-2 text-textSecondary hover:text-white">
        <ChevronLeft size={28} />
      </button>
      
      <h2 className="text-2xl font-bold mb-2">Quên mật khẩu?</h2>
      <p className="text-textSecondary mb-8">Nhập email của bạn để nhận hướng dẫn khôi phục mật khẩu</p>

      <Input 
        label="Email"
        placeholder="example@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-8"
      />

      <Button fullWidth onClick={() => setSuccess(true)} disabled={!email}>
        Gửi link khôi phục
      </Button>
    </div>
  );
};

export default ForgotPassword;
