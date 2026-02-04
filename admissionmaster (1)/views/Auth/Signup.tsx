
import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import Button from '../../components/Button';
import Input from '../../components/Input';

interface SignupProps {
  onBack: () => void;
  onSignup: () => void;
}

const Signup: React.FC<SignupProps> = ({ onBack, onSignup }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirm: ''
  });

  return (
    <div className="p-6">
      <button onClick={onBack} className="mb-6 p-2 -ml-2 text-textSecondary hover:text-white">
        <ChevronLeft size={28} />
      </button>
      
      <h2 className="text-2xl font-bold mb-2">Tạo tài khoản mới</h2>
      <p className="text-textSecondary mb-6">Bắt đầu hành trình chinh phục đại học mơ ước</p>

      <div className="space-y-4 mb-6">
        <Input label="Họ và tên" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} placeholder="Nguyễn Văn A" />
        <Input label="Email / SĐT" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="example@gmail.com" />
        <Input label="Mật khẩu" type="password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} placeholder="••••••••" />
        <Input label="Xác nhận mật khẩu" type="password" value={form.confirm} onChange={(e) => setForm({...form, confirm: e.target.value})} placeholder="••••••••" />
      </div>

      <div className="flex gap-3 mb-8">
        <input type="checkbox" className="mt-1 accent-cta h-4 w-4" />
        <p className="text-sm text-textSecondary">
          Tôi đồng ý với <span className="text-white">Điều khoản sử dụng</span> và <span className="text-white">Chính sách bảo mật</span>.
        </p>
      </div>

      <Button fullWidth onClick={onSignup}>
        Tạo tài khoản
      </Button>
    </div>
  );
};

export default Signup;
