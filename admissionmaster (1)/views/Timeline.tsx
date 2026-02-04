
import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { MOCK_DOSSIERS } from '../constants';
import { Dossier } from '../types';

interface TimelineProps {
  onSelectDossier: (d: Dossier) => void;
}

const Timeline: React.FC<TimelineProps> = ({ onSelectDossier }) => {
  const dates = [12, 13, 14, 15, 16, 17, 18];
  const activeDate = 15;

  return (
    <div className="p-6 pb-20">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Lịch tuyển sinh</h1>
        <div className="flex items-center gap-2">
          <button className="p-2 bg-card rounded-lg border border-border"><ChevronLeft size={16}/></button>
          <span className="text-sm font-bold">Tháng 6, 2024</span>
          <button className="p-2 bg-card rounded-lg border border-border"><ChevronRight size={16}/></button>
        </div>
      </header>

      {/* Mini Calendar Row */}
      <div className="flex justify-between mb-10 overflow-x-auto pb-2 gap-2">
        {dates.map(d => (
          <div 
            key={d} 
            className={`flex flex-col items-center p-3 rounded-2xl min-w-[50px] transition-all cursor-pointer ${d === activeDate ? 'bg-cta text-primary scale-110 shadow-lg shadow-cta/20' : 'bg-card border border-border'}`}
          >
            <span className="text-[10px] uppercase font-bold opacity-60 mb-1">Th {d > 14 ? '2' : '7'}</span>
            <span className="text-lg font-bold">{d}</span>
            {d === 15 && <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1" />}
          </div>
        ))}
      </div>

      <div className="space-y-8 relative">
        <div className="absolute left-[20px] top-4 bottom-4 w-px bg-border" />
        
        {MOCK_DOSSIERS.map((d, i) => (
          <div key={d.id} className="flex gap-6 relative group">
            <div className={`z-10 w-10 h-10 rounded-full border-4 border-primary flex items-center justify-center shrink-0 ${i === 0 ? 'bg-error text-white' : 'bg-cta text-primary'}`}>
              <Clock size={20} />
            </div>
            <button 
              onClick={() => onSelectDossier(d)}
              className="flex-1 bg-card border border-border p-5 rounded-[20px] text-left hover:border-cta/50 transition-all"
            >
              <div className="flex justify-between items-start mb-2">
                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${i === 0 ? 'bg-error/20 text-error border border-error/30' : 'bg-cta/20 text-cta border border-cta/30'}`}>
                  {i === 0 ? 'Gần hết hạn' : 'Sắp tới'}
                </span>
                <span className="text-xs text-textSecondary font-medium">{d.deadline}</span>
              </div>
              <h4 className="font-bold text-lg mb-1">{d.schoolName}</h4>
              <p className="text-sm text-textSecondary mb-4">Hoàn thành hồ sơ: {d.major}</p>
              
              <div className="flex items-center gap-4 text-xs font-medium text-placeholder">
                <div className="flex items-center gap-1">
                  <MapPin size={14} /> <span>Hồ sơ giấy</span>
                </div>
                <div className="flex items-center gap-1">
                  <CalendarIcon size={14} /> <span>15:00 PM</span>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
