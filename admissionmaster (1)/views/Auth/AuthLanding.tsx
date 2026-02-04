
import React from 'react';
import { GraduationCap, Phone, Mail, Chrome } from 'lucide-react';
import Button from '../../components/Button';

interface AuthLandingProps {
  onPhone: () => void;
  onEmail: () => void;
  onSignup: () => void;
  onLoginSuccess: () => void;
}

const AuthLanding: React.FC<AuthLandingProps> = ({ onPhone, onEmail, onSignup, onLoginSuccess }) => {
  return (
    <div className="p-8 h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="bg-card p-4 rounded-2xl border border-border mb-8">
           <GraduationCap size={48} className="text-cta" />
        </div>
        <h2 className="text-3xl font-bold mb-3">Chào mừng bạn</h2>
        <p className="text-textSecondary text-center text-lg mb-12">
          Quản lý hồ sơ tuyển sinh của bạn một cách khoa học
        </p>

        <div className="w-full flex flex-col gap-4">
          <Button fullWidth onClick={onPhone}>
            <Phone size={20} /> Tiếp tục bằng Số điện thoại
          </Button>
          
          <Button variant="outline" fullWidth onClick={onLoginSuccess}>
            <Chrome size={20} /> Tiếp tục bằng Google
          </Button>

          <Button variant="ghost" fullWidth onClick={onEmail}>
            <Mail size={20} /> Đăng nhập bằng Email
          </Button>
        </div>
      </div>

      <div className="text-center mt-8">
        <span className="text-textSecondary">Chưa có tài khoản? </span>
        <button onClick={onSignup} className="text-cta font-semibold">Đăng ký</button>
      </div>
    </div>
  );
};

export default AuthLanding;
