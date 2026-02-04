
import React from 'react';
import { Home, Database, Calendar, MessageSquare, Settings } from 'lucide-react';
import { ViewState } from '../types';

interface BottomNavProps {
  activeView: ViewState;
  setView: (view: ViewState) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeView, setView }) => {
  const tabs = [
    { id: 'DASHBOARD', icon: Home, label: 'Home' },
    { id: 'DATABASE', icon: Database, label: 'Trường' },
    { id: 'TIMELINE', icon: Calendar, label: 'Lịch' },
    { id: 'AI_CHAT', icon: MessageSquare, label: 'Hỏi AI' },
    { id: 'SETTINGS', icon: Settings, label: 'Cài đặt' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-primary/80 backdrop-blur-lg border-t border-border flex justify-around items-center h-20 max-w-md mx-auto z-50">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeView === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setView(tab.id as ViewState)}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? 'text-cta' : 'text-placeholder hover:text-textSecondary'}`}
          >
            <div className={`p-2 rounded-xl transition-all ${isActive ? 'bg-cta/10' : ''}`}>
              <Icon size={24} />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
