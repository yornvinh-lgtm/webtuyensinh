
import React from 'react';
import { 
  Bell, 
  CircleCheck, 
  Clock, 
  AlertTriangle, 
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { MOCK_DOSSIERS } from '../constants';
import { Dossier, DossierStatus } from '../types';

interface DashboardProps {
  onSelectDossier: (d: Dossier) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onSelectDossier }) => {
  const getStatusIcon = (status: DossierStatus) => {
    switch (status) {
      case DossierStatus.COMPLETED: return <CircleCheck size={18} className="text-cta" />;
      case DossierStatus.WARNING: return <AlertTriangle size={18} className="text-yellow-500" />;
      default: return <Clock size={18} className="text-error" />;
    }
  };

  return (
    <div className="p-6 animate-in fade-in duration-500">
      <header className="flex justify-between items-center mb-8">
        <div>
          <p className="text-textSecondary text-sm">Chào mừng quay lại,</p>
          <h1 className="text-xl font-bold">Nguyễn Văn A</h1>
        </div>
        <button className="bg-card p-2.5 rounded-xl border border-border relative">
          <Bell size={22} className="text-textSecondary" />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-error border-2 border-primary rounded-full" />
        </button>
      </header>

      {/* Card 1 - Progress Overall */}
      <section className="bg-card border border-border rounded-[20px] p-6 mb-8 relative overflow-hidden">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-cta/10 rounded-lg text-cta">
            <TrendingUp size={20} />
          </div>
          <h3 className="font-bold text-lg">Tiến độ tổng quát</h3>
        </div>
        <div className="flex items-end gap-3 mb-2">
          <span className="text-4xl font-bold text-cta">65%</span>
          <span className="text-textSecondary text-sm pb-1">hoàn thành hồ sơ</span>
        </div>
        <div className="h-2.5 bg-primary rounded-full overflow-hidden">
          <div className="h-full bg-cta rounded-full" style={{ width: '65%' }} />
        </div>
      </section>

      {/* Card 2 - Dossiers List */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4 px-1">
          <h3 className="font-bold text-lg">Hồ sơ đang theo dõi</h3>
          <button className="text-cta text-sm font-semibold">Xem tất cả</button>
        </div>
        <div className="space-y-4">
          {MOCK_DOSSIERS.map((d) => (
            <button 
              key={d.id}
              onClick={() => onSelectDossier(d)}
              className="w-full bg-card border border-border p-5 rounded-custom flex items-center justify-between group hover:border-cta/50 transition-all"
            >
              <div className="flex-1 text-left">
                <h4 className="font-bold truncate pr-4">{d.schoolName}</h4>
                <p className="text-textSecondary text-sm mb-3">{d.major} • {d.method}</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-primary rounded-full max-w-[120px]">
                    <div className="h-full bg-cta rounded-full" style={{ width: `${d.progress}%` }} />
                  </div>
                  <span className="text-[10px] font-bold text-cta">{d.progress}%</span>
                </div>
              </div>
              <ChevronRight className="text-placeholder group-hover:text-cta transition-transform group-hover:translate-x-1" />
            </button>
          ))}
        </div>
      </section>

      {/* Card 3 - Deadline warnings */}
      <section>
        <h3 className="font-bold text-lg mb-4 px-1">Deadline gần nhất</h3>
        <div className="bg-[#1A1A1A] border-l-4 border-error p-4 rounded-r-custom rounded-l-sm flex items-center gap-4">
          <div className="bg-error/10 p-3 rounded-xl">
            <Clock size={24} className="text-error" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-sm">Nộp học bạ Bách Khoa</h4>
            <p className="text-textSecondary text-xs">Hết hạn trong <span className="text-error font-bold">3 ngày nữa</span></p>
          </div>
          <button className="bg-white/5 p-2 rounded-lg text-placeholder">
            <ChevronRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
