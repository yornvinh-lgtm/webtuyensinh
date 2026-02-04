
import React, { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import Button from '../../components/Button';

interface LoginOTPProps {
  onBack: () => void;
  onVerify: () => void;
}

const LoginOTP: React.FC<LoginOTPProps> = ({ onBack, onVerify }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const t = setInterval(() => setTimer(prev => prev > 0 ? prev - 1 : 0), 1000);
    return () => clearInterval(t);
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div className="p-6">
      <button onClick={onBack} className="mb-8 p-2 -ml-2 text-textSecondary hover:text-white">
        <ChevronLeft size={28} />
      </button>
      
      <h2 className="text-2xl font-bold mb-2">Nhập mã xác thực</h2>
      <p className="text-textSecondary mb-8">Mã OTP đã được gửi đến số điện thoại của bạn</p>

      <div className="flex justify-between gap-2 mb-8">
        {otp.map((digit, i) => (
          <input
            key={i}
            id={`otp-${i}`}
            type="number"
            value={digit}
            onChange={(e) => handleChange(i, e.target.value)}
            className="w-12 h-14 bg-card border border-border text-center text-xl font-bold rounded-custom focus:border-cta outline-none transition-colors"
          />
        ))}
      </div>

      <div className="text-center mb-8">
        <p className="text-textSecondary text-sm">
          Gửi lại mã sau <span className="text-cta font-medium">{timer}s</span>
        </p>
      </div>

      <Button fullWidth onClick={onVerify} disabled={otp.some(d => !d)}>
        Xác nhận
      </Button>
    </div>
  );
};

export default LoginOTP;
