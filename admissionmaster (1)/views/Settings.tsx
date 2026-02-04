
import React from 'react';
import { User, Shield, Bell, LogOut, ChevronRight, GraduationCap } from 'lucide-react';
import Button from '../components/Button';

interface SettingsProps {
  onLogout: () => void;
}

const Settings: React.FC<SettingsProps> = ({ onLogout }) => {
  const menuItems = [
    { icon: User, label: 'Thông tin tài khoản', sub: 'Cập nhật thông tin cá nhân' },
    { icon: Shield, label: 'Bảo mật & Mật khẩu', sub: 'Thay đổi mật khẩu, xác thực' },
    { icon: Bell, label: 'Thông báo', sub: 'Quản lý thông báo deadline' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-8">Cài đặt</h1>

      <div className="bg-card border border-border rounded-custom p-6 mb-8 flex items-center gap-5">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cta to-ctaSecondary flex items-center justify-center text-primary font-bold text-2xl shadow-lg shadow-cta/20">
          A
        </div>
        <div>
          <h2 className="text-xl font-bold">Nguyễn Văn A</h2>
          <p className="text-textSecondary text-sm">Học sinh lớp 12A1</p>
        </div>
      </div>

      <div className="space-y-4 mb-10">
        {menuItems.map((item) => (
          <button key={item.label} className="w-full bg-card border border-border p-4 rounded-custom flex items-center justify-between group hover:border-cta/30 transition-all">
            <div className="flex items-center gap-4 text-left">
              <div className="p-2.5 bg-white/5 rounded-xl text-textSecondary group-hover:text-cta transition-colors">
                <item.icon size={22} />
              </div>
              <div>
                <p className="font-semibold text-sm">{item.label}</p>
                <p className="text-[11px] text-textSecondary uppercase tracking-wider font-bold">{item.sub}</p>
              </div>
            </div>
            <ChevronRight className="text-placeholder" size={20} />
          </button>
        ))}
      </div>

      <div className="bg-cta/5 border border-cta/20 rounded-custom p-6 mb-8 flex items-center gap-4">
        <GraduationCap className="text-cta shrink-0" size={32} />
        <div className="flex-1">
          <h4 className="font-bold text-sm">Gói Premium</h4>
          <p className="text-xs text-textSecondary">Sử dụng AI tư vấn không giới hạn và tính năng nhắc hẹn thông minh.</p>
        </div>
        <button className="text-cta text-xs font-bold uppercase tracking-widest bg-cta/10 px-3 py-2 rounded-lg">Nâng cấp</button>
      </div>

      <Button variant="danger" fullWidth onClick={onLogout} className="mt-auto">
        <LogOut size={20} /> Đăng xuất
      </Button>

      <div className="mt-8 text-center">
        <p className="text-[10px] text-placeholder uppercase font-bold tracking-[0.2em]">AdmissionMaster v1.0.0</p>
        <p className="text-[10px] text-placeholder mt-1">Made with ❤️ for Students</p>
      </div>
    </div>
  );
};

export default Settings;
