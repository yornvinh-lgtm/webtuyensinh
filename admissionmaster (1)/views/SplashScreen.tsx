
import React from 'react';
import { GraduationCap } from 'lucide-react';

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-primary flex flex-col items-center justify-center animate-pulse">
      <div className="bg-cta p-6 rounded-[24px] mb-6 shadow-[0_0_40px_rgba(0,230,118,0.2)]">
        <GraduationCap size={64} className="text-primary" />
      </div>
      <h1 className="text-3xl font-bold tracking-tight mb-2">AdmissionMaster</h1>
      <p className="text-textSecondary text-center max-w-[240px] px-4">
        Quản lý hồ sơ tuyển sinh – không bỏ sót hạn
      </p>
    </div>
  );
};

export default SplashScreen;
