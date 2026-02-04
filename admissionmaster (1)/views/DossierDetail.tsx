
import React from 'react';
import { ChevronLeft, Info, FileText, CheckCircle2, AlertCircle, XCircle } from 'lucide-react';
import { Dossier, ChecklistItem, DossierStatus } from '../types';

interface DossierDetailProps {
  dossier: Dossier;
  onBack: () => void;
  onSelectItem: (item: ChecklistItem) => void;
}

const DossierDetail: React.FC<DossierDetailProps> = ({ dossier, onBack, onSelectItem }) => {
  const getStatusDisplay = (status: DossierStatus) => {
    switch (status) {
      case DossierStatus.COMPLETED: return { icon: <CheckCircle2 size={18} />, color: 'text-cta', label: 'Đã nộp' };
      case DossierStatus.WARNING: return { icon: <AlertCircle size={18} />, color: 'text-yellow-500', label: 'Cần bổ sung' };
      case DossierStatus.MISSING: return { icon: <XCircle size={18} />, color: 'text-error', label: 'Thiếu' };
      default: return { icon: <XCircle size={18} />, color: 'text-placeholder', label: 'N/A' };
    }
  };

  return (
    <div className="animate-in slide-in-from-right duration-300">
      <div className="p-6 border-b border-border sticky top-0 bg-primary/80 backdrop-blur-md z-10 flex items-center">
        <button onClick={onBack} className="p-2 -ml-2 text-textSecondary hover:text-white">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-lg font-bold ml-2 truncate">{dossier.schoolName}</h2>
      </div>

      <div className="p-6">
        {/* Info Card */}
        <div className="bg-card border border-border rounded-custom p-5 mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-textSecondary text-xs uppercase tracking-widest font-bold mb-1">Ngành học</p>
              <h3 className="text-xl font-bold">{dossier.major}</h3>
            </div>
            <div className="bg-cta/10 text-cta p-2 rounded-lg">
              <Info size={20} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-textSecondary text-[10px] uppercase font-bold">Phương thức</p>
              <p className="text-sm font-medium">{dossier.method}</p>
            </div>
            <div>
              <p className="text-textSecondary text-[10px] uppercase font-bold">Deadline</p>
              <p className="text-sm font-medium text-error">{dossier.deadline}</p>
            </div>
          </div>
          <div className="mt-5 pt-5 border-t border-border">
             <div className="flex justify-between items-center mb-2">
               <span className="text-sm font-bold">Tiến độ hoàn thành</span>
               <span className="text-sm font-bold text-cta">{dossier.progress}%</span>
             </div>
             <div className="h-2.5 bg-primary rounded-full overflow-hidden">
                <div className="h-full bg-cta" style={{ width: `${dossier.progress}%` }} />
             </div>
          </div>
        </div>

        {/* Checklist */}
        <h3 className="font-bold text-lg mb-4">Danh sách hồ sơ</h3>
        <div className="bg-card border border-border rounded-custom overflow-hidden">
          {dossier.items.map((item, idx) => {
            const status = getStatusDisplay(item.status);
            return (
              <button 
                key={item.id}
                onClick={() => onSelectItem(item)}
                className={`w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors ${idx !== dossier.items.length - 1 ? 'border-b border-border' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${status.color.replace('text-', 'bg-')}/10 ${status.color}`}>
                    <FileText size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className={`text-[10px] uppercase font-bold ${status.color}`}>{status.label}</p>
                  </div>
                </div>
                <ChevronLeft className="rotate-180 text-placeholder" size={16} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DossierDetail;
